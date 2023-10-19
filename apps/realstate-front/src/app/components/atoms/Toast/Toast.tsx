import React, { useState, useEffect } from 'react';

interface ToastProps {
  message: string;
  duration?: number; // in milliseconds
  type?: 'success' | 'error' | 'info';
  isSB?: boolean;
}

export const Toast: React.FC<ToastProps> = ({ message, duration = 3000, type = 'info', isSB=false }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, duration);

    return () => {
      clearTimeout(timer);
    };
  }, [duration]);

  if (!visible) return null;

  let bgColor = '';
  switch (type) {
    case 'success':
      bgColor = 'bg-green-500';
      break;
    case 'error':
      bgColor = 'bg-red-500';
      break;
    case 'info':
      bgColor = 'bg-blue-500';
      break;
  }

  return (
    <div className={`${isSB ? '' : 'fixed'} bottom-4 right-4 p-4 rounded shadow-lg text-white ${bgColor}`}>
      {message}
    </div>
  );
};
