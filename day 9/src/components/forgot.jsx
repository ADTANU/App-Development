import '../assets/css/forgot.css';
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Lottie from 'lottie-web';
import animation from '../assets/css/lotties/forgot.json';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const contain = useRef(null);

  useEffect(() => {
    const anim = Lottie.loadAnimation({
      container: contain.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: animation,
    });
    return () => {
      anim.destroy();
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setMessage('Passwords do not match.');
      return;
    }

    // Handle password reset logic here

    setEmail('');
    setNewPassword('');
    setConfirmPassword('');
    setMessage('Password reset successful.');

    navigate('/'); // Navigate to the login page on success
  };

  return (
    <div className="forgot-password-container">
        <div className='animation-containerforgot'>
          <div ref={contain} className='animconf'></div>
        </div>
      <div className="forgot-password-content">
        <h2>Forgot Password</h2>
        <p>Please enter your email address and new password to reset your password.</p>

        {message && <p className="message">{message}</p>}

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder='Email'
            className='forgotmail'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder='New Password:'
            className='forgotmail'
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder='Confirm Password:'
            className='forgotmail'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          <div className="buttons-container">
            <button type="submit">Reset Password</button>
            <button onClick={() => navigate(-1)}>Back</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
