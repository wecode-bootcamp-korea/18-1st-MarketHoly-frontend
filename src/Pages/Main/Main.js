import React, { Component } from 'react';
import Banner from '../../Components/Banner/Banner';
import ListGoods from '../../Components/ListGoods/ListGoods';

import './Main.scss';
import '../../styles/common.scss';

class Main extends Component {
  state = {
    goods: [],
  };

  componentDidMount() {
    fetch('http://localhost:3000/data/Goods.json')
      .then(res => res.json())
      .then(res => {
        this.setState({
          goods: res,
        });
      });
  }

  render() {
    return (
      <div className="Main">
        <Banner />
        <div className="titRecommendGoods">이 상품 어때요?</div>
        <ListGoods goods={this.state.goods} />
      </div>
    );
  }
}

export default Main;
