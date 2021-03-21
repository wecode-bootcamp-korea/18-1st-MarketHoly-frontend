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
            <img
              className="firstimg"
              src="https://images.unsplash.com/photo-1506617420156-8e4536971650?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2768&q=80"
              alt="banner"
            />
          </div>
          <div>
            <img
              className="secondimg"
              src="https://images.unsplash.com/photo-1556559214-9d7db920d2eb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2089&q=80"
              alt="banner"
            />
          </div>
          <div>
            <img
              className="thirdimg"
              src="https://images.unsplash.com/photo-1590755958171-90168ab6e01e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
              alt="banner"
            />
          </div>
          <div>
            <img
              className="fourthimg"
              src="https://images.unsplash.com/photo-1577595927087-dedbe84f0e4d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1952&q=80"
              alt="banner"
            />
          </div>
          <div>
            <img
              className="fifthimg"
              src="https://images.unsplash.com/photo-1558201202-e65298e2e869?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              alt="banner"
            />
          </div>
        </Slider>
      </div>
    );
  }
}
