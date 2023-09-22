import React from 'react';
import '../assets/css/sign.css';
import loginImage from './signimage.jpeg'; 
import { Link } from 'react-router-dom';

function Sign() {
  return (
    <>
    <div className="signimage">
      <img src={loginImage} alt="Login" className="signimage" />
    </div>
    <div className="container">
      <div className="body">
        <div>
          <form>
            <div className="siheads">
              <label htmlFor="username">SIGN UP</label>
            </div>
            <div>
              <input type="text" name="firstname" placeholder="FIRST NAME" className="sintext1" required />
            </div>
            <div>
              <input type="text" name="lastname" placeholder="LAST NAME" className="sintext2" required />
            </div>
            <div>
              <input type="email" name="email" placeholder="Email" className="sietext" required />
            </div>
            <div>
              <input type="password" name="password" placeholder="SET PASSWORD" className="si1etext" required />
            </div>
            <div>
              <input type="password" name="password" placeholder="CONFIRM PASSWORD" className="si2etext" required />
            </div>
            <div>
              <input type="submit" value="SUBMIT" className="sisubmit" />
            </div>
          </form>
          <div>
            <p className='account'>Already have an account? </p>
            <Link to='/'>
            <span  className="looginsignbuttonlink" style={{ textDecoration: 'none' }}>
              Login
            </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Sign;
