import React, { Component } from 'react';
import Goods from '../../Components/Goods/Goods';
import { BsClock } from 'react-icons/bs';
import { IoRemoveOutline } from 'react-icons/io5';
import './DailySpecial.scss';

class DailySpecial extends Component {
  render() {
    return (
      <div className="dailySpecial">
        <div className="title">
          <span className="main">일일특가</span>
          <IoRemoveOutline size="20" color="#999" />
          <span className="sub">3월, 한 달간 진행되는 24시간 한정 특가</span>
          <span className="alert">
            <BsClock className="clock" size="15" color="#ccc" />
            망설이면 늦어요!
          </span>
        </div>
        <div className="twoGoods">
          {this.props.dailyspecial.map((good, index) => (
            <Goods
              modifier="dailyspecial"
              key={index}
              product_id={good.product_id}
              image_url={good.image_url}
              name={good.name}
              price={good.price}
              daily_discount_rate={good.daily_discount_rate}
              start_date={good.start_date}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default DailySpecial;
