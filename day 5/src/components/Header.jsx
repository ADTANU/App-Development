// Header.jsx
import React from 'react';

const Header = ({ email, onLogout }) => {
  return (
    <div className="header">
      <h1>Dashboard</h1>
      <div className="header-actions">
        <span className="welcome">Welcome, {email}!</span>
        <button className="logout-button" onClick={onLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Header;