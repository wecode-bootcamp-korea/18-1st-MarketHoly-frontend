import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { FaAppleAlt } from 'react-icons/fa';
import './ProductNamelist.scss';

export class ProductNamelist extends Component {
  constructor() {
    super();
    this.state = {
      productList: [],
    };
  }

  componentDidMount() {
    fetch('/data/items.json')
      .then(res => res.json())
      .then(res => {
        this.setState({
          productList: res,
        });
      });
  }

  render() {
    return (
      <>
        <div className="productHeaderName">채소</div>
        <div className="listCenter">
          <ul className="productList">
            {this.state.productList.map(items => {
              return (
                <li key={items.id}>
                  <a>{items.contents}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </>
    );
  }
}

export default withRouter(ProductNamelist);
