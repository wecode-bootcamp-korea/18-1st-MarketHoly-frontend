import React, { Component } from 'react';
import './Goods.scss';
import '../../styles/common.scss';

class Goods extends Component {
  render() {
    const { id, img, name, price, salePer, originalPrice } = this.props;
    return (
      <div className="Goods" key={id}>
        <img src={img} alt="goods" />
        <div className="name">{name}</div>
        <div className="salePer">{salePer}%</div>
        <div className="price">{price}원</div>
        <div className="originalPrice">{originalPrice}원</div>
      </div>
    );
  }
}

export default Goods;
