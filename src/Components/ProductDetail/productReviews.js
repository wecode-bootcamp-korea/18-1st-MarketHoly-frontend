import React from 'react';

class ProductReviews extends React.Component {
  state = {
    reviews: [],
  };
  render() {
    return (
      <>
        <div className="goodsViewInfomationContent">
          <div className="inreview"></div>
        </div>
      </>
    );
  }
}

export default ProductReviews;
