import React, { Component } from 'react';
import Countdown from 'react-countdown';

import './Goods.scss';
import '../../styles/common.scss';

const renderer = ({ hours, minutes, seconds, completed }) => {
  return (
    <span>
      {hours}:{minutes}:{seconds < 10 ? `0${seconds}` : `${seconds}`}
    </span>
  );
};

class Goods extends Component {
  render() {
    const { modifier, id, img, isSale, isCountdown, name, price, salePer, originalPrice } = this.props;
    return (
      <div className="Goods" key={id}>
        <div className="imagePart">
          <img className={modifier === 'dailyspecial' ? 'sizebig' : 'sizesmall'} src={img} alt="goods" />
          {isSale && <div className="saleMark">{salePer}% 일일특가</div>}
          {isCountdown && (
            <div className="countdownMark">
              <Countdown date={Date.now() + 86400000} renderer={renderer} /> 남음
            </div>
          )}
        </div>
        <div className="name">{name}</div>
        <div className={modifier === 'dailyspecial' ? 'perbig' : 'persmall'}>{salePer}%</div>
        <div className={modifier === 'dailyspecial' ? 'pricebig' : 'pricesmall'}>{price}원</div>
        <div className="originalPrice">{originalPrice}원</div>
      </div>
    );
  }
}

export default Goods;
