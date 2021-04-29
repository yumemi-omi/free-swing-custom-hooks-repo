import {
  useState,
  useCallback,
  useRef,
  useEffect,
  useLayoutEffect,
  VFC,
} from 'react';
import { css } from '@emotion/react';

const ALLOWANCE = 2;

const ResizeTextarea: VFC = () => {
  const [text, setText] = useState('');
  const heightRef = useRef('');
  const ref = useRef<HTMLTextAreaElement>(null);

  const onChange = useCallback<React.ChangeEventHandler<HTMLTextAreaElement>>(
    (e) => {
      setText(e.target.value);
      // resizeTextarea();
    },
    []
  );

  const resizeTextarea = useCallback(() => {
    heightRef.current = 'auto';
    if (ref && ref.current) {
      const el = ref.current;
      heightRef.current = `${el.scrollHeight + ALLOWANCE}px`;
    }
  }, [heightRef]);

  useEffect(() => {
    if (ref && ref.current) {
      const el = ref.current;
      el.style.height = 'auto';
      // heightRef.current = 'auto';
      el.style.height = `${el.scrollHeight + ALLOWANCE}px`;
      // heightRef.current = `${el.scrollHeight}px`;
    }
  }, [text]);

  // useEffect(() => {
  //   if (ref && ref.current) {
  //     setHeight('auto');
  //     const el = ref.current;
  //     setHeight(`${el.scrollHeight + ALLOWANCE}px`);
  //   }
  // }, [text]);

  return (
    <textarea
      css={textareaStyle}
      style={{ height: heightRef.current }}
      value={text}
      name=""
      rows={1}
      spellCheck={false}
      onChange={onChange}
      ref={ref}
    />
  );
};

const textareaStyle = css`
  border: 4px solid #4a5a85;
  border-radius: 8px;
  min-height: 48px;
  width: 30%;
  margin-left: 2rem;
`;

export default ResizeTextarea;
