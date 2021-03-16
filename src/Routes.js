import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Main from './Pages/Main/Main';
// import ProductNamelist from './Pages/Productlist/ProductNamelist';
import Productlist from './Pages/Productlist/Productlist';
import Productkategorie from './Pages/Productlist/Productkategorie';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          {/* <Route exact path="/" component={Main} /> */}
          {/* <Route exact path="/" component={ProductNamelist} /> */}
          <Route exact path="/" component={Productlist} />
          {/* <Route exact path="/" component={Productkategorie} /> */}
        </Switch>
      </Router>
    );
  }
}

export default Routes;
