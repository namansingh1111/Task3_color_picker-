import React, { useState } from 'react';

function ColorPicker() {
  const [selectedColor, setSelectedColor] = useState('#000000');

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  return (
    <div>
      <h2>Color Picker</h2>
      <input
        type="color"
        value={selectedColor}
        onChange={handleColorChange}
      />
      <div
        style={{
          width: '100px',
          height: '100px',
          backgroundColor: selectedColor,
        }}
      ></div>
    </div>
  );
}

export default ColorPicker;
