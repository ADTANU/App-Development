import React, { useEffect, useRef } from 'react';
import '../assets/css/admindashboard.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser, logout } from './redux/UserSlice';
import Lottie from 'lottie-web';
import animationData from '../assets/css/lotties/dash.json';
import { Link } from 'react-router-dom'; 

  import Footer from './footer';

const AdminDashboard = () => {
  const user = useSelector(selectUser);
  const email = user.user && user.user.email ? user.user.email : 'Guest';
  const dispatch = useDispatch();

  // Sample data (replace with actual data)
  const numberOfUsers = 100;
  const numberOfTransactions = 500;
  const additionalData1 = 200; // Replace with your data
  const additionalData2 = 1000; // Replace with your data
  const contain = useRef(null);

  useEffect(() => {
    const anim = Lottie.loadAnimation({
      container: contain.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: animationData,
    });
  }, []);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <div className='animation-container'>
        <div ref={contain} className='animcon'></div>
      </div>
      <div className="admin-dashboard">
        <aside className="sidebar">
          <div className="logo">CURRENSYNC</div>
          <br />
          <br />
          <nav>
            <ul>
              <li className="nav-item">Dashboard</li>
              <br />
              <li className="nav-item" onClick={() => window.location.href = '/transaction'}>Transactions</li>

              <br />
              <li className="nav-item" onClick={() => window.location.href = '/exchange'}>Exchange Rates</li>
              <br />
              <li className="nav-item" onClick={() => window.location.href = '/user'}>Users</li>
              <br />
              <li className="nav-item" onClick={() => window.location.href = '/feedback'}>Feedback</li>
              <br />
              <li className="nav-item" onClick={() => window.location.href = '/setting'}>Settings</li>
              <br/>
              <div className="nav-item" onClick={() => window.location.href = '/forgot'}>
                change Password
              </div>
            </ul>
          </nav>
        </aside>

        <div className="header">
          <h1>Dashboard</h1>
          <div className="header-actions">
            <span className="welcome">Welcome, {email}!</span>
            <button className="logout-button" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>

        <main className="main-content">
          <header className="page-header">
            <div className="dashboard-content">
              <div className="dashboard-item1">
                <div className="card">
                  <h2>Number of Users</h2>
                  <p>{numberOfUsers}</p>
                </div>
              </div>

              <div className="dashboard-item1">
                <div className="card">
                  <h2>Number of Transactions</h2>
                  <p>{numberOfTransactions}</p>
                </div>
              </div>
            </div>
            <div className="dashboard-content">
              {/* New card 1 */}
              <div className="dashboard-item2">
                <div className="card">
                  <h2>Feedbacks</h2>
                  <p>{additionalData1}</p>
                </div>
              </div>

              {/* New card 2 */}
              <div className="dashboard-item2">
                <div className="card">
                  <h2>Anything</h2>
                  <p>{additionalData2}</p>
                </div>
              </div>
            </div>
          </header>
        </main>
        <Footer/>
      </div>
    </div>
  );
};

export default AdminDashboard;
