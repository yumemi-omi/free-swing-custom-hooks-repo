import { useState } from 'react';

const useBool = (
  initialState = false
): {
  state: boolean;
  setTrue: () => void;
  setFalse: () => void;
} => {
  const [state, setState] = useState(initialState);

  return {
    state,
    setTrue: () => setState(true),
    setFalse: () => setState(false),
  };
};

export default useBool;
