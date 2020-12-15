import React, { useContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import { UserContext } from '../Authentication/UserProvider';

import Index from './index';
import Show from './Show';
// import New from './New';
// import Edit from './Edit';

const Routes = () => {
  const { user } = useContext(UserContext);
  
  return (
    <Switch>
      {/* <Route exact path="/new" component={New}/> */}

      {user && user.token ? (
        <>
          <Route exact path="/movies" component={Index}/>
          <Route exact path="/movie" component={Show}/>
          {/* <Route exact path="/movie/edit" component={Edit}/> */}
        </>
      ) : null}
    </Switch>
  );
}
 
export default Routes;