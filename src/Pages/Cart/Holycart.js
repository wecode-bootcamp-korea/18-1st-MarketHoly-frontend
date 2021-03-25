import React, { Component } from 'react';
import Cart from './Cart';
import Nav from '../../Components/Nav/Nav';
import Footer from '../../Components/Footer/Footer';
import Aside from '../aside/aside';

export class Holycart extends Component {
  render() {
    return (
      <div>
        <Aside />
        <Nav />
        <Cart />
        <Footer />
      </div>
    );
  }
}

export default Holycart;
