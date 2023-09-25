import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/css/contact.css';

const AboutUs = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <div className="about-us-container">
      <h1>About Us</h1>
      <p className="aboutsizechange">
        Welcome to our CURRENSYNC! We are dedicated to providing you with a seamless and secure way to exchange currencies. Our mission is to make currency exchange simple and cost-effective for everyone, whether you're a traveler, an international business, or just someone looking to exchange money. Our team of experts works tirelessly to ensure you get the best exchange rates and the most convenient service. We value your trust and are committed to delivering excellence in everything we do. Thank you for choosing our platform for your currency exchange needs.
      </p>
      <button onClick={goBack}>Go Back</button>
    </div>
  );
};

export default AboutUs;
