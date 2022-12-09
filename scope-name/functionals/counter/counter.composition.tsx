import React, { ReactNode, useState } from 'react';

import { Counter } from './counter';

interface NecessaryWrapperComponentProps {
  children?: ReactNode;
}
const NecessaryWrapperComponent = ({
  children,
}: NecessaryWrapperComponentProps) => {
  const [propCount, setCount] = useState<number>(0);
  return (
    <Counter propCount={propCount} handleChangeCounter={setCount}>
      {children}
    </Counter>
  );
};
export const BasicCounterWithNoChildren = () => {
  return <NecessaryWrapperComponent />;
};
export const AddYourOwnChildren = () => {
  return (
    <NecessaryWrapperComponent>
      <Counter.Increment></Counter.Increment>
      <Counter.Count></Counter.Count>
    </NecessaryWrapperComponent>
  );
};
// export const BringYourOwnHandler = () => {
//   return (
//     <Counter
//       handleChangeCounter={(newCount) => {
//         console.log(newCount);
//         return newCount * 2;
//       }}
//     >
//       <Counter.Increment></Counter.Increment>
//       <Counter.Count></Counter.Count>
//     </Counter>
//   );
// };

// export const PassInNumber = () => {
//   return <Counter  />;
// };

// export const PassHugeNumberWithoutMax = () => {
//   return <Counter  />;
// };

// export const CountUpTo10 = () => {
//   return <Counter />;
// };
