import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from './redux/UserSlice';
import { useNavigate } from 'react-router-dom';
import Footer from './footer';
import { Carousel } from 'antd';
import '../assets/css/feedback.css';
import { CarouselActive } from './carouselActive';

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

  // Create a ref for the Carousel component
  const carouselRef = useRef(null);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  const goToNextSlide = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };

  const goToPrevSlide = () => {
    if (carouselRef.current) {
      carouselRef.current.prev();
    }
  };

  return (
    <div>
      <CarouselActive/>
      
      <Footer />
    </div>
  );
};

export default Feedback;
