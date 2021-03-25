import React, { Component } from 'react';
import './ListCategory.scss';

class ListCategory extends Component {
  state = {
    clickIndex: '1',
  };

  handleColor = e => {
    // console.log('확인확인확인', e.target.dataset.idx);
    this.props.handleCategory(e.target.dataset.idx);
    this.setState({ clickIndex: e.target.dataset.idx });
  };

  render() {
    const { clickIndex } = this.state;
    const categories = [
      '채소',
      '과일·견과·쌀',
      '수산·해산·건어물',
      '정육·계란',
      '국·반찬·메인요리',
      '샐러드·간편식',
      '면·양념·오일',
      '생수·음료·우유·커피',
      '간식·과자·떡',
      '베이커리·치즈·델리',
      '건강식품',
      '생활용품·리빙',
      '뷰티·바디케어',
      '주방용품',
      '가전제품',
      '베이비·키즈',
      '반려동물',
    ];

    return (
      <div className="listCategory">
        {categories.map((category, index) => {
          return (
            <span key={index} className={clickIndex == index + 1 ? 'clicked' : 'category'} data-idx={index + 1} onClick={this.handleColor}>
              {category}
            </span>
          );
        })}
      </div>
    );
  }
}

export default ListCategory;
