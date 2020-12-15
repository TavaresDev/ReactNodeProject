import React from 'react';
import PageRoutes from '../../Pages/routes';
import UserRoutes from '../../Users/routes';
import MovieRoutes from '../../Movies/routes';
import AuthenticationRoutes from '../../Authentication/routes';

const Routes = () => {
  return (
    <>
      <PageRoutes/>
      <UserRoutes/>
      <MovieRoutes/>
      <AuthenticationRoutes/>
    </>
  );
}
 
export default Routes;