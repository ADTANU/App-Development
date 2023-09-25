import React, { useEffect, useRef } from 'react';
import '../assets/css/dashboard.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser, logout } from './redux/UserSlice';
import Lottie from 'lottie-web';
import animationData from '../assets/css/lotties/dash.json';
import { useNavigate } from 'react-router-dom';
import Footer from './footer';

const AdminDashboard = () => {
  const user = useSelector(selectUser);
  const email = user.user && user.user.email ? user.user.email : 'Guest';
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const contain = useRef(null);
  const numberOfUsers = 100; // Replace with the actual number of users
const numberOfTransactions = 500; // Replace with the actual number of transactions
const additionalData1 = 200; // Replace with your data
const additionalData2 = 1000; // Replace with your data


useEffect(() => {
  const anim = Lottie.loadAnimation({
    container: contain.current,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    animationData: animationData,
  });
  return () => {
    anim.destroy();
    };
}, []);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <div>
      <div className="animation-containerdash">
        <div ref={contain} className="animcondash"></div>
      </div>
      <div className="header">
        <h1>DASHBOARD</h1>
        <div className="header-actions">
          <span className="welcomedash">Welcome, {email}!</span>
          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
      <main className="main-contentdash">
        <header className="page-headerdash">
          <div className="dashboard-contentdash">
            <div className="dashboard-item-container">
              <div className="dashboard-item1">
                <div className="carddash">
                  <h2 className="card-headingdash">Number of Users</h2>
                  <p className="card-contentdash">{numberOfUsers}</p>
                </div>
              </div>

              <div className="dashboard-item1">
                <div className="carddash">
                  <h2 className="card-headingdash">Number of Transactions</h2>
                  <p className="card-contentdash">{numberOfTransactions}</p>
                </div>
              </div>
            </div>

            <div className="dashboard-item-container">
              {/* New card 1 */}
              <div className="dashboard-item2">
                <div className="carddash">
                  <h2 className="card-headingdash">Feedbacks</h2>
                  <p className="card-contentdash">{additionalData1}</p>
                </div>
              </div>

              {/* New card 2 */}
              <div className="dashboard-item2">
                <div className="carddash">
                  <h2 className="card-headingdash">Anything</h2>
                  <p className="card-contentdash">{additionalData2}</p>
                </div>
              </div>
            </div>
          </div>
        </header>
      </main>
      <Footer />
    </div>
  );
};

export default AdminDashboard;
