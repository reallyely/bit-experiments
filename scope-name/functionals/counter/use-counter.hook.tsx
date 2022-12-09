import { useReducer } from 'react';
type CountState = { count: number };
type CountAction = { type: 'INC' | 'DEC' };

export type CountReducer = (
  initialState: CountState,
  action: CountAction
) => CountState;

export type UseCounterProps = {
  reducer?: CountReducer;
};

export function countReducer(state: CountState, action: CountAction) {
  switch (action.type) {
    case 'INC': {
      return { count: add(state.count, 1) };
    }
    case 'DEC': {
      return { count: sub(1, state.count) };
    }
    default: {
      throw new Error(`Unhandled type: ${action.type}`);
    }
  }
}
export function useCounter({ reducer = countReducer }: UseCounterProps) {
  const [{ count }, dispatch] = useReducer(reducer, { count: 0 });

  return {
    count,
    setIncrement: () => dispatch({ type: 'INC' }),
    setDecrement: () => dispatch({ type: 'DEC' }),
  };
}

function add(a, b) {
  return a + b;
}
function sub(a, b) {
  return b - a;
}
