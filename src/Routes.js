import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Main from './Pages/Main/Main';
import aside from './Pages/aside/aside';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={aside} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
