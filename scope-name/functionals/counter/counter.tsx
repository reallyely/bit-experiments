import React, { ReactNode } from 'react';
import { countReducer, useCounter } from './use-counter.hook';

export type CounterProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
  /**
   * As a controlled component, we need the count to be passed to us
   */
  propCount: number;
};

export function Counter({ children, propCount }: CounterProps) {
  const { count, setDecrement, setIncrement } = useCounter({
    reducer: countReducer,
  });

  return children ? (
    <>{children} </>
  ) : (
    <>
      <Counter.Count count={count}></Counter.Count>
      <Counter.Increment
        disabled={false}
        handleIncrement={() => setIncrement()}
      ></Counter.Increment>
      <Counter.Decrement
        disabled={false}
        handleDecrement={() => setDecrement()}
      ></Counter.Decrement>
    </>
  );
}

export type CounterChangeProps = {};

Counter.Decrement = function ({ disabled = false, handleDecrement }) {
  return (
    <button disabled={disabled ?? disabled} onClick={() => handleDecrement()}>
      -
    </button>
  );
};

Counter.Increment = function ({ disabled = false, handleIncrement }) {
  return (
    <button disabled={disabled ?? disabled} onClick={() => handleIncrement()}>
      +
    </button>
  );
};

Counter.Count = function ({ count }) {
  return <div>{count}</div>;
};
