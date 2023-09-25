import React, { useState } from 'react';
import '../assets/css/Newdashboard.css';
import Header from './Header';
import Footer from './footer';
import Exchange from './exchange';
import Dashboard from './admindashboard';
import Transaction from './transaction';
import User from './user';
import Feedback from './feedback';
import AdminDashboard from './dashboard';

const App1 = () => {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState('Dashboard'); // Initialize with the default menu item

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  const handleMenuItemClick = (menuItem) => {
    console.log(`Clicked on menu item: ${menuItem}`);
    setActiveMenuItem(menuItem);
  };

  const renderContent = () => {
    console.log('Rendering content for:', activeMenuItem);
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
      case 'Settings':
        return <div>Settings Content</div>;
      default:
        return null; // Default content when no menu item is selected
    }
  };

  return (
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar} />

      {/* Sidebar code */}
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
          <li
            className={`sidebar-list-item ${activeMenuItem === 'Settings' ? 'active' : ''}`}
            onClick={() => handleMenuItemClick('Settings')}
          >
            <i className='fa fa-cog'></i> Settings
          </li>
        </ul>
      </aside>

      {/* Render content based on the activeMenuItem */}
      <main className='main-content'>{renderContent()}</main>

      <Footer />
    </div>
  );
};

export default App1;
