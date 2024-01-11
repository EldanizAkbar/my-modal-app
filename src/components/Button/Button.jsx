import React from 'react';
import './button.scss';

const Button = ({color, text, onClick }) => {
  const buttonClasses = `custom-button-${color} text-white font-bold py-2 px-4 rounded mt-10`;

  return (
    <button className={buttonClasses} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
