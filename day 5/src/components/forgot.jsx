// ForgotPassword.js
import React, { useState } from 'react';
import '../assets/css/forgot.css';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if newPassword and confirmPassword match
    if (newPassword !== confirmPassword) {
      setMessage('Passwords do not match.');
      return;
    }

    // Handle password reset logic here
    // You can make an API request to update the password on the server

    // Clear form fields and display success message if password reset is successful
    setEmail('');
    setNewPassword('');
    setConfirmPassword('');
    setMessage('Password reset successful.');
  };

  return (
    <div className="forgot-password-container">
      <div className="forgot-password-content">
        <h2>Forgot Password</h2>
        <p>Please enter your email address and new password to reset your password.</p>
        
        {message && <p className="message">{message}</p>}
        
        <form onSubmit={handleSubmit}>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>New Password:</label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />

          <label>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          <button type="submit">Reset Password</button>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
