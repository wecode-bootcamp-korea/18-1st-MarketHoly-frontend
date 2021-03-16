import React, { Component } from 'react';
import './productbasket.scss';

export class Productbasket extends Component {
  render() {
    // console.log(this.props.name);
    return (
      <>
        {this.props.productbasket ? (
          <div className="cart">
            <div className="cartList">
              <div className="namePrice">
                <div className="listName">{this.props.name}</div>
                <div className="listPrice">{this.props.Price}</div>
              </div>
            </div>
          </div>
        ) : null}
      </>
    );
  }
}

export default Productbasket;
