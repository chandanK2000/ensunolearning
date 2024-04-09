import React from 'react';
import { FaEnvelope, FaLock } from 'react-icons/fa'; // Import the icons
import './LoginPage.css';
import { Link } from 'react-router-dom';

const LoginPage = () => {

  const RedirecttoRegister = () => {
    window.location.href = '/mydashboard';
  }
  return (
    <div className="login-page">
      <div className="loginsection">
        <h2>Login</h2>
        <form>
          <div className="form-group">
            <label htmlFor="email">
              <FaEnvelope className="icon" /> 
              Username or Email Address
            </label>
            <input type="email" id="email" name="email" className="form-control" placeholder="Enter your email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">
              <FaLock className="icon" /> 
              Password
            </label>
            <input type="password" id="password" name="password" className="form-control" placeholder="Enter your password" />
          </div>
          <div className="form-check">
            <input type="checkbox" id="rememberMe" name="rememberMe" className="form-check-input" />
            <label htmlFor="rememberMe" className="form-check-label">Remember me</label>
          </div>
          <button type="submit" className="login_button">Login In</button>
          <p className='font-weight-normal'><a href="#">Lost your password?</a></p>
          <div className="">
            <Link to="/">
              <img src='/logolensuno.webp' alt="Ensueno Learning" className="navbar-logo" height="40px" width="230px" />
            </Link>
          </div>
        </form>
      </div>
      <div className="registersection">
        <h2>Register</h2>
        <p>Don't have an account? <a href="#" onClick={RedirecttoRegister}>Register one!</a></p>
        <button className="register_button" onClick={RedirecttoRegister}>Register an Account</button>
      </div>
    </div>
  );
}

export default LoginPage;
