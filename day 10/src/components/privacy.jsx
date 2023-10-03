import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../assets/css/privacy.css'; 
import Lottie from 'lottie-web';
import animationprivacy from '../assets/css/lotties/privacy.json';

function PrivacyPolicy() {
  const navigate = useNavigate(); // Initialize navigate
  const contain = useRef(null);

  useEffect(() => {
    const anim = Lottie.loadAnimation({
      container: contain.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: animationprivacy,
    });
    return () => {
      anim.destroy();
    };
  }, []);

  // Function to handle the back button click
  const handleBackClick = () => {
    navigate(-1); // Use navigate to navigate back
  };

  return (
    <div>
      <div className='animation-containerprivacy'>
        <div ref={contain} className='animcon'></div>
      </div>

      <div className="privacy-policy-container">
        <header>
          <h1 className='helloo' style={{ textAlign: 'center' }}>Privacy Policy</h1>
        </header>
        
        <div className="privacy-policy-content">
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;When you use our online currency exchange platform, we collect technical information such as your IP address, device details, and browser information. Additionally, we gather transaction data, including currency exchange rates and transaction history. We utilize the collected information to facilitate currency exchange transactions, enhance user experiences, and optimize platform performance. Moreover, we may analyze data to detect and prevent fraudulent activities and ensure the security of your financial information. Your personal financial data is not shared with third parties without your consent. However, we may share aggregated and anonymized data for statistical analysis and reporting purposes. We employ advanced encryption and security measures to protect your financial transactions. We implement industry-standard security protocols to safeguard your data. These measures include data encryption, secure connections, and regular security audits to ensure the protection of your financial information. If you have any questions or concerns regarding our Privacy Policy or the security of your data, please reach out to our support team at currensync@gmail.com
          </p>
        </div>

        <footer>
          <p>&copy; {new Date().getFullYear()} CURRENSYNC. All Rights Reserved.</p>
        </footer>

        <button onClick={handleBackClick} className="back-button">Back</button> {/* Back button */}
      </div>
    </div>
  );
}

export default PrivacyPolicy;
