import React, { useEffect, useRef } from 'react';
import '../assets/css/admindashboard.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser, logout } from './redux/UserSlice';
import { Link } from 'react-router-dom';
import Lottie from 'lottie-web';
import animationData from '../assets/css/lotties/dash.json';

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
              <li className='navhover1'>Dashboard</li>
              <br></br>
              <li className='navhover2'>Transactions</li>
              <br></br>
              <li className='navhover3'>Exchange Rates</li>
              <br></br>
              <li className='navhover3'>Users</li>
              <br></br>
              <li className='navhover4'>Feed Back</li>
              <br></br>
              <Link to="/forgot">
                <li className='navhover5'>Forgot Password</li>
              </Link>
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
                  <h2>Feed Backs</h2>
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
      </div>
    </div>
  );
};

export default AdminDashboard;
