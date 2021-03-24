import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProductNamelist from './Pages/Productlist/ProductNamelist';
import Productlist from './Pages/Productlist/Productlist';
import ProductCategory from './Pages/Productlist/ProductCategory';
import Productslider from './Pages/Productlist/Productslider';
import Main from './Pages/Main/Main';
import Nav from './Components/Nav/Nav';
import Login from './Pages/Login/Login';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          {/* <Route exact path="/" component={Main} /> */}
          {/* <Route exact path="/" component={ProductNamelist} /> */}
          {/* <Route exact path="/" component={Productlist} /> */}
          {/* <Route exact path="/" component={ProductCategory} /> */}
          {/* <Route exact path="/" component={Productslider} /> */}
          <Route exact path="/" component={Main} />
          {/* <Route exact path="/nav" component={Nav} /> */}
          {/* <Route exact path="/Login" component={Login} /> */}
        </Switch>
      </Router>
    );
  }
}

export default Routes;
