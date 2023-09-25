import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from './redux/UserSlice';
import { useNavigate } from 'react-router-dom';
import Footer from './footer';
import { Carousel } from 'antd';
import '../assets/css/feedback.css';

const dummyFeedbackData = [
  {
    id: 1,
    username: 'User1',
    feedbackText: 'This website is awesome!',
  },
  {
    id: 2,
    username: 'User2',
    feedbackText: 'Great job on the design!',
  },
  {
    id: 3,
    username: 'User3',
    feedbackText: 'I found the website very useful.',
  },
];

const Feedback = () => {
  const user = useSelector((state) => state.user);
  const email = user.user && user.user.email ? user.user.email : 'Guest';
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <div className="admin-dashboard">
      <div className="header">
        <h1>FEEDBACKS</h1>
        <div className="header-actions">
          <span className="welcome">Welcome, {email}!</span>
          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>

      <div className="carousel-container">
        <Carousel autoplay>
          {dummyFeedbackData.map((feedback) => (
            <div key={feedback.id} className="feedback-slide">
              <h3>{feedback.username}</h3>
              <p>{feedback.feedbackText}</p>
            </div>
          ))}
        </Carousel>
      </div>

      <Footer />
    </div>
  );
};

export default Feedback;
