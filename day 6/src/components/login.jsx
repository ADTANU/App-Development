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
    username: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    username: '',
    password: '',
  });

  const handleSubmit = async (e) => {
    if(!formData.username|| !formData.password)
    {
      e.preventDefault();
    }
    else{
    dispatch(login(formData.username));
    navigate("/dash");
    }
  };

  return (
    <>
    <div className='overallclasslog'>
      
      <div className="logimage">
        <img src={loginImage} alt="Login" className="login-image" />
      </div>
      <div className="containerlog">
        <div className="lheads">
            <h1>LOGIN</h1>
      </div>
        <div className="lheadsWELCOME">
            <h1>WELCOME BACK!</h1>
      </div>
        <div className="body">
          <div className="right-section">
            <form>
              <div>
                <span className="psw"></span>
              </div>
              <div>
                <input
                  type="text"
                  name="username"
                  placeholder="USER NAME"
                  className="lntext"
                  value={formData.username}
                  onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                  required
                />
                <div className="error-message">{errors.username}</div>
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
              <Link to="forgot">
              <span className="forgotbuttonlink">Forgot Password!!</span>
              </Link>
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
