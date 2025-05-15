# Google Sign-In Web Application

This is a web application that implements Google Sign-In authentication using FastAPI and React.

## Project Structure
```
.
├── backend/           # FastAPI backend
├── frontend/         # React frontend
├── requirements.txt  # Python dependencies
└── README.md        # This file
```

## Setup Instructions

### Backend Setup
1. Create a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

3. Create a `.env` file in the backend directory with your Google OAuth credentials:
   ```
   GOOGLE_CLIENT_ID=your_client_id
   GOOGLE_CLIENT_SECRET=your_client_secret
   ```

4. Run the backend server:
   ```bash
   cd backend
   uvicorn main:app --reload
   ```

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file with your Google OAuth client ID:
   ```
   REACT_APP_GOOGLE_CLIENT_ID=your_client_id
   ```

4. Start the development server:
   ```bash
   npm start
   ```

## Google OAuth Setup
1. Go to the Google Cloud Console (https://console.cloud.google.com)
2. Create a new project or select an existing one
3. Enable the Google+ API
4. Create OAuth 2.0 credentials
5. Add authorized JavaScript origins (http://localhost:3000 for development)
6. Add authorized redirect URIs (http://localhost:8000/auth/google/callback for backend)
7. Copy the client ID and client secret to your respective .env files 