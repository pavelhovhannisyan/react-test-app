import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';

import LoginPage from 'containers/LoginPage/LoginPage';
import UserDetail from 'containers/UserDetail/UserDetail';
import NotFoundPage from 'containers/NotFoundPage/NotFoundPage';
import './style.scss';

const App = () => (
  <div className="app-wrapper">
    <Switch>
      <Route exact path="/" component={LoginPage} />
      <Route exact path="/user-details" component={UserDetail} />
      <Route path="" component={NotFoundPage} />
    </Switch>
  </div>
);

export default App;
