// src/components/Navbar.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';


const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="navbar">
      <ol className="navbar-nav">
      <li><a href="#home">Home</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#about">About Us</a></li>
                <li>
          <button onClick={() => navigate("/login")} className="login-button">
            Login
</button>
        </li>
      </ol>
    </nav>
  );
};

export default Navbar;

