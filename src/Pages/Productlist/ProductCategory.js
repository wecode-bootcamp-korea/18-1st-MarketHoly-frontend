import React, { Component } from 'react';
import Productlist from './Productlist';
import ProductNamelist from './ProductNamelist';
import Productslider from './Productslider';

export class ProductCategory extends Component {
  render() {
    return (
      <div>
        <Productslider />
        <ProductNamelist />
        <Productlist />
      </div>
    );
  }
}

export default ProductCategory;
