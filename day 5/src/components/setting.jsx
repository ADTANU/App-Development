import React, { useEffect, useRef } from 'react';
import '../assets/css/setting.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser, logout } from './redux/UserSlice';
import { Link } from 'react-router-dom';
import Footer from './footer';

const Setting = () => {
  const user = useSelector(selectUser);
  const email = user.user && user.user.email ? user.user.email : 'Guest';
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <div className="admin-dashboardt">
        <aside className="sidebart">
          <div className="logot">CURRENSYNC</div>
          <br />
          <br />
          <nav>
            <ul>
              <li className="nav-itemt" onClick={() => window.location.href = '/dash'}>Dashboard</li>
              <br />
              
              <li className="nav-itemt">Transactions</li>
              <br />
              <li className="nav-itemt">Exchange Rates</li>
              <br />
              <li className="nav-itemt">Users</li>
              <br />
              <li className="nav-itemt">Feedback</li>
              <br />
              <li className="nav-itemt">Settings</li>
              <br/>
              <div className="nav-itemt" onClick={() => window.location.href = '/forgot'}>
                change Password
              </div>
            </ul>
          </nav>
        </aside>

        <div className="headert">
          <h1>SETTINGS</h1>
          <div className="header-actionst">
            <span className="welcomet">Welcome, {email}!</span>
            <button className="logout-buttont" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Setting;
