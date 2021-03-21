import React, { Component } from 'react';
// import { StickyContainer, Sticky } from 'react-sticky';
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
            <div className="recentItem">최근 본 상품</div>
          </div>
        </div>
      </>
    );
  }
}

export default aside;
