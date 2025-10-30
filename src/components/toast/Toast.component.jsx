import React, { useEffect } from 'react';
import './Toast.style.css';

const Toast = ({ message, type = 'success', onClose, duration = 3000 }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div className={`custom-toast custom-toast-${type}`}>
      <div className="custom-toast-content">
        <span className="custom-toast-icon">
          {type === 'success' ? '✓' : '✕'}
        </span>
        <span className="custom-toast-message">{message}</span>
      </div>
      <button className="custom-toast-close" onClick={onClose}>
        ×
      </button>
    </div>
  );
};

export default Toast;
