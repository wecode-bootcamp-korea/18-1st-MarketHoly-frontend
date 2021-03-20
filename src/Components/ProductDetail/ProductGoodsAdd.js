import React from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import './ProductGoodsAdd.scss';

const CAROUSEL_X = 940;

class ProductGoodsAdd extends React.Component {
  state = {
    imgUlWidth: null,
    imgListLength: null,
    carouselX: 0,
    isCarouselX: true,
    isLeftArrow: false,
    isRightArrow: true,
  };

  componentDidMount() {
    this.setState(
      {
        imgUlWidth: this.getWidth.offsetWidth,
        imgListLength: this.getWidth.children.length,
      },
      () => console.log(this.state.imgListLength)
    );
  }

  handleArrowMove = e => {
    if (e.target.className.includes('arrowLeftBox')) {
      this.setState({ carouselX: this.state.carouselX + CAROUSEL_X }, () => {
        if (this.state.carouselX < 0) {
          this.setState({ isRightArrow: true });
        } else {
          this.setState({ isLeftArrow: false });
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

  render() {
    const { carouselX, isLeftArrow, isRightArrow, imgListLength } = this.state;
    return (
      <div className="goodsAddProduct">
        <h3 className="goodsAddTitle">RELATED PRODUCT</h3>
        <div className="goodsAddProductWrapper">
          {isLeftArrow && (
            <div className="arrowLeftBox arrowCommonBox" name="left" onClick={this.handleArrowMove}>
              <AiOutlineArrowLeft className="arrowIcon leftArrow" />
            </div>
          )}
          {isRightArrow && imgListLength > 5 && (
            <div className="arrowRightBox arrowCommonBox" name="right" onClick={this.handleArrowMove}>
              <AiOutlineArrowRight className="arrowIcon rightArrow" />
            </div>
          )}
          <div className="goodsAddProductListWrapper">
            <ul className="goodsAddProductList" ref={e => (this.getWidth = e)} style={{ transform: `translateX(${carouselX}px)` }}>
              <li className="goodsAddProductItem">
                <div className="goodsAddProductItemFigure">
                  <a href="#" target="_blank">
                    <img
                      src="https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhdHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                      alt=""
                      className="goodsAddProductItemImage"
                    />
                  </a>
                </div>
                <div className="goodsAddProductItemContent">
                  <div className="goodsAddProductItemContentWrapper">
                    <p className="goodsAddProductItemName">[심쿵] 고앵님</p>
                    <p className="goodsAddProductItemPrice">3,000억</p>
                  </div>
                </div>
              </li>
              <li className="goodsAddProductItem">
                <div className="goodsAddProductItemFigure">
                  <a href="#" target="_blank">
                    <img
                      src="https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhdHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                      alt=""
                      className="goodsAddProductItemImage"
                    />
                  </a>
                </div>
                <div className="goodsAddProductItemContent">
                  <div className="goodsAddProductItemContentWrapper">
                    <p className="goodsAddProductItemName">[심쿵] 고앵님</p>
                    <p className="goodsAddProductItemPrice">3,000억</p>
                  </div>
                </div>
              </li>
              <li className="goodsAddProductItem">
                <div className="goodsAddProductItemFigure">
                  <a href="#" target="_blank">
                    <img
                      src="https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhdHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                      alt=""
                      className="goodsAddProductItemImage"
                    />
                  </a>
                </div>
                <div className="goodsAddProductItemContent">
                  <div className="goodsAddProductItemContentWrapper">
                    <p className="goodsAddProductItemName">[심쿵] 고앵님</p>
                    <p className="goodsAddProductItemPrice">3,000억</p>
                  </div>
                </div>
              </li>
              <li className="goodsAddProductItem">
                <div className="goodsAddProductItemFigure">
                  <a href="#" target="_blank">
                    <img
                      src="https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhdHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                      alt=""
                      className="goodsAddProductItemImage"
                    />
                  </a>
                </div>
                <div className="goodsAddProductItemContent">
                  <div className="goodsAddProductItemContentWrapper">
                    <p className="goodsAddProductItemName">[심쿵] 고앵님</p>
                    <p className="goodsAddProductItemPrice">3,000억</p>
                  </div>
                </div>
              </li>
              <li className="goodsAddProductItem">
                <div className="goodsAddProductItemFigure">
                  <a href="#" target="_blank">
                    <img
                      src="https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhdHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                      alt=""
                      className="goodsAddProductItemImage"
                    />
                  </a>
                </div>
                <div className="goodsAddProductItemContent">
                  <div className="goodsAddProductItemContentWrapper">
                    <p className="goodsAddProductItemName">[심쿵] 고앵님</p>
                    <p className="goodsAddProductItemPrice">3,000억</p>
                  </div>
                </div>
              </li>
              <li className="goodsAddProductItem">
                <div className="goodsAddProductItemFigure">
                  <a href="#" target="_blank">
                    <img
                      src="https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhdHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                      alt=""
                      className="goodsAddProductItemImage"
                    />
                  </a>
                </div>
                <div className="goodsAddProductItemContent">
                  <div className="goodsAddProductItemContentWrapper">
                    <p className="goodsAddProductItemName">[심쿵] 고앵님</p>
                    <p className="goodsAddProductItemPrice">3,000억</p>
                  </div>
                </div>
              </li>
              <li className="goodsAddProductItem">
                <div className="goodsAddProductItemFigure">
                  <a href="#" target="_blank">
                    <img
                      src="https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhdHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                      alt=""
                      className="goodsAddProductItemImage"
                    />
                  </a>
                </div>
                <div className="goodsAddProductItemContent">
                  <div className="goodsAddProductItemContentWrapper">
                    <p className="goodsAddProductItemName">[심쿵] 고앵님</p>
                    <p className="goodsAddProductItemPrice">3,000억</p>
                  </div>
                </div>
              </li>
              <li className="goodsAddProductItem">
                <div className="goodsAddProductItemFigure">
                  <a href="#" target="_blank">
                    <img
                      src="https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhdHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                      alt=""
                      className="goodsAddProductItemImage"
                    />
                  </a>
                </div>
                <div className="goodsAddProductItemContent">
                  <div className="goodsAddProductItemContentWrapper">
                    <p className="goodsAddProductItemName">[심쿵] 고앵님</p>
                    <p className="goodsAddProductItemPrice">3,000억</p>
                  </div>
                </div>
              </li>
              <li className="goodsAddProductItem">
                <div className="goodsAddProductItemFigure">
                  <a href="#" target="_blank">
                    <img
                      src="https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhdHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                      alt=""
                      className="goodsAddProductItemImage"
                    />
                  </a>
                </div>
                <div className="goodsAddProductItemContent">
                  <div className="goodsAddProductItemContentWrapper">
                    <p className="goodsAddProductItemName">[심쿵] 고앵님</p>
                    <p className="goodsAddProductItemPrice">3,000억</p>
                  </div>
                </div>
              </li>
              <li className="goodsAddProductItem">
                <div className="goodsAddProductItemFigure">
                  <a href="#" target="_blank">
                    <img
                      src="https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhdHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                      alt=""
                      className="goodsAddProductItemImage"
                    />
                  </a>
                </div>
                <div className="goodsAddProductItemContent">
                  <div className="goodsAddProductItemContentWrapper">
                    <p className="goodsAddProductItemName">[심쿵] 고앵님</p>
                    <p className="goodsAddProductItemPrice">3,000억</p>
                  </div>
                </div>
              </li>
              <li className="goodsAddProductItem">
                <div className="goodsAddProductItemFigure">
                  <a href="#" target="_blank">
                    <img
                      src="https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhdHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                      alt=""
                      className="goodsAddProductItemImage"
                    />
                  </a>
                </div>
                <div className="goodsAddProductItemContent">
                  <div className="goodsAddProductItemContentWrapper">
                    <p className="goodsAddProductItemName">[심쿵] 고앵님</p>
                    <p className="goodsAddProductItemPrice">3,000억</p>
                  </div>
                </div>
              </li>
              <li className="goodsAddProductItem">
                <div className="goodsAddProductItemFigure">
                  <a href="#" target="_blank">
                    <img
                      src="https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhdHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                      alt=""
                      className="goodsAddProductItemImage"
                    />
                  </a>
                </div>
                <div className="goodsAddProductItemContent">
                  <div className="goodsAddProductItemContentWrapper">
                    <p className="goodsAddProductItemName">[심쿵] 고앵님</p>
                    <p className="goodsAddProductItemPrice">3,000억</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductGoodsAdd;
