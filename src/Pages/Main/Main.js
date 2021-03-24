import React, { Component } from 'react';
import Banner from '../../Components/Banner/Banner';
import ListGoods from '../../Components/ListGoods/ListGoods';
import DailySpecial from '../../Components/DailySpecial/DailySpecial';
import ListCategory from '../../Components/ListCategory/ListCategory';
import MDrecommend from '../../Components/MDrecommend/MDrecommend';
import Nav from '../../Components/Nav/Nav';
import Footer from '../../Components/Footer/Footer';
import Aside from '../../Pages/aside/aside';
import { IoChevronForward } from 'react-icons/io5';
import '../../styles/common.scss';
import './Main.scss';

const LIMIT = 6;

class Main extends Component {
  state = {
    listgoods: [],
    dailyspecial: [],
    product_list_by_category: [],
  };

  componentDidMount() {
    // 이 상품 어때요?
    fetch('/data/ListGoods.json')
      .then(res => res.json())
      .then(res => {
        this.setState({
          listgoods: res,
        });
      });
    // 일일 특가
    fetch('/data/DailySpecial.json')
      .then(res => res.json())
      .then(res => {
        this.setState({
          dailyspecial: res,
        });
      });
  }
  // MD 추천
  handleCategory = e => {
    const offset = e.target.dataset.idx * LIMIT;
    const query = `?limit=${LIMIT}&offset=${offset}`;
    console.log('확인 중', query);
    fetch(`/product/mdrecommendation${query}`)
      .then(res => res.json())
      .then(res => this.setState({ product_list_by_category: res.product_list_by_category }));
  };

  render() {
    const { listgoods, dailyspecial, product_list_by_category } = this.state;
    return (
      <div className="main">
        <Nav />
        <Banner />
        <Aside />
        <div className="titRecommendGoods">이 상품 어때요?</div>
        <ListGoods listgoods={listgoods} />
        <DailySpecial dailyspecial={dailyspecial} />
        <div className="titRecommendGoods">MD의 추천</div>
        <ListCategory handleCategory={this.handleCategory} />
        <MDrecommend product_list_by_category={product_list_by_category} />
        <span className="viewAll">
          전체보기
          <IoChevronForward className="arrow" />
        </span>
        <Footer />
      </div>
    );
  }
}
export default Main;
