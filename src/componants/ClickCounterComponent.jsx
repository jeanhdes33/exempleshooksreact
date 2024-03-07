import React from 'react';
import useClickCounter from './UseClickCounter';
import { useButtonContext } from './ButtonContext';

function ClickCounterComponent() {
  const { count, handleClick } = useClickCounter();
  const { buttonColor, toggleColor } = useButtonContext(); 

  return (
    <div>
      <p>Exemple Hook Nombre de clics : {count}</p>
      <button
        style={{ backgroundColor: buttonColor }}
        onClick={() => {
          handleClick();
          toggleColor(); 
        }}
      >
        Cliquez-moi
      </button>
    </div>
  );
}

export default ClickCounterComponent;
