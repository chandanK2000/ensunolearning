import React, { useState } from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import LoginPage from '../LoginPage/LoginPage';
import HorizontalScrollbar from '../../HorizontalScrollbar';

function Navbar() {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const openGoogleForm = () => {
    window.location.href = 'https://docs.google.com/forms/d/1hS68D8Lz93_UwxWh-DXZg7QdEqqhTJEAFutAnTfo0IY/edit';
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <HorizontalScrollbar />
      <div className="container-fluid">
        {/* Logo and brand */}
        <NavLink to="/" className="navbar-logo">
          <img src='/logo.webp' alt="Ensueno Learning" height="30px" width="130px" />
        </NavLink>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar items */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            {/* Your navbar items */}
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" to="/coursepage">Our Courses</NavLink>
            </li>
            <li className="nav-item dropdown">
              <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Resources
              </NavLink>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><NavLink className="dropdown-item" activeClassName="active" to="/about">About Us</NavLink></li>
                <li><NavLink className="dropdown-item" activeClassName="active" to="/contact">Contact Us</NavLink></li>
                <li><NavLink className="dropdown-item" activeClassName="active" to="/careers">Career</NavLink></li>
                <li><NavLink className="dropdown-item" activeClassName="active" to="/blogs">Blogs</NavLink></li>
              </ul>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" to="/mydashboard">My Dashboard</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link register" to="#" onClick={openGoogleForm}>Register</NavLink>
            </li>
            <li className="nav-item">
              <button className="nav-link" activeClassName="active" onClick={() => setShowModal(true)}>Login</button>
            </li>
          </ul>
        </div>
      </div>

      <div className={`modal fade ${showModal ? 'show' : ''}`} id="loginModal" tabIndex="-1" role="dialog" aria-labelledby="loginModalLabel" aria-hidden={!showModal} style={{ display: showModal ? 'block' : 'none', top: '-40px' }}>
        <div className="modal-dialog modal-dialog-centered" role="document" style={{ maxWidth: '80%' }}>
          <div className="modal-content">
            <div className="modal-body">
              <LoginPage />
              <button type="button" className="btn-close button_close" aria-label="Close" onClick={handleCloseModal} style={{ position: 'absolute', top: '10px', right: '10px', zIndex: '1050' }}></button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
