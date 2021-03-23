import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Main from './Pages/Main/Main';
import Cart from './Pages/Cart/Cart';
// import SearchAddress from './Components/SearchAddress';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          {/* <Route exact path="/" component={Main} /> */}
          <Route exact path="/cart" component={Cart} />
          {/* <Route exact path="/searchAddress" component={SearchAddress} /> */}
        </Switch>
      </Router>
    );
  }
}

export default Routes;
