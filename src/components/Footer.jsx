import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
const Footer = () => {

  const { theme } = useContext(ThemeContext);
  return (

    <div className={`home-footer py-3 bg-${theme} text-${theme === 'light' ? 'dark' : 'light'} text-center`}>
    <div className="container">
    <p>&copy; {new Date().getFullYear()} Coffee Shop. All rights reserved.</p>
    </div>
    </div>
  );

};

export default Footer;