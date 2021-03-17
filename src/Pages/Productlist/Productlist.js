import React, { Component, useState } from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import './Productlist.scss';
import Productbasket from './Productbasket';

export class Productlist extends Component {
  constructor() {
    super();
    this.state = {
      count: 1,
      product: [],
      productbasket: false,
      basketItem: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/products.json')
      .then(res => res.json())
      .then(res => {
        this.setState({
          product: res,
        });
      });
  }

  addcomma = num => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  handleModalrevoe = e => {
    this.setState({
      productbasket: !this.state.productbasket,
      count: 1,
    });
  };

  handleBasketModal = e => {
    this.setState({
      basketItem: e,
      productbasket: !this.state.productbasket,
    });
  };

  resetCount = () => {
    this.setState({
      count: 0,
    });
  };

  handleCnt = num => {
    const { count } = this.state;

    if (num === -1 && count === 1) return;
    this.setState({ count: count + num });
  };

  render() {
    return (
      <div className={this.state.productbasket ? 'scrollOff' : 'scrollOn'}>
        <div className="wide">
          <ul className="list">
            {this.state.product.map(item => {
              return (
                <li>
                  <div className="imgCouponBox">
                    <img src={item.img} alt={item.name} />
                    <span className={item.iscoupon ? 'itemcoupon' : 'off'}>
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
                    <p className="itemPrice">{this.addcomma(item.Price)}원</p>
                    <p className="itemInfo">{item.info}</p>
                  </div>
                </li>
              );
            })}
          </ul>
          <Productbasket
            productbasket={this.state.productbasket}
            name={this.state.basketItem.name}
            Price={this.state.basketItem.Price}
            addcomma={this.addcomma}
            handleModalrevoe={this.handleModalrevoe}
            count={this.state.count}
            resetCount={this.resetCount}
            handleCnt={this.handleCnt}
          />
        </div>
      </div>
    );
  }
}

export default Productlist;
