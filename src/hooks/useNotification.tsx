import { useState, useEffect } from 'react';

export const useNotification = (message: string) => {
  const [isGranted, setPermission] = useState(false);

  useEffect(() => {
    const checkNotificationPromise = () => {
      try {
        Notification.requestPermission().then();
      } catch (e) {
        return false;
      }
      return true;
    };

    const notify = () => {
      new Notification(message);
      setPermission(true);
    };

    // Let's check if the browser supports notifications
    if (!('Notification' in window)) {
      console.log('This browser does not support notifications.');
    } else {
      if (Notification.permission === 'granted') {
        notify();
      } else if (Notification.permission !== 'denied') {
        if (checkNotificationPromise()) {
          Notification.requestPermission().then(() => {
            notify();
          });
        } else {
          Notification.requestPermission(function () {
            notify();
          });
        }
      }
    }
  }, []);

  return {
    isGranted,
  };
};
