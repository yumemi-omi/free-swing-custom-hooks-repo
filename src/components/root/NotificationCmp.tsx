import { useNotification } from '@/hooks/useNotification';
import { VFC } from 'react';

const NotificationCmp: VFC = () => {
  const { isGranted } = useNotification('つうちだよーー');

  return (
    <div>
      <span>通知{isGranted ? '許可' : '拒否'}</span>
    </div>
  );
};

export default NotificationCmp;
