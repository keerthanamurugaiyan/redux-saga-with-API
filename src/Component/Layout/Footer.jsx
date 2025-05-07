import React from 'react';
import { useLocation } from 'react-router-dom';

const Footer = () => {
  const year = new Date().getFullYear();
  const location = useLocation();

  const getFooterStyle = () => {
    switch (location.pathname) {
      case '/notification':
        return { backgroundColor: '#5D6C5B', color: 'white' }; // dark red
      case '/file-saver':
        return { backgroundColor: '#293B3C', color: 'white' }; // dark green
      case '/cro-pdf':
        return { backgroundColor: '#2C3D5C', color: 'white' }; // dark blue
      default:
        return { backgroundColor: '#40354A', color: 'white' }; // default
    }
  };

  return (
    <footer
      className="text-center py-3"
      style={{
        ...getFooterStyle(),
        borderTop: '1px solid rgba(255, 255, 255, 0.2)',
        borderTopLeftRadius: '25px',
        borderTopRightRadius: '25px',
        marginTop: '20px',
      }}
    >
      © {year} All rights reserved.
    </footer>
  );
};

export default Footer;
