import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Countdown from 'react-countdown';
import './Goods.scss';

const renderer = ({ hours, minutes, seconds, completed }) => {
  return (
    <span>
      {hours}:{minutes}:{seconds < 10 ? `0${seconds}` : `${seconds}`}
    </span>
  );
};

class Goods extends Component {
  render() {
    const { modifier, product_id, image_url, name, price, discount_rate, daily_discount_rate, start_date } = this.props;
    return (
      <div className="goods" key={product_id}>
        <div className="imagePart">
          <img className={modifier === 'dailyspecial' ? 'sizebig' : 'sizesmall'} src={image_url} alt="goods" onClick={() => this.props.history.push(`/product/detail/${this.props.product_id}`)} />
          {daily_discount_rate !== undefined && <div className="saleMark">{daily_discount_rate * 100}% 일일특가</div>}
          {start_date && (
            <div className="countdownMark">
              <Countdown date={new Date(start_date).getTime() + 86400000} renderer={renderer} /> 남음
            </div>
          )}
        </div>
        <div className="name">{name}</div>
        {(discount_rate || daily_discount_rate) && (
          <div className={modifier === 'dailyspecial' ? 'perbig' : 'persmall'}>
            <>
              {discount_rate * 100 !== 0 && String(discount_rate * 100) !== 'NaN' && discount_rate * 100 + '%'}
              {daily_discount_rate !== undefined && daily_discount_rate * 100 + '%'}
            </>
          </div>
        )}
        <div className={modifier === 'dailyspecial' ? 'pricebig' : 'pricesmall'}>
          {discount_rate !== undefined && (discount_rate ? Math.floor(Number(price) * (1 - discount_rate)).toLocaleString() : Math.floor(Number(price)).toLocaleString()) + '원'}
          {daily_discount_rate !== undefined && Math.floor(price * (1 - daily_discount_rate)).toLocaleString() + '원'}
        </div>
        {discount_rate * 100 !== 0 && <div className="originalPrice">{discount_rate && Math.floor(price.toLocaleString(navigator.language)) + '원'}</div>}
      </div>
    );
  }
}

export default withRouter(Goods);
