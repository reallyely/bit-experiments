import React, { ReactNode, createContext, useState } from 'react';

import { useContext } from 'react';

export type CounterProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
  /**
   * This component does nothing on its own, and must be used as a controlled component. Bring your own state updater for us to call
   */
  handleChangeCounter: any;
  /**
   * As a controlled component, we need the count to be passed to us
   */
  propCount: number;
};

interface CountContextInterface {
  handleSetCount: React.Dispatch<React.SetStateAction<number>>;
  count: number;
}
const [useCountContext, CountContext] = createCtx<CountContextInterface>();

export function Counter({
  children,
  handleChangeCounter,
  propCount = 0,
}: CounterProps) {
  return children ? (
    <CountContext
      value={{ count: propCount, handleSetCount: handleChangeCounter }}
    >
      <>{children} </>
    </CountContext>
  ) : (
    <CountContext
      value={{ count: propCount, handleSetCount: handleChangeCounter }}
    >
      <Counter.Count></Counter.Count>
      <Counter.Increment></Counter.Increment>
      <Counter.Decrement></Counter.Decrement>
    </CountContext>
  );
}

export type CounterChangeProps = {};

Counter.Decrement = function () {
  const { count, handleSetCount } = useCountContext();

  return <button onClick={() => handleSetCount(sub(1)(count))}>-</button>;
};

Counter.Increment = function () {
  const { count, handleSetCount } = useCountContext();
  return <button onClick={() => handleSetCount(add(1)(count))}>+</button>;
};

Counter.Count = function ({}) {
  const { count } = useCountContext();
  return <div>{count}</div>;
};

function add(a) {
  return (b) => a + b;
}
function sub(a) {
  return (b) => b - a;
}

function createCtx<T extends {} | null>() {
  const ctx = createContext<T | undefined>(undefined);
  function useCtx() {
    const c = useContext(ctx);
    if (c === undefined)
      throw new Error('useCtx must be inside a Provider with a value');
    return c;
  }
  return [useCtx, ctx.Provider] as const; // 'as const' makes TypeScript infer a tuple
}
