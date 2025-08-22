import React from 'react';
import { FiBell } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';

function NotificationBell() {
  const notifications = useSelector((state) => state.notifications?.notifications || []);
  console.log("🔔 Notifications in Redux:", notifications);

  return (
    <div className="position-relative d-inline-block">
      {/* Continuous Shake Animation */}
      <motion.div
        animate={{
          rotate: [-5, 5, -5], // tilt left & right
        }}
        transition={{
          duration: 0.5, // speed of one shake
          repeat: Infinity, // loop forever
          repeatType: "loop",
          ease: "easeInOut",
        }}
        style={{ display: "inline-block" }}
      >
        <FiBell size={32} className="text-light" />
      </motion.div>

      {/* Badge */}
      {notifications.length > 0 && (
        <span
          className="position-absolute top-0 start-100 translate-middle badge rounded-pill"
          style={{ backgroundColor: 'red', color: 'white' }}
        >
          {notifications.length}
        </span>
      )}
    </div>
  );
}

export default NotificationBell;