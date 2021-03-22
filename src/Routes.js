import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './Pages/Main/Main';
import ProductDetail from './Components/ProductDetail/ProductDetail';
import Nav from './Components/Nav/Nav';
import Login from './Pages/Login/Login';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/nav" component={Nav} />
          <Route exact path="/detail" component={ProductDetail} />
          <Route exact path="/Login" component={Login} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
