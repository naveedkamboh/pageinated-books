import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/Layout/home'
const App = () => {
  return (
    <Router>
      <Switch>
      <Route exact path="/" component={Home} />
        <Home />
      </Switch>
    </Router>
  );
};

export default App;
