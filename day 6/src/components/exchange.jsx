import React, { useEffect, useRef } from 'react';
import '../assets/css/exchange.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser, logout } from './redux/UserSlice';
import { Link, useNavigate } from 'react-router-dom';
import Footer from './footer';

const Exchange = () => {
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
          <h1>EXCHANGE RATES</h1>
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

export default Exchange;
