import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../assets/css/login.css';
import loginImage from './loginn.jpg';
import { useDispatch } from 'react-redux';
import { login } from './redux/UserSlice';

function Login() {
  const dispatch = useDispatch();
const navigate=useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    
    if (!formData.email.trim()) {
      setErrors({ ...errors, email: 'Email is required' });
    } else if (!emailRegex.test(formData.email)) {
      setErrors({ ...errors, email: 'Invalid email format' });
    } else {
      setErrors({ ...errors, email: '' });
    }

    
    if (!formData.password.trim()) {
      setErrors({ ...errors, password: 'Password is required' });
    } else {
      setErrors({ ...errors, password: '' });
    }

    
    if (Object.values(errors).some((error) => error !== '')) {
      return;
    }

    
    console.log('Form data submitted:', formData);

    dispatch(login(formData.email));
    navigate("/dash");
  };

  return (
    <>
    <div className='overallclasslog'>
      <div className="logimage">
        <img src={loginImage} alt="Login" className="login-image" />
      </div>
      <div className="containerlog">
        <div className="body">
          <div className="right-section">
            <form>
              <div className="lheads">
                <label htmlFor="username">LOGIN</label>
              </div>
              <div>
                <span className="psw"></span>
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="EMAIL"
                  className="lntext"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
                <div className="error-message">{errors.email}</div>
              </div>
              <div>
                <input
                  type="password"
                  name="password"
                  placeholder="PASSWORD"
                  className="plntext"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  required
                />
                <div className="error-message">{errors.password}</div>
              </div>
              <div>
                <button type="submit" className="lsubmit" onClick={handleSubmit}>
                  SUBMIT
                </button>
              </div>
            </form>
            <div>
              <span className="forgotbuttonlink">Forgot Password!!</span>
            </div>
            <div>
              <p className="accountl">Create NEW Account!! </p>
              <Link to="/signup">
                <span className="sbuttonlink">Sign Up</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Login;
