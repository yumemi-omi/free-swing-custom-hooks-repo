import ResponsiveComponent from '@/components/root/ResponsiveComponent';
import ThemeCmp from '@/components/root/ThemeCmp';
import { css } from '@emotion/react';
import Link from 'next/link'

const myStyle = css`
  color: hotpink;
  font-size: 1rem;
  font-weight: bold;
`;

const Home = () => {
  return (
    <section css={myStyle}>
      <Link href="/hello">To hello page</Link>
      <ResponsiveComponent />
      <ThemeCmp />
    </section>
  );
};

export default Home;
