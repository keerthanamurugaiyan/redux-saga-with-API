import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navigate from '../Layout/Navigate';

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2 },
  }),
};

const features = [
  {
    title: 'Notifications',
    description: 'Real-time product alerts using Redis.',
    link: '/notification',
    icon: '🔔',
    bgColor: '#B59ED5',
  },
  {
    title: 'File Download',
    description: 'Download local PDF file with animation.',
    link: '/file-saver',
    icon: '📥',
    bgColor: '#B59ED5',
  },
  {
    title: 'API PDF Viewer',
    description: 'View and download CRO PDF from API.',
    link: '/cro-pdf',
    icon: '🧾',
    bgColor: '#B59ED5',
  },
];

const HomePage = () => {
  return (
    <div
      style={{
        // minHeight: '100vh',
        background: 'linear-gradient(135deg, #e8d9f3, #d6c3ee)',
        overflow: 'hidden',
        position: 'relative',
        paddingBottom: '50px',
      }}
    >
      {/* Inline styles for floating heart CSS */}
      <style>{`
        .heart {
          position: absolute;
          width: 20px;
          height: 20px;
          background-color: white;
          clip-path: polygon(
            50% 0%,
            61% 12%,
            75% 12%,
            88% 25%,
            88% 37%,
            75% 50%,
            50% 75%,
            25% 50%,
            12% 37%,
            12% 25%,
            25% 12%,
            39% 12%
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

        .icon-wrapper {
          position: relative;
          display: inline-block;
        }

        .bloom {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background-color: #B59ED5;
          transform: translate(-50%, -50%);
          z-index: 0;
          animation: bloomGlow 2s ease-in-out infinite;
          opacity: 0.6;
        }

        @keyframes bloomGlow {
          0% {
            box-shadow: 0 0 0 0 rgba(181, 158, 213, 0.6);
          }
          50% {
            box-shadow: 0 0 20px 15px rgba(181, 158, 213, 0.4);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(181, 158, 213, 0.6);
          }
        }

        .icon-content {
          font-size: 2.5rem;
          position: relative;
          z-index: 1;
        }
      `}</style>

      {/* Floating heart elements */}
      {[...Array(15)].map((_, i) => (
        <div
          className="heart"
          key={i}
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${i * 1}s`,
          }}
        />
      ))}

      {/* Main content */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center pt-5 fw-bold"
        style={{ color: '#34495E', zIndex: 1, position: 'relative' }}
      >
        Welcome to the Dashboard
      </motion.h1>

      <div className="container mt-5" style={{ position: 'relative', zIndex: 1 }}>
        <div className="row justify-content-center">
          {features.map((feature, index) => (
            <motion.div
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              key={feature.title}
              className="col-md-4 mb-4"
            >
              <Link to={feature.link} style={{ textDecoration: 'none' }}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="card p-4 rounded-4 shadow text-center"
                  style={{
                    backgroundColor: feature.bgColor,
                    border: 'none',
                    minHeight: '220px',
                  }}
                >
                  <div className="icon-wrapper">
                    <div className="bloom"></div>
                    <div className="icon-content">{feature.icon}</div>
                  </div>
                  <h4 className="mt-3 text-dark">{feature.title}</h4>
                  <p className="text-muted">{feature.description}</p>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;

