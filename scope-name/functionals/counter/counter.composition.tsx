import React, { ReactNode, useState } from 'react';

import { Counter } from './counter';
import { useCounter } from './use-counter.hook';

interface WrappedComponentProps {
  children?: ReactNode;
}
const WrappedCounter = ({ children }: WrappedComponentProps) => {
  const { count, setDecrement, setIncrement } = useCounter(0);
  return (
    <Counter propCount={count}>
      <Counter.Increment
        handleIncrement={() => setIncrement(1)}
        disabled={false}
      ></Counter.Increment>
      <Counter.Decrement
        handleDecrement={() => setDecrement(1)}
        disabled={false}
      ></Counter.Decrement>
      <Counter.Count count={count}></Counter.Count>
    </Counter>
  );
};
export const AddYourOwnChildren = () => {
  return <WrappedCounter></WrappedCounter>;
};
export const NoChildren = () => {
  return <Counter propCount={0}></Counter>;
};
export const BringYourOwnValidation = () => {
  const NewCounter = () => {
    const { count, setDecrement, setIncrement } = useCounter(0);
    return (
      <Counter propCount={count}>
        <Counter.Increment
          handleIncrement={() => setIncrement(1)}
          disabled={false}
        ></Counter.Increment>
        <Counter.Decrement
          // block going negative
          handleDecrement={() => (count > 0 ? setDecrement(1) : null)}
          disabled={count <= 0}
        ></Counter.Decrement>
        <Counter.Count count={count}></Counter.Count>
      </Counter>
    );
  };
  return <NewCounter />;
};
