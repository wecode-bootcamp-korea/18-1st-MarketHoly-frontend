import React from 'react';
import './ProductReviewList.scss';

class ProductReviewList extends React.Component {
  state = {
    isMainContent: false,
    isLogin: false,
  };

  handleShowMainContent = () => {
    this.setState({ isMainContent: !this.state.isMainContent });
  };

  sendHelpCount = () => {
    this.state.isLogin ? alert('구독과 좋아용!') : alert('회원전용 서비스입니다. 로그인/회원가입을 해주세요!');
  };

  handlePointerLeave = () => {
    this.setState({ isMainContent: false });
  };

  render() {
    const { review, index } = this.props;
    const { isMainContent } = this.state;
    return (
      <li className="reviewListContent" onMouseLeave={this.handlePointerLeave}>
        <div className="reviewTitleBox" onClick={this.handleShowMainContent}>
          <div className="numberBox">
            <span>{index}</span>
          </div>
          <div className="titleBox titleName">
            <span>{review.title}</span>
          </div>
          <div className="writerBox">
            <span>{review.user_id}</span>
          </div>
          <div className="dataCreatedBox">
            <span>{review.created_at}</span>
          </div>
          <div className="helpCountBox">
            <span>{review.help_count}</span>
          </div>
          <div className="lookupBox">
            <span>{review.lookup_count}</span>
          </div>
        </div>
        <div className={'reviewContentMainBox ' + (isMainContent && 'showReviewMainContent')}>
          <div className="reviewContentHeaderText">
            <h3>{review.product_id} product_id([고앵님] 미야오 로 구매했다</h3>
            <p>{review.content}</p>
          </div>
          <div className="reviewContentBtnBox">
            <button onClick={this.sendHelpCount}>도움이 돼요 {review.help_count}</button>
          </div>
        </div>
      </li>
    );
  }
}

export default ProductReviewList;
