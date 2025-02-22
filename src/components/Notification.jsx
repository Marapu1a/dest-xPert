import React from 'react';

const Notification = ({ message, position }) => {
  if (!message) return null;

  return (
    <div
      className="fixed bg-black text-white text-sm py-2 px-4 rounded-lg shadow-lg"
      style={{
        top: position.y + 15 + 'px',
        left: position.x + 15 + 'px',
        zIndex: 1000,
      }}
    >
      {message}
    </div>
  );
};

export default Notification;
