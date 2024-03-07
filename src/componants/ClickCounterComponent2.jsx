import React from 'react';
import useClickCounter from './UseClickCounter';
import { useButtonContext } from './ButtonContext';

function ClickCounterComponent2() {
  const { count, handleClick } = useClickCounter();
  const { buttonColor, toggleColor } = useButtonContext(); 

  return (
    <div>
      <p>Exemple Hook Nombre de clics (Composant 2) : {count}</p>
      <button
        style={{ backgroundColor: buttonColor }}
        onClick={() => {
          handleClick();
          toggleColor(); 
        }}
      >
        Cliquez-moi aussi
      </button>
    </div>
  );
}

export default ClickCounterComponent2;
