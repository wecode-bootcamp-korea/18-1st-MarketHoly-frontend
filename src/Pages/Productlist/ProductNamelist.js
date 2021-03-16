import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './ProductNamelist.scss';

export class ProductNamelist extends Component {
  constructor() {
    super();
    this.state = {
      productList: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/items.json')
      .then(res => res.json())
      .then(res => {
        this.setState({
          productList: res,
        });
      });
  }

  render() {
    return (
      <ul className="productList">
        {this.state.productList.map(items => {
          return (
            <li>
              <a>{items.Contents}</a>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default withRouter(ProductNamelist);
