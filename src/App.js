import React from 'react';
import { Switch, Route } from 'react-router';

import { routesShape } from './types';

import './App.css';

const App = ({ routes }) => (
  <div className="App">
    <Switch>
      {routes.map((route) => (
        <Route
          key={`path-${route.path}`}
          exact={route.exact}
          path={route.path}
          component={route.component}
        />
      ))}
    </Switch>
  </div>
);

App.propTypes = {
  ...routesShape,
};

export default App;
