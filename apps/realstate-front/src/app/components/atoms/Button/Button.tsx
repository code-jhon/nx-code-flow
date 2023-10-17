import React from 'react';

interface ButtonProps {
  label: string;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, variant = 'primary', onClick }) => {
  let buttonStyles = 'px-6 py-2 rounded focus:outline-none';

  if (variant === 'primary') {
    buttonStyles += ' bg-blue-500 text-white hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50';
  } else if (variant === 'secondary') {
    buttonStyles += ' bg-gray-200 text-gray-700 hover:bg-gray-300 focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50';
  }

  return (
    <button className={buttonStyles} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
