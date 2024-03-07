import { useState } from 'react';

function useClickCounter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return { count, handleClick };
}

export default useClickCounter;