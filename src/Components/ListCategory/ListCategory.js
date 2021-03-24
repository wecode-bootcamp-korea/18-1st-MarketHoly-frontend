import React, { Component } from 'react';
import './ListCategory.scss';

class ListCategory extends Component {
  render() {
    return (
      <div className="listCategory">
        <span className="category" data-idx="1" onClick={this.props.handleCategory}>
          채소
        </span>
        <span className="category" data-idx="2" onClick={this.props.handleCategory}>
          과일·견과·쌀
        </span>
        <span className="category" data-idx="3" onClick={this.props.handleCategory}>
          수산·해산·건어물
        </span>
        <span className="category" data-idx="4" onClick={this.props.handleCategory}>
          정육·계란
        </span>
        <span className="category" data-idx="5" onClick={this.props.handleCategory}>
          국·반찬·메인요리
        </span>
        <span className="category" data-idx="6" onClick={this.props.handleCategory}>
          샐러드·간편식
        </span>
        <span className="category" data-idx="7" onClick={this.props.handleCategory}>
          면·양념·오일
        </span>
        <span className="category" data-idx="8" onClick={this.props.handleCategory}>
          생수·음료·우유·커피
        </span>
        <span className="category" data-idx="9" onClick={this.props.handleCategory}>
          간식·과자·떡
        </span>
        <span className="category" data-idx="10" onClick={this.props.handleCategory}>
          베이커리·치즈·델리
        </span>
        <span className="category" data-idx="11" onClick={this.props.handleCategory}>
          건강식품
        </span>
        <span className="category" data-idx="12" onClick={this.props.handleCategory}>
          생활용품·리빙
        </span>
        <span className="category" data-idx="13" onClick={this.props.handleCategory}>
          뷰티·바디케어
        </span>
        <span className="category" data-idx="14" onClick={this.props.handleCategory}>
          주방용품
        </span>
        <span className="category" data-idx="15" onClick={this.props.handleCategory}>
          가전제품
        </span>
        <span className="category" data-idx="16" onClick={this.props.handleCategory}>
          베이비·키즈
        </span>
        <span className="category" data-idx="17" onClick={this.props.handleCategory}>
          반려동물
        </span>
      </div>
    );
  }
}

export default ListCategory;
