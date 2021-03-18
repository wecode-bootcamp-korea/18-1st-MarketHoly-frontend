import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './Pages/Main/Main';
import SignUp from './Pages/SignUp/SignUp';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/signup" component={SignUp} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
