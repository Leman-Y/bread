import React from 'react';
import{ Redirect, Route } from 'react-router-dom';

import auth from '../services/auth';
import SignIn from '../pages/signin';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    auth.isAuthenticated === true
      ? <Component {...props} />
      : <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }} />
  )} />,
  <Route {...rest} render={(props) => (
    auth.isAuthenticated === true
      ? <Component {...props} />
      : <Redirect to={{
          pathname: '/signin',
          state: { from: props.location }
        }} />
  )} />
  
);

export default PrivateRoute;