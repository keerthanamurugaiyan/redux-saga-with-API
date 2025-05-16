import React from 'react';
import { FiBell } from 'react-icons/fi';
import { useSelector } from 'react-redux';

function NotificationBell() {
  const notifications = useSelector((state) => state.notifications?.notifications);

  return (
<div className="position-relative d-inline-block">
  <FiBell size={32} className="text-light" />
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