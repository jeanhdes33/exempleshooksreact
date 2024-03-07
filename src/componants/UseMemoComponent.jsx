import React, { useMemo } from 'react';
import { useButtonContext } from './ButtonContext';

const UseMemoComponent = () => {
  const { count, toggleColor, buttonColor } = useButtonContext();


  const quadrupleCount = useMemo(() => {
    console.log('Calcul de quadrupleCount');
    return typeof count === 'number' ? count * 4 : 0; 
  }, [count]);

  return (
    <div>
      <p>Exemple Composant useMemo Nombre de clics : {count}</p>
      <p>Quadruple Count (calculé avec useMemo): {quadrupleCount}</p>
      <button style={{ backgroundColor: buttonColor }} onClick={toggleColor}>
        Cliquez-moi d
      </button>
    </div>
  );
};

export default UseMemoComponent;