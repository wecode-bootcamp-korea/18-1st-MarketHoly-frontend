import React, { Component } from 'react';
import Banner from '../../Components/Banner/Banner';
import ListGoods from '../../Components/ListGoods/ListGoods';
import DailySpecial from '../../Components/DailySpecial/DailySpecial';
import ListCategory from '../../Components/ListCategory/ListCategory';
import { IoChevronForward } from 'react-icons/io5';
import '../../styles/common.scss';
import './Main.scss';

class Main extends Component {
  state = {
    listgoods: [],
    dailyspecial: [],
    listcategory: [],
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
    fetch('/data/ListCategory.json')
      .then(res => res.json())
      .then(res => {
        this.setState({ listcategory: res });
      });
  }

  render() {
    return (
      <div className="main">
        <Banner />
        <div className="titRecommendGoods">이 상품 어때요?</div>
        <ListGoods listgoods={this.state.listgoods} />
        <DailySpecial dailyspecial={this.state.dailyspecial} />
        <div className="titRecommendGoods">MD의 추천</div>
        <ListCategory listcategory={this.state.listcategory} />
        <ListGoods listgoods={this.state.listgoods} />
        <span className="viewAll">
          전체보기
          <IoChevronForward className="arrow" />
        </span>
      </div>
    );
  }
}

export default Main;
