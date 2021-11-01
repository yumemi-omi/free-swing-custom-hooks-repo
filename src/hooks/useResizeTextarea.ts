import {
  useState,
  useCallback,
  useRef,
  useEffect,
  ChangeEventHandler,
  RefObject,
} from 'react';

const ALLOWANCE = 8;

export const useResizeTextarea = (
  initialValue = ''
): {
  text: string;
  events: {
    onChange: ChangeEventHandler<HTMLTextAreaElement>;
    ref: RefObject<HTMLTextAreaElement>;
  };
} => {
  const [text, setText] = useState(initialValue);
  const ref = useRef<HTMLTextAreaElement>(null);
  const heightRef = useRef('');

  const onChange = useCallback<ChangeEventHandler<HTMLTextAreaElement>>((e) => {
    setText(e.target.value);
  }, []);

  useEffect(() => {
    if (ref && ref.current) {
      const el = ref.current;
      el.style.height = 'auto';
      const height = `${el.scrollHeight + ALLOWANCE}`;
      if (height !== heightRef.current) {
        el.style.height = `${height}px`;
        heightRef.current = `${height}px`;
      }
    }
  }, [text]);

  return {
    text,
    events: {
      onChange,
      ref,
    },
  };
};
