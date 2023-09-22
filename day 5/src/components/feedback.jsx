import React, { useEffect, useRef } from 'react';
import '../assets/css/feedback.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser, logout } from './redux/UserSlice';
import '../assets/css/commonsidebar.css';
import { Link } from 'react-router-dom';
import Footer from './footer';

const Feedback = () => {
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
              
              <li className="nav-itemt"onClick={() => window.location.href = '/transaction'}>Transactions</li>
              <br />
              <li className="nav-itemt"onClick={() => window.location.href = '/exchange'}>Exchange Rates</li>
              <br />
              <li className="nav-itemt"onClick={() => window.location.href = '/user'}>Users</li>
              <br />
              <li className="nav-itemt"onClick={() => window.location.href = '/feedback'}>Feedback</li>
              <br />
              <li className="nav-itemt"onClick={() => window.location.href = '/setting'}>Settings</li>
              <br/>
              <div className="nav-itemt" onClick={() => window.location.href = '/forgot'}>
                change Password
              </div>
            </ul>
          </nav>
        </aside>

        <div className="headert">
          <h1>FEEDBACKS</h1>
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

export default Feedback;
