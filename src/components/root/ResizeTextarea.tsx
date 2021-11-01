import { VFC } from 'react';
import { css } from '@emotion/react';
import { useResizeTextarea } from '@/hooks/useResizeTextarea';

const ResizeTextarea: VFC = () => {
  const { text, events } = useResizeTextarea('initial value');

  return (
    <textarea
      css={textareaStyle}
      value={text}
      name=""
      rows={1}
      spellCheck={false}
      {...events}
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
