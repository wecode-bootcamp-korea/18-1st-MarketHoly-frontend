import React, { Component } from 'react';
import Productlist from './Productlist';
import ProductNamelist from './ProductNamelist';

export class Productkategorie extends Component {
  render() {
    return (
      <div>
        <Productlist />
        <ProductNamelist />
      </div>
    );
  }
}

export default Productkategorie;
