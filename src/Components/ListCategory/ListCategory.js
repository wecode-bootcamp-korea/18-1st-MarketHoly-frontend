import React, { Component } from 'react';
import Category from '../../Components/Category/Category';
import './ListCategory.scss';

class ListCategory extends Component {
  render() {
    return (
      <div className="listCategory">
        {this.props.listcategory.map(category => {
          return <Category id={category.id} name={category.name} />;
        })}
      </div>
    );
  }
}

export default ListCategory;
