import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/footer.css';

const Footer = () => {
  return (
    <footer className='footer-container'>
      <div className='footer-content'>
        <div className='footer-links'>
          <ul>
            <li>
              <Link to='/privacy'>Privacy Policy</Link>
            </li>
            <li>
              <Link to='/terms'>Terms and Conditions</Link>
            </li>
            <li>
              <Link to='/faq'>FAQ</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
            <li className='adjustcopy'>
              &copy; {new Date().getFullYear()} CURRENSYNC
            </li>
          </ul>
        </div>
        <div className='footer-social-media'>
          {/* Add social media icons here */}
          
            <i className='fa fa-facebook'></i>
     
        
            <i className='fa fa-twitter'></i>
      
    
            <i className='fa fa-instagram'></i>
       
        </div>
      </div>
    </footer>
  );
};

export default Footer;
