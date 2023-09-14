import '../assets/css/login.css';
import loginImage from './login.jpg'; 
import { Link } from 'react-router-dom';
function Login() {
  
  return (
    <>
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
              <input type="email" name="email" placeholder="EMAIL" className="lntext" required />
            </div>
            <div>
              <input type="password" name="password" placeholder="PASSWORD" className="plntext" required />
            </div>
            <div>
              <button type="submit" className="lsubmit">
                SUBMIT
              </button>
            </div>
          </form>
          <div>
            <a className="forgotbuttonlink">Forgot Password!!</a>
          </div>
          <div>
            <Link to='/signup'>
            <a className="sbuttonlink" >Create NEW Account!! Sign Up</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Login;
