import React from 'react';
import '../assets/css/contactdetails.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const ContactDetails = () => {
  return (
    <footer className="contact-footer">
      <div className="contact-info">
        <h2>Contact Us</h2>
        <p>Email: currensync@gmail.com</p>
        <p>Phone: +91 9161718191</p>
        <p>Address: 16/5, Main St, Coimbatore, Tamilnadu</p>
      </div>
      <div className="social-links">
        <h2 className='classcolorforfollow'>Follow Us</h2>
        {/* Facebook */}
        <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} className="social-icon" />
        </a>
        {/* Twitter */}
        <a href="https://www.twitter.com/yourpage" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} className="social-icon" />
        </a>
        {/* Instagram */}
        <a href="https://www.instagram.com/yourpage" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} className="social-icon" />
        </a>
      </div>
      <br></br>
      <div className="additional-links">
        <Link to="/privacy" className="link-button">
          Privacy Policy
        </Link>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/terms" className="link-button">
          Terms and Conditions
        </Link>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/faq" className="link-button">
          FAQ
        </Link>
      </div>
      <div className="copyright">
        <p>&#169; 2023 CURRENSYNC</p>
      </div>
    </footer>
  );
};

export default ContactDetails;
