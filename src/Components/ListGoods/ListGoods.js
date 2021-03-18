import React, { Component } from 'react';
import Slider from 'react-slick';
import Goods from '../Goods/Goods';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ListGoods.scss';

export default class ListGoods extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
    };
    return (
      <div className="listGoods">
        <Slider {...settings}>
          {this.props.listgoods.map(good => (
            <Goods modifier="listcategory" id={good.id} img={good.img} name={good.name} price={good.price} salePer={good.salePer} originalPrice={good.originalPrice} />
          ))}
        </Slider>
      </div>
    );
  }
}
