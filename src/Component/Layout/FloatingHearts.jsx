import React from 'react';
import { useLocation } from 'react-router-dom';

const routeColors = {
  '/': 'white',
  '/notification': 'white',  // gold
  '/file-saver': 'white',    // lightgreen
  '/cro-pdf': 'white',       // skyblue
};

const FloatingHearts = () => {
  const { pathname } = useLocation();
  const heartColor = routeColors[pathname] || 'white';

  return (
    <>
      <style>{`
        .heart {
          position: absolute;
          width: 20px;
          height: 20px;
          background-color: ${heartColor};
          clip-path: polygon(
            50% 0%, 61% 12%, 75% 12%, 88% 25%,
            88% 37%, 75% 50%, 50% 75%, 25% 50%,
            12% 37%, 12% 25%, 25% 12%, 39% 12%
          );
          opacity: 0.7;
          animation: floatHeart 15s linear infinite;
        }

        @keyframes floatHeart {
          0% {
            transform: translateY(100vh) scale(1);
            opacity: 0.5;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(-10vh) scale(1.2);
            opacity: 0;
          }
        }
      `}</style>

      {[...Array(15)].map((_, i) => (
        <div
          className="heart"
          key={i}
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${i * 1}s`,
            zIndex: 0,
          }}
        />
      ))}
    </>
  );
};

export default FloatingHearts;
