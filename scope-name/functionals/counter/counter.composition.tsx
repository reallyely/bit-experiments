import { Counter } from './counter';
import React from 'react';

export const BasicCounterWithNoChildren = () => {
  return <Counter />;
};
export const BringYourOwnCounter = () => {
  return (
    <Counter>
      <Counter.Increment></Counter.Increment>
      <Counter.Count></Counter.Count>
    </Counter>
  );
};
export const BringYourOwnHandler = () => {
  return (
    <Counter
      handleChangeCounter={(newCount) => {
        console.log(newCount);
        return newCount * 2;
      }}
    >
      <Counter.Increment></Counter.Increment>
      <Counter.Count></Counter.Count>
    </Counter>
  );
};
export const ImproperUse = () => {
  return (
    <div>
      <Counter.Increment></Counter.Increment>
      <Counter.Count></Counter.Count>
    </div>
  );
};

// export const PassInNumber = () => {
//   return <Counter  />;
// };

// export const PassHugeNumberWithoutMax = () => {
//   return <Counter  />;
// };

// export const CountUpTo10 = () => {
//   return <Counter />;
// };
