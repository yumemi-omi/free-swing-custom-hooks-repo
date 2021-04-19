import * as React from 'react';
import useDeviceScreen from '@/hooks/useDeviceScreen';

const ResponsiveComponent = () => {
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
