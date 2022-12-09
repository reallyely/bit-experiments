import React, { ReactNode } from 'react';
import { countReducer, useCounter } from './use-counter.hook';

import { Counter } from './counter';

interface WrappedComponentProps {
  children?: ReactNode;
}
export const DefaultReducer = ({ children }: WrappedComponentProps) => {
  return <Counter propCount={0}></Counter>;
};
export const UseOurOwnReducer = () => {
  const { count, setIncrement, setDecrement } = useCounter({
    reducer: (state, action) => {
      const changes = countReducer(state, action);
      // Block going negative
      if (changes.count > 0) return { ...changes };
      return { count: 0 };
    },
  });
  return (
    <Counter propCount={count}>
      <Counter.Count count={count}></Counter.Count>
      <Counter.Increment handleIncrement={setIncrement}></Counter.Increment>
      <Counter.Decrement handleDecrement={setDecrement}></Counter.Decrement>
    </Counter>
  );
};
