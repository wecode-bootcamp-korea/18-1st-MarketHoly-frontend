import React from 'react';
import { withRouter } from 'react-router-dom';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import './ProductGoodsAdd.scss';

const CAROUSEL_X = 940;

class ProductGoodsAdd extends React.Component {
  state = {
    imgUlWidth: null,
    carouselX: 0,
    isLeftArrow: false,
    isRightArrow: true,
    goodsProductArr: [],
  };

  handleArrowMove = e => {
    if (e.target.className.includes('arrowLeftBox')) {
      this.setState({ carouselX: this.state.carouselX + CAROUSEL_X }, () => {
        if (this.state.carouselX < 0) {
          this.setState({ isRightArrow: true });
        } else {
          this.setState({ isLeftArrow: false, isRightArrow: true });
        }
      });
    }
    if (e.target.className.includes('arrowRightBox')) {
      this.setState({ carouselX: this.state.carouselX - CAROUSEL_X }, () => {
        if (Math.abs(this.state.carouselX) >= this.state.imgUlWidth - CAROUSEL_X) {
          this.setState({ isRightArrow: false, isLeftArrow: true });
        } else {
          this.setState({ isLeftArrow: true });
        }
      });
    }
  };

  handleMoveDetail = itemId => {
    this.props.history.push(`/product/detail/${itemId}`);
  };

  render() {
    const { carouselX, isLeftArrow, isRightArrow } = this.state;
    const { productInfo } = this.props;
    return (
      <div className="goodsAddProduct">
        <h3 className="goodsAddTitle">RELATED PRODUCT</h3>
        <div className="goodsAddProductWrapper">
          {isLeftArrow && (
            <div className="arrowLeftBox arrowCommonBox" name="left" onClick={this.handleArrowMove}>
              <AiOutlineArrowLeft className="arrowIcon leftArrow" />
            </div>
          )}
          {isRightArrow && productInfo.length > 5 && (
            <div className="arrowRightBox arrowCommonBox" name="right" onClick={this.handleArrowMove}>
              <AiOutlineArrowRight className="arrowIcon rightArrow" />
            </div>
          )}
          <div className="goodsAddProductListWrapper">
            <ul className="goodsAddProductList" ref={e => (this.getWidth = e)} style={{ transform: `translateX(${carouselX}px)` }}>
              {productInfo?.map((item, idx) => (
                <li className="goodsAddProductItem" key={idx}>
                  <div className="goodsAddProductItemFigure">
                    <a href="" onClick={() => this.handleMoveDetail(item.id)}>
                      <img src={item.image_url} alt="" className="goodsAddProductItemImage" />
                    </a>
                  </div>
                  <div className="goodsAddProductItemContent">
                    <div className="goodsAddProductItemContentWrapper">
                      <p className="goodsAddProductItemName">{item.name}</p>
                      <p className="goodsAddProductItemPrice">{Math.floor(item.price).toLocaleString(navigator.language)} 원</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ProductGoodsAdd);
