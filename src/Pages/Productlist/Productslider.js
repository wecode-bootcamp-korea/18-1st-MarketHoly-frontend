import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.scss';
import 'slick-carousel/slick/slick-theme.scss';
import './Productslider.scss';

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1750,
    };
    return (
      <div className="slider">
        <Slider {...settings}>
          <div>
            <img src="https://img-cf.kurly.com/shop/data/category/pc_category_EDLP_210205.1612768855.jpg" />
          </div>
          <div>
            <img src="https://img-cf.kurly.com/shop/data/main/1/pc_img_1616135472.jpg" />
          </div>
          <div>
            <img src="https://img-cf.kurly.com/shop/data/main/1/pc_img_1615973847.jpg" />
          </div>
        </Slider>
      </div>
    );
  }
}
