import React from 'react';
import GoodsViewInfomationTabGroup from './goodsViewInfomationTabGroup';
import GoodsViewInfomationContent from './goodsViewInfomationContent';
import './GoodsViewInfomation.scss';

class GoodsViewInfomation extends React.Component {
  constructor(props) {
    super(props);
    this.oneGetY = React.createRef();
    this.twoGetY = React.createRef();
    this.threeGetY = React.createRef();
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScrollGet);
  }

  moveScrollY = idx => {
    idx === 1 && window.scrollTo(0, this.oneGetY.current.offsetTop);
    idx === 2 && window.scrollTo(0, this.twoGetY.current.offsetTop);
    idx === 3 && window.scrollTo(0, this.threeGetY.current.offsetTop);
  };

  onScrollGet = e => {
    const scrollTop = ('scroll', e.srcElement.scrollingElement.scrollTop);
    console.log(scrollTop);
  };

  render() {
    return (
      <div className="goodsViewInfomation" onScroll={this.onScrollGet}>
        <div ref={this.oneGetY}>
          <GoodsViewInfomationTabGroup idx={1} moveScrollY={this.moveScrollY} />
        </div>
        <GoodsViewInfomationContent />
        <div ref={this.twoGetY}>
          <GoodsViewInfomationTabGroup idx={2} moveScrollY={this.moveScrollY} />
        </div>
        <div ref={this.threeGetY}>
          <GoodsViewInfomationTabGroup idx={3} moveScrollY={this.moveScrollY} />
        </div>
      </div>
    );
  }
}

export default GoodsViewInfomation;
