import React, { useEffect, useRef } from 'react';
import '../assets/css/exchange.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser, logout } from './redux/UserSlice';
import { Link, useNavigate } from 'react-router-dom';
import Footer from './footer';
import Header from './Header';

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
      
        <Footer/>
    </div>
  );
};

export default Exchange;
