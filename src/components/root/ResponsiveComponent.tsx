import useDeviceScreen from '@/hooks/useDeviceScreen';
import { VFC } from 'react';

const ResponsiveComponent: VFC = () => {
  const { deviceScreen } = useDeviceScreen();

  return (
    <p>
      {deviceScreen.pc && <span>PC</span>}
      {deviceScreen.tb && <span>Tablet</span>}
      {deviceScreen.sp && <span>Smartphone</span>}
    </p>
  );
};

export default ResponsiveComponent;
