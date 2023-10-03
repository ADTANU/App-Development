import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { selectUser, logout } from './redux/UserSlice';

const Header = ({ email }) => {
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  const name = user.user && user.user.email ? user.user.email : 'Guest';

  const onLogout = () => {
    // Perform any logout logic (e.g., clearing user data from local storage, etc.)
    
    // Navigate to the login page
    navigate("/");
  };

  return (
    <div className="header">
      <div className="header-actions">
        <span className="welcome">Welcome, {name}!</span>
        <button className="logout-button" onClick={onLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Header;
