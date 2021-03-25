import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Main from './Pages/Main/Main';
// import Cart from './Pages/Cart/Cart';
// import SearchAddress from './Components/SearchAddress';
import ProductCategory from './Pages/Productlist/ProductCategory';
import Main from './Pages/Main/Main';
import SignUp from './Pages/SignUp/SignUp';
import ProductDetail from './Components/ProductDetail/ProductDetail';
import Login from './Pages/Login/Login';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/detail" component={ProductDetail} />
          <Route exact path="/product/detail/:id" component={ProductDetail} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/product/category" component={ProductCategory} />
          <Route exact path="/product/category/:id" component={ProductCategory} />
          <Route exact path="/product/:id" component={ProductCategory} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
