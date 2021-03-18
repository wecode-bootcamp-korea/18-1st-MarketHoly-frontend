import React, { Component } from 'react';
import '../Category/Category.scss';

class Category extends Component {
  render() {
    const { name } = this.props;
    return <span className="category">{name}</span>;
  }
}

export default Category;
