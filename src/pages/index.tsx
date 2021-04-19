import ResponsiveComponent from '@/components/root/ResponsiveComponent';
import ThemeCmp from '@/components/root/ThemeCmp';
import ThemeCmpWithContext from '@/components/root/ThemeCmpWithContext';
import NotificationCmp from '@/components/root/NotificationCmp';
import { css } from '@emotion/react';
import Link from 'next/link';

const Home = () => {
  return (
    <section css={myStyle}>
      <Link href="/hello">To hello page</Link>
      <ResponsiveComponent />
      <ThemeCmp />
      <ThemeCmpWithContext />
      <NotificationCmp />
    </section>
  );
};

const myStyle = css`
  font-size: 3rem;
  font-weight: bold;
`;

export default Home;
