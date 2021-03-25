import React, { Component } from 'react';
import Slider from 'react-slick';
import Goods from '../Goods/Goods';
// import MDGoods from '../MDgoods/MDgoods';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './MDrecommend.scss';

export default class MDrecommend extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
    };

    return (
      <div className="mdrecommend">
        <Slider {...settings}>
          {this.props.product_list_by_category.map((good, index) => (
            <Goods key={index} product_id={good.product_id} image_url={good.image_url} name={good.name} price={good.price} discount_rate={good.discount_rate} />
          ))}
        </Slider>
      </div>
    );
  }
}
