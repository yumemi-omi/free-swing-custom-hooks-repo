import { useState, useEffect } from 'react'

export const useGeolocation = () => {
  const [location, setLocation] = useState({
    latitude: 0,
    longitude: 0
  })
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

  return {
    location,
    setLocation
  }
}
