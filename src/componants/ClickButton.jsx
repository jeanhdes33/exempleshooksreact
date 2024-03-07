
import React, { useState, useCallback } from 'react';
import { useButtonContext } from './ButtonContext';

const ClickButton = () => {
  const { toggleColor, buttonColor } = useButtonContext();
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(count + 1);
    toggleColor();
  }, [count, toggleColor]);

  return (
    <div>
      <p>Nombre de clics : {count}</p>
      <button style={{ backgroundColor: buttonColor }} onClick={handleClick}>
        Cliquez-moi / callback
      </button>
    </div>
  );
};

export default ClickButton;
