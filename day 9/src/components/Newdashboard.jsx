import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link
import '../assets/css/Newdashboard.css';
import Header from './Header';
import Footer from './footer';
import Exchange from './exchange';
import Dashboard from './admindashboard';
import Transaction from './transaction';
import User from './user';
import Feedback from './feedback';
import AdminDashboard from './dashboard';
import ForgotPassword from './forgot';

const App1 = () => {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState('Dashboard');
  const navigate = useNavigate();

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  const handleMenuItemClick = (menuItem) => {
    setActiveMenuItem(menuItem);
  };
 const handleOnClick=()=>{
  navigate('/forgot');
 }
  const renderContent = () => {
    switch (activeMenuItem) {
      case 'Dashboard':
        return <AdminDashboard />;
      case 'Exchange Rates':
        return <Exchange />;
      case 'Transactions':
        return <Transaction />;
      case 'Users':
        return <User />;
      case 'Feedbacks':
        return <Feedback />;
      default:
        return null;
    }
  };

  return (
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar} />

      <aside id='sidebar' className={openSidebarToggle ? 'sidebar-responsive' : ''}>
        <ul className='sidebar-list'>
          <li
            className={`sidebar-list-item ${activeMenuItem === 'Dashboard' ? 'active' : ''}`}
            onClick={() => handleMenuItemClick('Dashboard')}
          >
            <i className='fa fa-dashboard'></i> Dashboard
          </li>
          <li
            className={`sidebar-list-item ${activeMenuItem === 'Exchange Rates' ? 'active' : ''}`}
            onClick={() => handleMenuItemClick('Exchange Rates')}
          >
            <i className='fa fa-money'></i> Exchange Rates
          </li>
          <li
            className={`sidebar-list-item ${activeMenuItem === 'Transactions' ? 'active' : ''}`}
            onClick={() => handleMenuItemClick('Transactions')}
          >
            <i className='fa fa-exchange'></i> Transactions
          </li>
          <li
            className={`sidebar-list-item ${activeMenuItem === 'Users' ? 'active' : ''}`}
            onClick={() => handleMenuItemClick('Users')}
          >
            <i className='fa fa-users'></i> Users
          </li>
          <li
            className={`sidebar-list-item ${activeMenuItem === 'Feedbacks' ? 'active' : ''}`}
            onClick={() => handleMenuItemClick('Feedbacks')}
          >
            <i className='fa fa-comments'></i> Feedbacks
          </li>
          {/* Direct the "Change Password" menu item to the Forgot Password page */}
          <li>
            <Link
              to='/forgot'
              className={`sidebar-list-item `}
             style={{textDecoration:"none",color:"white"}}
            >
              <i className='fa fa-cog'></i> Change Password
            </Link>
          </li>
        </ul>
      </aside>

      <main className='main-content'>{renderContent()}</main>

      <Footer />
    </div>
  );
};

export default App1;
