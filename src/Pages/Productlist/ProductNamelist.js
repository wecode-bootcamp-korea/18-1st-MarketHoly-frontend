import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './ProductNamelist.scss';

export class ProductNamelist extends Component {
  constructor() {
    super();
    this.state = {
      productList: [],
      listArray: [true],
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

  handleList = e => {
    const arr = Array(7).fill(false);
    arr[e - 1] = true;
    this.setState({ listArray: arr });
  };

  render() {
    return (
      <>
        <div className="productHeaderName">채소</div>
        <div className="listCenter">
          <ul className="productList">
            {this.state.productList.map(items => {
              return (
                <li key={items.id} onClick={() => this.handleList(items.id)} className={this.state.listArray[items.id - 1] && 'tap'}>
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
