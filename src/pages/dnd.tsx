import Link from 'next/link';
import { VFC } from 'react';
import DndComponent from '@/components/root/DndComponent';

const Dnd: VFC = () => {
  return (
    <section>
      DND page
      <Link href="/hello">To hello page</Link>
      <Link href="/">To index page</Link>
      <DndComponent />
    </section>
  );
};

export default Dnd;
