import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './components/shared/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './components/shared/Routes';
import UserProvider from './components/Authentication/UserProvider';
import NotificationProvider from './components/shared/Notifications';
import GlobalStoreProvider from './components/shared/Globals';
import Footer from './components/shared/Footer';
import Layout from './components/shared/Layout';

const App = () => {
  return (
    <GlobalStoreProvider>
        <UserProvider>
          <BrowserRouter>
          <Layout/>
          </BrowserRouter>
        </UserProvider>
    </GlobalStoreProvider>
  );
}
 
export default App;