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
    
    <Footer/>
  </div>
  );
};

export default User;
