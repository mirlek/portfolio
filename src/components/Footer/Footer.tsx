import React from 'react';
import Navigation from '../Navigation/Navigation';
import '../Footer/Footer.css'

interface FooterProps {
  title: string;
}

const Footer: React.FC<FooterProps> = ({ title }) => {
  return (
    <div className="footer">
      <h3>{title}</h3>
      <Navigation />
    </div>
  );
}

export default Footer;
