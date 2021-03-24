import React from 'react';
import './ProductReviews.scss';
import ProductReviewList from './ProductReviewList';

class ProductReviews extends React.Component {
  state = {
    reviews: [],
  };

  componentDidMount() {
    fetch('/data/reviews.json', {})
      .then(res => res.json())
      .then(res => {
        this.setState({ reviews: res });
      });
  }

  render() {
    const { reviews } = this.state;
    return (
      <>
        <div className="goodsViewInfomationContent">
          <div className="reviewBox">
            <div className="reviewTitleMainNameBox">
              <span className="reviewTitle">PRODUCT REVIEW</span>
              <span className={'reviewText'}>· 상품에 대한 문의를 남기는 공간입니다. 해당 게시판의 성격과 다른 글을 사전동의 없이 담당 게시판으로 이동될 수 있습니다.</span>
              <span className={'reviewText'}>· 배송관련, 주문(취소/교환/환불) 관련 문의 및 요청사항은 마이컬리 내 1:1 문의에 남겨주세요.</span>
            </div>
            <div className="reviewContentBox">
              <div className="reviewContentTitleBox">
                <div className="numberBox">
                  <span>번호</span>
                </div>
                <div className="titleBox">
                  <span>제목</span>
                </div>
                <div className="writerBox">
                  <span>작성자</span>
                </div>
                <div className="dataCreatedBox">
                  <span>작성일</span>
                </div>
                <div className="helpCountBox">
                  <span>도움</span>
                </div>
                <div className="lookupBox">
                  <span>조회</span>
                </div>
              </div>
              <ul className="reviewListBox">
                {reviews.map((review, index) => (
                  <ProductReviewList review={review} index={index} key={index} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ProductReviews;
