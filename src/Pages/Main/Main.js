import React, { Component } from 'react';
import Banner from '../../Components/Banner/Banner';
import ListGoods from '../../Components/ListGoods/ListGoods';
import DailySpecial from '../../Components/DailySpecial/DailySpecial';

import './Main.scss';
import '../../styles/common.scss';

class Main extends Component {
  state = {
    listgoods: [],
    dailyspecial: [],
  };

  componentDidMount() {
    fetch('/data/ListGoods.json')
      .then(res => res.json())
      .then(res => {
        this.setState({
          listgoods: res,
        });
      });
    fetch('/data/DailySpecial.json')
      .then(res => res.json())
      .then(res => {
        this.setState({
          dailyspecial: res,
        });
      });
  }

  render() {
    return (
      <div className="Main">
        <Banner />
        <div className="titRecommendGoods">이 상품 어때요?</div>
        <ListGoods listgoods={this.state.listgoods} />
        <DailySpecial dailyspecial={this.state.dailyspecial} />
      </div>
    );
  }
}

export default Main;
