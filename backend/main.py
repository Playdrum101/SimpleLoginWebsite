from fastapi import FastAPI, HTTPException, Depends
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import RedirectResponse
from google.oauth2 import id_token
from google.auth.transport import requests
import os
from dotenv import load_dotenv
from pydantic import BaseModel
from typing import Optional

# Load environment variables
load_dotenv()

app = FastAPI()

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # React app URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Google OAuth configuration
GOOGLE_CLIENT_ID = os.getenv("GOOGLE_CLIENT_ID")

class TokenData(BaseModel):
    token: str

class UserInfo(BaseModel):
    email: str
    name: str
    picture: Optional[str] = None

@app.get("/")
async def root():
    return {"message": "Welcome to the Google Sign-In API"}

@app.post("/auth/google")
async def google_auth(token_data: TokenData):
    try:
        # Verify the token
        idinfo = id_token.verify_oauth2_token(
            token_data.token, requests.Request(), GOOGLE_CLIENT_ID
        )

        # Get user info
        user_info = UserInfo(
            email=idinfo["email"],
            name=idinfo["name"],
            picture=idinfo.get("picture")
        )

        return user_info
    except ValueError:
        raise HTTPException(status_code=401, detail="Invalid token")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000) 