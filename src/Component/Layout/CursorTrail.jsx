import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const routeColors = {
  '/': '#C77DFF',
  '/notification': '#FF9F1C',
  '/file-saver': '#FF6B6B',
  '/cro-pdf': '#3ABEFF',
};

const CursorTrail = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const { pathname } = useLocation();
  const color = routeColors[pathname] || '#C77DFF';

  useEffect(() => {
    const moveHandler = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', moveHandler);
    return () => window.removeEventListener('mousemove', moveHandler);
  }, []);

  return (
    <>
      {/* Outer ring */}
      <motion.div
        animate={{ x: position.x - 20, y: position.y - 20 }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 40,
          height: 40,
          border: `2px solid ${color}`,
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
        }}
      />
      {/* Inner dot */}
      <motion.div
        animate={{ x: position.x - 5, y: position.y - 5 }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 10,
          height: 10,
          backgroundColor: color,
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
        }}
      />
    </>
  );
};

export default CursorTrail;
