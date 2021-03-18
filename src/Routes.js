import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Main from './Pages/Main/Main';
import Mypageorderlist from './Pages/Mypage/Mypageorderlist';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Mypageorderlist} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
