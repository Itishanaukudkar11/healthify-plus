import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo5.png';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <a href="#home" className="navbar-brand">
        <img src={logo} alt="Healthify+" />
        <span>Healthify+</span>
      </a>
      <ol className="navbar-nav">
        <li><a href="#home">Home</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#about">About</a></li>
        <li>
          <button onClick={() => navigate("/login")} className="nav-secondary-button" type="button">
            Login
          </button>
        </li>
        <li>
          <button onClick={() => navigate("/register")} className="nav-primary-button" type="button">
            Register
          </button>
        </li>
      </ol>
    </nav>
  );
};

export default Navbar;