import React from 'react';
import logo from '../../../assets/1280px-Marvel_Comics_1990_logo.png';

const Footer = () => {

  return (
    <footer >
            <p id="ilovemarvelcomics">
        <span>I</span>
        <span style={{ color: 'red', fontSize: '24px', margin: '0 8px' }}>&#10084;</span>
        <img src={logo} alt="Marvel Comics Logo" style={{ width: '48px', verticalAlign: 'middle' }} />
      </p>
      <p style={{ lineHeight: '48px', marginLeft: 'auto'  }}>Developed by <a href="https://github.com/nachocorbillon" target="_blank" rel="noopener noreferrer">Nacho Corbillón</a></p>

    </footer>
  );
};

export default Footer;