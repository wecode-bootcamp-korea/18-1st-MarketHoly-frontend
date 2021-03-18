import React, { Component } from 'react';
import Productlist from './Productlist';
import ProductNamelist from './ProductNamelist';

export class ProductCategory extends Component {
  render() {
    return (
      <div>
        <ProductNamelist />
        <Productlist />
      </div>
    );
  }
}

export default ProductCategory;
