import React from 'react';
import '../assets/css/transaction.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser, logout } from './redux/UserSlice';
import { useNavigate } from 'react-router-dom';
import Footer from './footer';

const Transaction = () => {
  const user = useSelector(selectUser);
  const email = user.user && user.user.email ? user.user.email : 'Guest';
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  // Sample transaction history data (replace with your actual data)
  const transactionHistory = [
    {
      id: 1,
      date: '2023-09-15',
      description: 'Purchase 1',
      amount: 50.0,
    },
    {
      id: 2,
      date: '2023-09-14',
      description: 'Purchase 2',
      amount: 35.0,
    },
    {
      id: 3,
      date: '2023-09-14',
      description: 'Purchase 3',
      amount: 95.0,
    },
    // Add more transaction history data as needed
  ];

  return (
    <div>
      <div className="admin-dashboard">
        <div className="header">
          <h1>TRANSACTIONS</h1>
          <div className="header-actions">
            <span className="welcome">Welcome, {email}!</span>
            <button className="logout-button" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      </div>

      <h2 className="transaction-history-header">Transaction History</h2>

      <table className="transaction-table">
        <thead>
          <tr>
            <th>Transaction ID</th>
            <th>Date</th>
            <th>Description</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactionHistory.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.id}</td>
              <td>{transaction.date}</td>
              <td>{transaction.description}</td>
              <td>${transaction.amount.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Footer />
    </div>
  );
};

export default Transaction;
