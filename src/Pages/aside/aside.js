import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './aside.scss';

export class aside extends Component {
  constructor() {
    super();
    this.state = {
      scrollTop: 0,
    };
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll);
  };

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll);
  };

  handleScroll = e => {
    console.log(this.state.scrollTop);
    const scrollTop = ('scroll', e.srcElement.scrollingElement.scrollTop);
    this.setState({
      scrollTop,
    });
  };

  render() {
    let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    return (
      <>
        <div className="test1">test</div>
        <div
          className="scroll"
          style={{ top: this.state.scrollTop + 300 }}
          onScroll={this.handleScroll}
        >
          <div className="sectionOne">
            <div className="list">등급별 혜택</div>
            <div className="list">레시피</div>
            <div className="list">베스트 후기</div>
          </div>
          <div className="sectionTwo">
            <div>
              <button>ᨈ</button>
              <div className="recentItem">최근 본 상품</div>
              <div className="imgList">
                <div>
                  <img src="https://img-cf.kurly.com/shop/data/goods/1615540419847l0.jpg" />
                </div>
              </div>
            </div>
            <button className="underButton">ᨆ</button>
          </div>
        </div>
      </>
    );
  }
}

export default aside;
