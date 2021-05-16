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

  componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) this.fetchList();
    if (this.props.location.state.checkMenu !== prevProps.location.state.checkMenu) this.fetchList();
  }

  componentDidMount() {
    this.fetchList();
  }

  fetchList = () => {
    const subCategoryId = this.props.match.params.id;
    if (this.props.location.state.checkCategory === 'main') {
      fetch(`/product?category=${subCategoryId}`)
        .then(res => res.json())
        .then(res => {
          this.setState({
            product_list: res.product_list,
          });
        });
    }
    if (this.props.location.state.checkCategory === 'sub') {
      fetch(`/product?sub-category=${subCategoryId}`)
        .then(res => res.json())
        .then(res => {
          this.setState({
            product_list: res.product_list,
          });
        });
    }
    if (this.props.location.state.checkMenu === 'new') {
      fetch(`/product?sort=new`)
        .then(res => res.json())
        .then(res => {
          this.setState({
            product_list: res.product_list,
          });
        });
    }
    if (this.props.location.state.checkMenu === 'best') {
      fetch(`/product?sort=best`)
        .then(res => res.json())
        .then(res => {
          this.setState({
            product_list: res.product_list,
          });
        });
    }
  };

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
    this.props.history.push(`/product/detail/${itemId}`);
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
                    <li key={item.product_id}>
                      <div className="imgCouponBox">
                        <div className="imgHover">
                          <img src={item.image_url} alt={item.name} onClick={() => this.handleMoveDetail(item.product_id)} />
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
                              {item.discount_rate * 100 !== 0 && <p className="discount">{item.discount_rate * 100}%</p>}
                              <p className="itemAfterPrice">{this.addComma(Math.floor(item.price * rate))}원</p>
                            </div>
                            {item.discount_rate * 100 !== 0 && <p className="itemPriceAfter">{this.addComma(Math.floor(item.price))}원</p>}
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
