import { useState, useEffect, useCallback } from 'react'

export const useGeolocation = () => {
  const [location, setLocation] = useState({
    latitude: 0,
    longitude: 0
  })
  const [watchStatus, setWatchStatus] = useState({
    isWatching: false, watchId: NaN
  })

  const stopWatchLoaction = useCallback(() => {
    navigator.geolocation.clearWatch(watchStatus.watchId);
    setWatchStatus({ isWatching: false, watchId: NaN });
  }, [watchStatus.watchId])

  useEffect(() => {
    if('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation(prev => ({
          ...prev,
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        }));
      });
    } else {
      alert('geolocation IS NOT available')
    }
  }, [])

  useEffect(() => {
    if('geolocation' in navigator) {
      const watchId = navigator.geolocation.watchPosition(position => {
        const { latitude, longitude } = position.coords;
        console.log({latitude, longitude})
        setLocation({ latitude, longitude });
      });
      setWatchStatus({ isWatching: true, watchId });
    }
  }, [])

  return {
    location,
    setLocation,
    stopWatchLoaction
  }
}
