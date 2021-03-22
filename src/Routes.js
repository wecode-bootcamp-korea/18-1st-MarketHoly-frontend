import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './Pages/Main/Main';
import Order from './Pages/Order/Order';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/Order" component={Order} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
