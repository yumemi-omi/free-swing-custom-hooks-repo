import { useState, useCallback, useRef, useEffect, VFC } from 'react';
import { css } from '@emotion/react';

const ALLOWANCE = 2;

const ResizeTextarea: VFC = () => {
  const [text, setText] = useState('');
  const ref = useRef<HTMLTextAreaElement>(null);
  const heightRef = useRef('');

  const onChange = useCallback<React.ChangeEventHandler<HTMLTextAreaElement>>(
    (e) => {
      setText(e.target.value);
    },
    []
  );

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

  return (
    <textarea
      css={textareaStyle}
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
