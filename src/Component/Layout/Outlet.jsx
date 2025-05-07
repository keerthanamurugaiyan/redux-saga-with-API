import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navigate from './Navigate';
import Footer from './Footer';
import FloatingHearts from './FloatingHearts';
import CursorTrail from './CursorTrail';

const routeBackgrounds = {
  '/': 'linear-gradient(135deg, #e8d9f3, #d6c3ee)',
  '/notification': '#DED3B2',
  '/file-saver': '#AD8C85',
  '/cro-pdf': '#C2E7FF',
};

const Layout = () => {
  const { pathname } = useLocation();
  const background = routeBackgrounds[pathname] || 'linear-gradient(135deg, #e8d9f3, #d6c3ee)';

  return (
    <div
      style={{
        minHeight: '100vh',
        background,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <CursorTrail />
      <FloatingHearts />
      <Navigate />
      <div style={{ flex: 1 }}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;