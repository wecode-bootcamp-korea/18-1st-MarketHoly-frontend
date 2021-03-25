import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Main from './Pages/Main/Main';
import Cart from './Pages/Cart/Cart';
// import SearchAddress from './Components/SearchAddress';
import ProductCategory from './Pages/Productlist/ProductCategory';
import Main from './Pages/Main/Main';
import SignUp from './Pages/SignUp/SignUp';
import ProductDetail from './Components/ProductDetail/ProductDetail';
import Login from './Pages/Login/Login';
import Holycart from './Pages/Cart/Holycart';
import Nav from './Components/Nav/Nav';
import Footer from './Components/Footer/Footer';
import Aside from './Pages/aside/aside';

class Routes extends React.Component {
  state = {
    scrollY: 0,
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  handleScroll = () => {
    this.setState({
      scrollY: window.scrollY,
    });
  };

  render() {
    return (
      <Router onScroll={this.handleScroll}>
        <Nav />
        {this.state.scrollY > 250 && <Aside />}
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
        <Footer />
      </Router>
    );
  }
}

export default Routes;
