
import React, { createContext, useContext, useState } from 'react';

const ButtonContext = createContext();

export const ButtonProvider = ({ children }) => {
  const [buttonColor, setButtonColor] = useState('red');
  const [count, setCount] = useState(0);

  const toggleColor = () => {
    setButtonColor((prevColor) => (prevColor === 'red' ? 'blue' : 'red'));
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <ButtonContext.Provider value={{ buttonColor, toggleColor, count }}>
      {children}
    </ButtonContext.Provider>
  );
};

export const useButtonContext = () => {
  return useContext(ButtonContext);
};
