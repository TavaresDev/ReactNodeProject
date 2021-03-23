import React, { createContext, useState } from 'react';
import { Alert } from 'react-bootstrap';

export const NotificationContext = createContext();

const NotificationProvider = ({children}) => {
  const [notification, setNotification] = useState(null);

  return (
    <NotificationContext.Provider value={{ notification, setNotification }}>
      {notification ? (
        <Alert className='mb-0' variant={notification.type} onClose={() => setNotification(false)} dismissible>
          {notification.message}
        </Alert>
      ) : null}

      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationProvider;