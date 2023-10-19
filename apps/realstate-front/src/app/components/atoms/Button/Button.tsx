import React from 'react';

interface ButtonProps {
  label: string;
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
  rounded?: boolean;
  onClick?: () => void;
  disabled: boolean;
}

export const Button: React.FC<ButtonProps> = ({ label, variant = 'primary', onClick, fullWidth, rounded, disabled }) => {
  let buttonStyles = 'px-6 py-2 rounded focus:outline-none';

  if (variant === 'primary') {
    buttonStyles += ' bg-blue-500 text-white hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50';
  } else if (variant === 'secondary') {
    buttonStyles += ' bg-gray-200 text-gray-700 hover:bg-gray-300 focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50';
  }

  if (fullWidth) {
    buttonStyles += ' w-full';
  }

  if (rounded) {
    buttonStyles += ' rounded-full';
  }

  if (disabled) {
    buttonStyles += ' opacity-50 cursor-not-allowed';
  }

  return (
    <button className={buttonStyles} onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
};
