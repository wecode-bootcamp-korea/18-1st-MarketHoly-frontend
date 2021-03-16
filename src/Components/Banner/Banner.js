import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Banner.scss';
import '../../styles/reset.scss';
import '../../styles/common.scss';

import { IoIosArrowDropleft } from 'react-icons/io';
import { IoIosArrowDropright } from 'react-icons/io';

export default class Banner extends Component {
  render() {
    const ArrowLeft = props => (
      <button
        {...props}
        className={settings.prev}
        style={{
          position: 'absolute',
          top: '160px',
          left: '20px',
          zIndex: '15',
          fontSize: '40px',
          color: 'White',
          opacity: '0.5',
          background: 'transparent',
          border: 'none',
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
          position: 'absolute',
          top: '160px',
          left: '1350px',
          zIndex: '15',
          fontSize: '40px',
          color: 'White',
          opacity: '0.5',
          background: 'transparent',
          border: 'none',
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
      <div className="Banner">
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
