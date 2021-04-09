import { useState, useEffect } from 'react'

const notificationPermission = {
  default: "default",
  denied: "denied",
  granted: "granted",
};

export const useNotification = (message: string) => {
  const [isGranted, setPermission] = useState(false)

  useEffect(() => {
    function checkNotificationPromise() {
      try {
        Notification.requestPermission().then();
      } catch(e) {
        return false;
      }

      return true;
    }

    // Let's check if the browser supports notifications
    if (!('Notification' in window)) {
      console.log("This browser does not support notifications.");
    } else {
      if(checkNotificationPromise()) {
        Notification.requestPermission()
        .then((permission) => {
          new Notification("new");
          setPermission(true)
        })
      } else {
        Notification.requestPermission(function(permission) {
          new Notification("old");
          setPermission(true)
        });
      }
    }
  }, [])

  return {
    isGranted
  }
}
