import React from 'react';
import './Button.css';  // Importing the CSS file for the button styles

const Button = ({ children, className, onClick }) => {
  return (
    <button className={`button ${className}`} onClick={onClick}>
      <span className="button-content">{children}</span>
    </button>
  );
};

export default Button;
