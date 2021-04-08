import { useState, useEffect } from 'react'

const notificationPermission = {
  default: "default",
  denied: "denied",
  granted: "granted",
};

export const useNotification = (message: string) => {
  const [isGranted, setPermission] = useState(false)

  useEffect(() => {
    switch (Notification.permission) {
      case notificationPermission.default:
        Notification.requestPermission()
        break
      case notificationPermission.granted:
        new Notification(message)
        setPermission(true)
        break
      case notificationPermission.denied:
        alert('拒否設定')
        setPermission(false)
        break
    }
  }, [])

  return {
    isGranted
  }
}
