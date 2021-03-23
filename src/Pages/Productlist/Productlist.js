import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Productbasket from './Productbasket';
import { FiShoppingCart } from 'react-icons/fi';
import './Productlist.scss';

export class Productlist extends Component {
  constructor() {
    super();
    this.state = {
      count: 1,
      product_list: [],
      productBasket: false,
      basketItem: [],
    };
  }

  // "proxy": "http://10.58.1.200:8000",
  componentDidMount() {
    const product = `product/categorylistdetail/1`;
    // fetch('/data/products.json')
    fetch(product)
      // fetch(product)
      .then(res => res.json())
      .then(res => {
        this.setState({
          product_list: res.product_list,
          // product_list: res,
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
  };

  handleCnt = num => {
    const { count } = this.state;

    if (num === -1 && count === 1) return;
    this.setState({ count: count + num });
  };

  handleMoveDetail = itemId => {
    console.log(itemId);
    console.log('안녕');
    this.props.history.push(`/detail/${itemId}`);
  };

  render() {
    return (
      <>
        <div className="listView">
          <div className="wide">
            <ul className="list">
              {this.state.product_list &&
                this.state.product_list.map(item => {
                  let rate = 1 - item.discount_rate;
                  return (
                    <li key={item.id}>
                      <div className="imgCouponBox">
                        <div className="imgHover">
                          <img src={item.image} alt={item.name} onClick={() => this.handleMoveDetail(item.id)} />
                        </div>
                        <span className={item.isCoupon ? 'itemCoupon' : 'off'}>20%농할쿠폰</span>
                        <button className="FiShoppingCart" onClick={() => this.handleBasketModal(item)} value={item}>
                          <FiShoppingCart size="22" color="white" />
                        </button>
                      </div>
                      <div className="totalInfo">
                        <p className="itemName">{item.name}</p>
                        {item.discount_rate ? (
                          <>
                            <div className="priceBox">
                              <p className="discount">{item.discount_rate * 100}%</p>
                              <p className="itemAfterPrice">{this.addComma(Math.floor(item.price * rate))}원</p>
                            </div>
                            <p className="itemPriceAfter">{this.addComma(Math.floor(item.price))}원</p>
                          </>
                        ) : (
                          <p className="itemPrice">{this.addComma(Math.floor(item.price))}원</p>
                        )}
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
              discount_rate={this.state.basketItem.discount_rate}
            />
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(Productlist);
