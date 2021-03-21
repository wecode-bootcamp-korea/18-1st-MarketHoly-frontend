import React, { Component } from 'react';
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
    const { modifier, id, image, isSale, isCountdown, /*salestart,*/ name, price, discount_rate /*originalPrice*/ } = this.props;
    return (
      <div className="goods" key={id}>
        <div className="imagePart">
          <img className={modifier === 'dailyspecial' ? 'sizebig' : 'sizesmall'} src={image} alt="goods" />
          {isSale && <div className="saleMark">{discount_rate}% 일일특가</div>}
          {isCountdown && (
            <div className="countdownMark">
              <Countdown date={1616159618308 /*{ salestart }*/ + 86400000} renderer={renderer} /> 남음
            </div>
          )}
        </div>
        <div className="name">{name}</div>
        {discount_rate && <div className={modifier === 'dailyspecial' ? 'perbig' : 'persmall'}>{discount_rate && discount_rate * 100 + '%'}</div>}
        <div className={modifier === 'dailyspecial' ? 'pricebig' : 'pricesmall'}>
          {discount_rate ? Math.floor(price.toLocaleString(navigator.language) * (1 - discount_rate)) : Math.floor(price.toLocaleString(navigator.language))}원
        </div>
        {discount_rate && <div className="originalPrice">{discount_rate && Math.floor(price.toLocaleString(navigator.language))}원</div>}
      </div>
    );
  }
}

export default Goods;
