import { useState, useCallback, VFC } from 'react';
import { css } from '@emotion/react';

const ResizeTextarea: VFC = () => {
  const [text, setText] = useState('');

  const onChange = useCallback<React.ChangeEventHandler<HTMLTextAreaElement>>(
    (e) => {
      console.log(typeof e);
      setText(e.target.value);
    },
    []
  );

  return (
    <textarea
      css={textareaStyle}
      value={text}
      name=""
      onChange={onChange}
      cols={30}
      rows={1}
    />
  );
};

const textareaStyle = css`
  border: 4px solid #4a5a85;
  border-radius: 8px;
`;

export default ResizeTextarea;
