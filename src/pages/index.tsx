import ResponsiveComponent from '@/components/root/ResponsiveComponent';
import ThemeCmp from '@/components/root/ThemeCmp';
import ThemeCmpWithContext from '@/components/root/ThemeCmpWithContext';
import NotificationCmp from '@/components/root/NotificationCmp';
import { css } from '@emotion/react';
import Link from 'next/link';
import { VFC } from 'react';
import ResizeTextarea from '@/components/root/ResizeTextarea';
import type { GetServerSideProps } from 'next';
import { useRequest } from '@/lib/useRequest';

const Home: VFC = () => {
  const data = useRequest({ url: '/user', method: 'get' });
  console.log({ data });

  return (
    <section css={myStyle}>
      <Link href="/hello">To hello page</Link>
      <Link href="/dnd">To dnd page</Link>
      <ResponsiveComponent />
      <ThemeCmp />
      <ThemeCmpWithContext />
      <NotificationCmp />
      <ResizeTextarea />
    </section>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  // const data = await getRequestInstance('http://localhost:3000/user');
  // console.log(data);
  return { props: {} };
};

const myStyle = css`
  font-size: 3rem;
  font-weight: bold;
`;

export default Home;
