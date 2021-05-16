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
      <div className="sliders">
        <Slider {...settings}>
          <div>
            <img src="https://images.unsplash.com/photo-1506459225024-1428097a7e18?ixid=MnwxMjA3fDB8MXxzZWFyY2h8NDd8fGZvb2R8ZW58MHx8fHwxNjIxMDgyMjM3&ixlib=rb-1.2.1&dpr=1&auto=format&fit=crop&w=480&h=80&q=60" />
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1620744729284-585642a156d3?ixlib=rb-1.2.1&dpr=1&auto=format&fit=crop&w=480&h=80&q=60 " />
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1599785209707-a456fc1337bb?ixlib=rb-1.2.1&dpr=1&auto=format&fit=crop&w=480&h=80&q=60" />
          </div>
        </Slider>
      </div>
    );
  }
}
