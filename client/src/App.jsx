import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import UserProvider from './components/Authentication/UserProvider';

import GlobalStoreProvider from './components/shared/Globals';

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