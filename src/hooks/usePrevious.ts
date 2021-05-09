import { useRef, useEffect } from 'react';

export const usePrevious = (value: undefined) => {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  });

  return ref.current;
};
