import { useState } from 'react';

const useBoolean = (
  initialState = false
): {
  state: boolean;
  setTrue: () => void;
  setFalse: () => void;
  toggle: () => void;
} => {
  const [state, setState] = useState(initialState);

  return {
    state,
    setTrue: () => setState(true),
    setFalse: () => setState(false),
    toggle: () => setState((prev) => !prev),
  };
};

export default useBoolean;
