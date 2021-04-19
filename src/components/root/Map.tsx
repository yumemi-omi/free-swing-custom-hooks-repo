import { useGeolocation } from '@/hooks/useGeolocation';
import { VFC } from 'react';

const Map: VFC = () => {
  const { location, stopWatchLoaction } = useGeolocation();
  return (
    <div>
      <span>緯度{location.latitude}</span>
      <span>経度{location.longitude}</span>
      <button onClick={stopWatchLoaction}>Stop watch location</button>
    </div>
  );
};

export default Map;
