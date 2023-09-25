import '../assets/css/terms.css';
import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Lottie from 'lottie-web';
import animationterms from '../assets/css/lotties/terms.json';

function TermsAndConditions() {
    const navigate = useNavigate();
    const contain = useRef(null);

  useEffect(() => {
    const anim = Lottie.loadAnimation({
      container: contain.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: animationterms,
    });
    return () => {
      anim.destroy();
    };
  }, []);
    const handleBackClick = () => {
        navigate(-1); 
      };
  return (
    <>
        <div className='animation-containerterms'>
        <div ref={contain} className='animcon'></div>
      </div>
    <div className="terms-container">
      <h1>Terms and Conditions</h1>
      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;By using our online currency exchange platform ("CURRENSYNC"), you agree to abide by these Terms and Conditions. If you do not accept these terms, please refrain from using our platform. CURRENSYNC is intended for individuals who are at least 18 years old. Your usage of CURRENSYNC must comply with relevant laws and regulations. Exchange rates may fluctuate, and we do not guarantee their accuracy or availability. We are committed to safeguarding your privacy; please review our Privacy Policy for details. We reserve the right to terminate or suspend your account without notice if you violate these Terms and Conditions. CURRENSYNC is provided "as is," and we do not guarantee it will be error-free or uninterrupted. We are not responsible for any indirect or consequential damages arising from the use of our platform. We may modify these Terms and Conditions at any time without notice. For questions or concerns, contact our support team at support@currensync.com.
      </p>
      <footer>
        <p>&copy; {new Date().getFullYear()} CURRENSYNC. All Rights Reserved.</p>
      </footer>
      <button onClick={handleBackClick} className="back-buttonterms">Back</button> {/* Back button */}
    </div>
    </>
  );
}

export default TermsAndConditions;
