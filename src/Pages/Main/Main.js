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
    scrollY: 0,
  };

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    // 1) 이 상품 어때요?
    fetch('/product/recommendation')
      // Mock Data fetch('/data/ListGoods.json')
      .then(res => res.json())
      .then(res => {
        this.setState({
          listgoods: res.listgoods,
          // listgoods: res,
        });
      });
    // 2) 일일 특가
    // 서버 연결 fetch('/product/dailyspecial')
    fetch('/data/DailySpecial.json')
      .then(res => res.json())
      .then(res => {
        this.setState({
          // 서버 연결 dailyspecial: res.dailyspecial,
          dailyspecial: res,
        });
      })
      .then(res => {
        this.handleCategory(1);
      });
  }

  handleScroll = () => {
    this.setState({
      scrollY: window.scrollY,
    });
  };

  // 3) MD 추천
  handleCategory = id => {
    const offset = id * LIMIT;
    const query = `?limit=${LIMIT}&offset=${offset}`;
    // console.log('확인 중', query);
    fetch(`/product/mdrecommendation${query}`)
      .then(res => res.json())
      .then(res => this.setState({ product_list_by_category: res.product_list_by_category }));
  };

  render() {
    const { listgoods, dailyspecial, product_list_by_category, scrollY } = this.state;
    return (
      <div className="main" onScroll={this.handleScroll}>
        <Nav />
        <Banner />
        {scrollY > 250 && <Aside />}
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
