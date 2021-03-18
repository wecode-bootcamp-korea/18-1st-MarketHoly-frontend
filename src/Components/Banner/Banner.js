import React, { Component } from 'react';
import Slider from 'react-slick';
import { IoIosArrowDropleft } from 'react-icons/io';
import { IoIosArrowDropright } from 'react-icons/io';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Banner.scss';

export default class Banner extends Component {
  render() {
    const arrowStyle = { position: 'absolute', top: '160px', zIndex: '15', fontSize: '40px', color: 'White', opacity: '0.5', background: 'transparent', border: 'none' };

    const ArrowLeft = props => (
      <button
        {...props}
        className={settings.prev}
        style={{
          ...arrowStyle,
          left: '20px',
        }}
      >
        <IoIosArrowDropleft />
      </button>
    );

    const ArrowRight = props => (
      <button
        {...props}
        className={settings.prev}
        style={{
          ...arrowStyle,
          right: '20px',
        }}
      >
        <IoIosArrowDropright />
      </button>
    );

    const settings = {
      dots: false,
      arrows: true,
      prevArrow: <ArrowLeft />,
      nextArrow: <ArrowRight />,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 900,
      autoplaySpeed: 5000,
      pauseOnHover: true,
      cssEase: 'linear',
    };
    return (
      <div className="banner">
        <Slider {...settings}>
          <div>
            <div className="firstimg" />
          </div>
          <div>
            <div className="secondimg" />
          </div>
          <div>
            <div className="thirdimg" />
          </div>
          <div>
            <div className="fourthimg" />
          </div>
          <div>
            <div className="fifthimg" />
          </div>
        </Slider>
      </div>
    );
  }
}
