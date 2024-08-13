// src/components/Header.tsx
import React, { useState } from 'react';
import Navigation from '../Navigation/Navigation';
import logo from '../../assets/logo.png';
import './Header.css'; 

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="header">
      <div className="column small">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="column large">
        <Navigation />
        <div className="burger-menu">
          <button onClick={toggleMenu}>
            <span>&#9776;</span> 
          </button>
          <div className={`nav-links ${isOpen ? 'open' : ''}`}>
            <Navigation />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
