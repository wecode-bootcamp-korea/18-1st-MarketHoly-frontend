import React, { Component } from 'react';
import Productlist from './Productlist';
import ProductNamelist from './ProductNamelist';
import Productslider from './Productslider';
import Nav from '../../Components/Nav/Nav';
import Footer from '../../Components/Footer/Footer';
import Aside from '../aside/aside';

export class ProductCategory extends Component {
  render() {
    return (
      <div>
        <Aside />
        <Nav />
        <Productslider />
        <ProductNamelist />
        <Productlist />
        <Footer />
      </div>
    );
  }
}

export default ProductCategory;
