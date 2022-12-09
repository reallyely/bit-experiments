import { useState } from 'react';
export function useCounter(defaultNum = 0) {
  const [count, setCount] = useState<number>(defaultNum);
  return {
    count,
    setIncrement: (b) => setCount(add(b, count)),
    setDecrement: (b) => setCount(sub(b, count)),
  };
}

function add(a, b) {
  return a + b;
}
function sub(a, b) {
  return b - a;
}
