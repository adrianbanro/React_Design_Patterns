import React from 'react';

export function useCounter() {
  const [count, setCounter] = React.useState(0);
  const handleIncrement = () => setCounter(count + 1);
  const handleDecrement = () => setCounter(count - 1);

  return { count, handleIncrement, handleDecrement };
}
