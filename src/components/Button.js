import React from 'react';
import './Button.css';

function Button({content, onButtonClick, type, theme}) {
  return (
    <div className={`Button ${content === "0" ? "zero" : ""} ${content === "=" ? "equals" : ""} ${theme !== 'apple' ? 'windows' : ''} ${type === "" ? "" : type}`}
    onClick={onButtonClick(content)}>
      {content}
    </div>
  );
}

export default Button;