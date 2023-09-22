import React, { useEffect, useRef } from 'react';
import '../assets/css/exchange.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser, logout } from './redux/UserSlice';
import { Link } from 'react-router-dom';
import Footer from './footer';

const Exchange = () => {
  const user = useSelector(selectUser);
  const email = user.user && user.user.email ? user.user.email : 'Guest';
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <div className="admin-dashboardtE">
        <aside className="sidebartE">
          <div className="logotE">CURRENSYNC</div>
          <br />
          <br />
          <nav>
            <ul>
              <li className="nav-itemtE" onClick={() => window.location.href = '/dash'}>Dashboard</li>
              <br />
              
              <li className="nav-itemtE" onClick={() => window.location.href = '/transaction'}>Transactions</li>
              <br />
              <li className="nav-itemtE" onClick={() => window.location.href = '/exchange'}>Exchange Rates</li>
              <br />
              <li className="nav-itemtE" onClick={() => window.location.href = '/user'}>Users</li>
              <br />
              <li className="nav-itemtE" onClick={() => window.location.href = '/feedback'}>Feedback</li>
              <br />
              <li className="nav-itemtE" onClick={() => window.location.href = '/setting'}>Settings</li>
              <br/>
              <div className="nav-itemtE" onClick={() => window.location.href = '/forgot'}>
                change Password
              </div>
            </ul>
          </nav>
        </aside>

        <div className="headertE">
          <h1>EXCHANGE RATES</h1>
          <div className="header-actionstE">
            <span className="welcometE">Welcome, {email}!</span>
            <button className="logout-buttontE" onClick={handleLogout}>
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
