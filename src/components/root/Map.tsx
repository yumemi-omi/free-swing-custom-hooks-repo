import { useGeolocation } from '@/hooks/useGeolocation'

const Map = () => {
  const { location } = useGeolocation()
  return (
    <div>
      <span>緯度{location.latitude}</span>
      <span>経度{location.longitude}</span>
    </div>
  )
}

export default Map
