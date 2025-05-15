import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

function Dashboard({ user }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user data and redirect to login
    navigate('/');
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-box">
        <div className="user-profile">
          {user.picture && (
            <img src={user.picture} alt="Profile" className="profile-picture" />
          )}
          <h2>Welcome, {user.name}!</h2>
          <p className="user-email">{user.email}</p>
        </div>
        <button onClick={handleLogout} className="logout-button">
          Sign Out
        </button>
      </div>
    </div>
  );
}

export default Dashboard; 