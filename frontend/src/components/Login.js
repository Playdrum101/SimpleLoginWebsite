import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import './Login.css';

function Login({ setUser }) {
  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      const response = await axios.post('http://localhost:8000/auth/google', {
        token: credentialResponse.credential
      });
      setUser(response.data);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const handleGoogleError = () => {
    console.error('Login Failed');
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Welcome</h1>
        <p>Please sign in with your Google account</p>
        <div className="google-button">
          <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onError={handleGoogleError}
            useOneTap
          />
        </div>
      </div>
    </div>
  );
}

export default Login; 