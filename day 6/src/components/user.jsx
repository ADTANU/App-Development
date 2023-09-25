import React from 'react';
import '../assets/css/user.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser, logout } from './redux/UserSlice';
import { useNavigate } from 'react-router-dom';
import Footer from './footer';

const User = () => {
  const user = useSelector(selectUser);
  const email = user.user && user.user.email ? user.user.email : 'Guest';
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <div>
    <div className="admin-dashboard">
      

      <div className="header">
        <h1>USER</h1>
        <div className="header-actions">
          <span className="welcome">Welcome, {email}!</span>
          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
  );
};

export default User;
