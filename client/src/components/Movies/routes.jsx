import React, { useContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import { UserContext } from '../Authentication/UserProvider';

import Index from './index';
import Show from './Show';
import New from './New';
import Edit from './Edit';
import AddFromApi from './AddFromAPI';
import MovieDetails from './MovieDetails';

const Routes = () => {
  const { user } = useContext(UserContext);
  
  return (
    <Switch>
      <Route exact path="/new" component={New}/>
      <Route exact path="/movies/add/" component={AddFromApi}/>
      <Route exact path="/movies/details" component={MovieDetails}/>

      {user && user.token ? (
        <>
          <Route exact path="/movies" component={Index}/>
          <Route exact path="/movies/:movieID" component={Show}/>
          <Route exact path="/movies/edit/:id" component={Edit}/>
        </>
      ) : null}
    </Switch>
  );
}
 
export default Routes;