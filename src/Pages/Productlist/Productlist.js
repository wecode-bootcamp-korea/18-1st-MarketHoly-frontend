import React, { Component } from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import './Productlist.scss';
import Productbasket from './Productbasket';

export class Productlist extends Component {
  constructor() {
    super();
    this.state = {
      productList: [],
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

  handleBasketModal = e => {
    // console.log(e);
    this.setState({
      basketItem: e,
      productbasket: !this.state.productbasket,
    });
    // console.log(this.state.basketItem);
  };

  render() {
    return (
      <div className="screen">
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
                    <p className="itemPrice">{item.Price}</p>
                    <p className="itemInfo">{item.info}</p>
                  </div>
                </li>
              );
            })}
            <Productbasket
              productbasket={this.state.productbasket}
              name={this.state.basketItem.name}
              Price={this.state.basketItem.Price}
            />
          </ul>
        </div>
      </div>
    );
  }
}

export default Productlist;
