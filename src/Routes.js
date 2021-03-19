import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Mypageorderlist from './Pages/Mypage/Mypageorderlist';
import Mypagearticle from './Pages/Mypage/Mypagearticle';
import Mypage from './Pages/Mypage/Mypage';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          {/* <Route exact path="/" component={Mypageorderlist} /> */}
          {/* <Route exact path="/" component={Mypagearticle} /> */}
          <Route exact path="/" component={Mypage} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
