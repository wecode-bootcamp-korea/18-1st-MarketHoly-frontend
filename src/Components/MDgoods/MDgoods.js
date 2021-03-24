import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Goods.scss';

class MDGoods extends Component {
  render() {
    const { id, image_url, name, price, discount_rate } = this.props;

    return (
      <div className="mdgoods" key={id}>
        <div className="imagePart">
          <img className="sizesmall" src={image_url} alt="goods" onClick={() => this.props.history.push(`/product/detail/${this.props.product_id}`)} />
        </div>
        <div className="name">{name}</div>
        <div className="persmall">{discount_rate && discount_rate * 100 + '%'}</div>
        <div className="pricesmall">
          {discount_rate !== undefined && (discount_rate ? Math.floor(Number(price) * (1 - discount_rate)).toLocaleString() : Math.floor(Number(price)).toLocaleString()) + '원'}
        </div>
        {discount_rate && <div className="originalPrice">{discount_rate && Math.floor(price.toLocaleString(navigator.language))}원</div>}
      </div>
    );
  }
}

export default withRouter(MDGoods);
