import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Home';
import Search from './Search';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/search" component={Search}/>
      <Route exact path="/search/:input" component={Search}/>
    </Switch>
  );
}
 
export default Routes;