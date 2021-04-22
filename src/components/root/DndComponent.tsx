import { css } from '@emotion/react';
import { useDnDSort } from '@/hooks/useDnDSort';

const imageList: string[] = [
  'http://placehold.jp/99ccff/003366/150x150.png',
  'http://placehold.jp/ff99bd/003366/150x150.png',
  'http://placehold.jp/99fff3/003366/150x150.png',
  'http://placehold.jp/99ffaa/003366/150x150.png',
  'http://placehold.jp/d1ff99/003366/150x150.png',
  'http://placehold.jp/ffeb99/003366/150x150.png',
  'http://placehold.jp/ffc299/003366/150x150.png',
  'http://placehold.jp/ff9e99/003366/150x150.png',
  'http://placehold.jp/ff8e99/003376/150x150.png',
];

const DndComponent = () => {
  const results = useDnDSort(imageList);

  return (
    <div css={bodyStyle}>
      <ul css={listStyle}>
        {results.map((item) => (
          <li css={imageCardStyle} key={item.key} {...item.events}>
            <img src={item.value} alt={item.value} css={imageStyle} />
          </li>
        ))}
      </ul>
    </div>
  );
};

const bodyStyle = css`
  height: 100vh;
  display: flex;
  overflow: hidden;
  align-items: center;
  justify-content: center;
`;

const listStyle = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  max-width: 350px;
  max-height: 500px;
`;

const imageCardStyle = css`
  cursor: grab;
  user-select: none;
  width: 100px;
  height: 130px;
  overflow: hidden;
  border-radius: 5px;
  margin: 3px;
`;

const imageStyle = css`
  pointer-events: none;
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export default DndComponent;
