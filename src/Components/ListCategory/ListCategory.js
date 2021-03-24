import React, { Component } from 'react';
import './ListCategory.scss';

class ListCategory extends Component {
  state = {
    clickIndex: '1',
  };

  handleCategory = e => {
    this.setState({ clickIndex: e.target.dataset.idx });
  };

  render() {
    const { clickIndex } = this.state;
    return (
      <div className="listCategory">
        <span className={clickIndex === '1' ? 'clicked' : 'category'} data-idx="1" onClick={this.handleCategory}>
          채소
        </span>
        <span className={clickIndex === '2' ? 'clicked' : 'category'} data-idx="2" onClick={this.handleCategory}>
          과일·견과·쌀
        </span>
        <span className={clickIndex === '3' ? 'clicked' : 'category'} data-idx="3" onClick={this.handleCategory}>
          수산·해산·건어물
        </span>
        <span className={clickIndex === '4' ? 'clicked' : 'category'} data-idx="4" onClick={this.handleCategory}>
          정육·계란
        </span>
        <span className={clickIndex === '5' ? 'clicked' : 'category'} data-idx="5" onClick={this.handleCategory}>
          국·반찬·메인요리
        </span>
        <span className={clickIndex === '6' ? 'clicked' : 'category'} data-idx="6" onClick={this.handleCategory}>
          샐러드·간편식
        </span>
        <span className={clickIndex === '7' ? 'clicked' : 'category'} data-idx="7" onClick={this.handleCategory}>
          면·양념·오일
        </span>
        <span className={clickIndex === '8' ? 'clicked' : 'category'} data-idx="8" onClick={this.handleCategory}>
          생수·음료·우유·커피
        </span>
        <span className={clickIndex === '9' ? 'clicked' : 'category'} data-idx="9" onClick={this.handleCategory}>
          간식·과자·떡
        </span>
        <span className={clickIndex === '10' ? 'clicked' : 'category'} data-idx="10" onClick={this.handleCategory}>
          베이커리·치즈·델리
        </span>
        <span className={clickIndex === '11' ? 'clicked' : 'category'} data-idx="11" onClick={this.handleCategory}>
          건강식품
        </span>
        <span className={clickIndex === '12' ? 'clicked' : 'category'} data-idx="12" onClick={this.handleCategory}>
          생활용품·리빙
        </span>
        <span className={clickIndex === '13' ? 'clicked' : 'category'} data-idx="13" onClick={this.handleCategory}>
          뷰티·바디케어
        </span>
        <span className={clickIndex === '14' ? 'clicked' : 'category'} data-idx="14" onClick={this.handleCategory}>
          주방용품
        </span>
        <span className={clickIndex === '15' ? 'clicked' : 'category'} data-idx="15" onClick={this.handleCategory}>
          가전제품
        </span>
        <span className={clickIndex === '16' ? 'clicked' : 'category'} data-idx="16" onClick={this.handleCategory}>
          베이비·키즈
        </span>
        <span className={clickIndex === '17' ? 'clicked' : 'category'} data-idx="17" onClick={this.handleCategory}>
          반려동물
        </span>
      </div>
    );
  }
}

export default ListCategory;
