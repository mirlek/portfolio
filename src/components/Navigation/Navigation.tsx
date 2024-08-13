import React from 'react';
import { Link } from 'react-router-dom'; 
import '../Navigation/Navigation.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'; // Импортируем иконку LinkedIn


const Navigation: React.FC = () => {
  return (
    <div className="nav-links">
      <div>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
      </div>
      <div className="right-links">
        <a href="/Ekaterina Mirlenko CV.pdf" download>Download CV</a>
        <a href="https://www.linkedin.com/in/ekaterinamirlenko/" target="_blank" rel="noopener noreferrer" title="Connect with me on Linkedin">
          <FontAwesomeIcon 
            icon={faLinkedin} // Используем импортированную иконку
            style={{color: "#121212"}}
          />    
        </a>
      </div>
    </div>
  );
}

export default Navigation;

