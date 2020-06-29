import React from 'react';
import './ThemeSelect.css'

function ThemeSelect({theme, onButtonClick}) {
  return (
    <div className="ThemeSelect">
      <p>Select Theme:</p>
      <input type="checkbox" id="switch" onClick={onButtonClick(theme)} /><label for="switch">Toggle</label>
    </div>
  );
}

export default ThemeSelect;