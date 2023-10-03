import React, { useState } from 'react';
import '../assets/css/sign.css';
import loginImage from './signimage.jpeg'; 
import { Link, useNavigate } from 'react-router-dom';

function Sign() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [formErrors, setFormErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check for empty fields
    const errors = {};
    let hasError = false;

    for (const key in formData) {
      if (!formData[key]) {
        errors[key] = 'Field is required';
        hasError = true;
      } else {
        errors[key] = '';
      }
    }

    if (hasError) {
      setFormErrors(errors);
      return;
    }

    // Proceed with form submission logic here
    // ...

    // For example, you can navigate to a success page after submission
    navigate('/'); // Replace '/success' with the actual success page route
  };

  return (
    <>
      <div className="signimage">
        <img src={loginImage} alt="Login" className="signimage" />
      </div>
      <div className="containersign">
        <div className="siheads">
          <h1 className='signcolorchange'>SIGN UP</h1>
        </div>
        <div className="siheadscurren">
          <h1>CURRENSYNC</h1>
        </div>
        <div className="body">
          <form>
            <div>
              <input
                type="text"
                name="firstName"
                placeholder="FIRST NAME"
                className="sintext1"
                required
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              />
              <div className="error-message">{formErrors.firstName}</div>
            </div>
            <div>
              <input
                type="text"
                name="lastName"
                placeholder="LAST NAME"
                className="sintext2"
                required
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              />
              <div className="error-message">{formErrors.lastName}</div>
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="sietext"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              <div className="error-message">{formErrors.email}</div>
            </div>
            <div>
              <input
                type="password"
                name="password"
                placeholder="SET PASSWORD"
                className="si1etext"
                required
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
              <div className="error-message">{formErrors.password}</div>
            </div>
            <div>
              <input
                type="password"
                name="confirmPassword"
                placeholder="CONFIRM PASSWORD"
                className="si2etext"
                required
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
              />
              <div className="error-message">{formErrors.confirmPassword}</div>
            </div>
            <div>
              <button type="submit" className="sisubmit" onClick={handleSubmit}>
                SUBMIT
              </button>
            </div>
          </form>
          <div>
            <p className='account'>Already have an account? </p>
            <Link to='/'>
              <span className="looginsignbuttonlink" style={{ textDecoration: 'none' }}>
                Login
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sign;
