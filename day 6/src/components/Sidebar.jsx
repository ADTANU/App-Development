// Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="logo">CURRENSYNC</div>
      <br />
      <br />
      <nav>
        <ul>
          <li className="nav-item">Dashboard</li>
          <br />
          <li className="nav-item">
            <Link to="/transaction">Transactions</Link>
          </li>
          <br />
          <li className="nav-item">Exchange Rates</li>
          <br />
          <li className="nav-item">Users</li>
          <br />
          <li className="nav-item">Feedback</li>
          <br />
          <li className="nav-item">Settings</li>
          <br />
          <div className="nav-item" onClick={() => window.location.href = '/forgot'}>
            Change Password
          </div>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;