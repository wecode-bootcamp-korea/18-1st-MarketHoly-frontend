import React, { Component, useState } from 'react';
import Productbasket from './Productbasket';
import { FiShoppingCart } from 'react-icons/fi';
import './Productlist.scss';

export class Productlist extends Component {
  constructor() {
    super();
    this.state = {
      count: 1,
      product: [],
      productBasket: false,
      basketItem: [],
    };
  }

  componentDidMount() {
    fetch('/data/products.json')
      .then(res => res.json())
      .then(res => {
        this.setState({
          product: res,
        });
      });
  }

  addComma = num => {
    return num.toLocaleString('en');
  };

  handleModalremove = e => {
    this.setState({
      productBasket: !this.state.productBasket,
      count: 1,
    });
  };

  handleBasketModal = e => {
    this.setState({
      basketItem: e,
      productBasket: !this.state.productBasket,
    });
    console.log(e);
  };

  handleCnt = num => {
    const { count } = this.state;

    if (num === -1 && count === 1) return;
    this.setState({ count: count + num });
  };

  render() {
    return (
      <div className="listView">
        <div className="wide">
          <ul className="list">
            {this.state.product.map(item => {
              return (
                <li key={item.id}>
                  <div className="imgCouponBox">
                    <img src={item.img} alt={item.name} />
                    <span className={item.isCoupon ? 'itemCoupon' : 'off'}>
                      20%농할쿠폰
                    </span>
                    <button
                      className="FiShoppingCart"
                      onClick={() => this.handleBasketModal(item)}
                      value={item.name}
                    >
                      <FiShoppingCart size="22" color="white" />
                    </button>
                  </div>
                  <div className="totalInfo">
                    <p className="itemName">{item.name}</p>
                    <p className="itemPrice">{this.addComma(item.price)}원</p>
                    <p className="itemInfo">{item.info}</p>
                  </div>
                </li>
              );
            })}
          </ul>
          <Productbasket
            productBasket={this.state.productBasket}
            name={this.state.basketItem.name}
            price={this.state.basketItem.price}
            addComma={this.addComma}
            handleModalremove={this.handleModalremove}
            count={this.state.count}
            handleCnt={this.handleCnt}
          />
        </div>
      </div>
    );
  }
}

export default Productlist;
