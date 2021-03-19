import React from 'react';
import { BiShareAlt } from 'react-icons/bi';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import './ProductDetail.scss';

class ProductDetail extends React.Component {
  state = {
    productCount: 1,
    productPrice: 11700,
    sumPrice: 0,
  };

  changeProductPrice = count => {
    this.setState({
      sumPrice: this.state.productPrice * count,
    });
  };

  handleProductCount = e => {
    const { productCount, productPrice, sumPrice } = this.state;
    if (e.target.className === 'countPlus') {
      if (productCount < 99) {
        this.setState(
          {
            productCount: productCount + 1,
          },
          () => {
            this.changeProductPrice(this.state.productCount);
          }
        );
      } else {
        alert('99개 이상 주문은 안됩니다.');
      }
    }
    if (e.target.className === 'countMinus') {
      if (productCount > 1) {
        this.setState(
          {
            productCount: productCount - 1,
          },
          () => {
            this.changeProductPrice(this.state.productCount);
          }
        );
      }
    }
  };

  sendToCart = () => {
    console.log(this.state.sumPrice);
  };

  render() {
    const { productCount, productPrice } = this.state;
    let sumPrice = productCount * productPrice;
    return (
      <div className="detailContainer">
        <div className="detailMain">
          <div className="detailHeader">
            <div className="detailImgSection">
              <img
                src="https://images.unsplash.com/photo-1495360010541-f48722b34f7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                alt=""
              />
            </div>
            <div className="detailInfoSection">
              <div className="detailInfoHeader">
                <strong className="infoName">
                  [신규회원 이벤트] 심쿵하는 사진
                </strong>
                <button className="btnShare">
                  <BiShareAlt className="btnShareIcon" />
                </button>
              </div>
              <div className="detailInfoMiniHeader">
                <span>촉촉한 도넛의 진한 달콤함</span>
              </div>
              <div className="detailInfoIsUsers">
                <span className="isUserText">회원할인가</span>
              </div>

              <div className="detailInfoPriceBox">
                <div className="detailInfoPriceDc">
                  <span className="detailInfoPrice">100</span>
                  <span className="won">원</span>
                  <span className="detailInfoPriceSale">99%</span>
                </div>
                <div className="detailInfoOriginalPrice">
                  <div className="price">11,700원</div>
                  <span>?</span>
                </div>
                <div className="notLogin">
                  <span className="notLoginText">
                    로그인 후, 회원할인가와 적립혜택이 제공됩니다.
                  </span>
                </div>
              </div>

              <div className="detailInfoDeliveryBox">
                <div className="deliveryDivisionBox commonBox">
                  <span className="deliveryDivision DeliveryCommon">
                    배송구분
                  </span>
                  <span className="deliveryKinds">샛별배송/택배배송</span>
                </div>
                <div className="detailInfoPackingBox commonBox">
                  <span className="detailPackingType DeliveryCommon">
                    포장타입
                  </span>
                  <div className="detailPackingNameBox">
                    <span className="detailPackingName">상온/종이포장</span>
                    <span className="detailPackingExplicate">
                      택배배송은 에코포장이 스티로폼으로 대체됩니다.
                    </span>
                  </div>
                </div>
              </div>

              <div className="detailInfoBuyBox commonBox">
                <span className="detailInfoBuyName">구매수량</span>
                <div className="detailInfoBuyCountBox">
                  <button
                    className="countMinus"
                    onClick={this.handleProductCount}
                  >
                    <AiOutlineMinus className="countIcon" name="minus" />
                  </button>
                  <span className="countNumber">{productCount}</span>
                  <button
                    className="countPlus"
                    onClick={this.handleProductCount}
                  >
                    <AiOutlinePlus className="countIcon" name="plus" />
                  </button>
                </div>
              </div>

              <div className="sumPriceBox">
                <div className="sumPrice">
                  <span className="sumName">총 상품금액 : </span>
                  <span className="sumBox">
                    <span className="sumBuyPrice">
                      {sumPrice.toLocaleString(navigator.language)}
                    </span>
                    <span className="sumWon">원</span>
                  </span>
                </div>
                <div className="notLoginSumPrice">
                  <span className="notLoginEmphasize">적립</span>
                  <span className="notLoginText">
                    로그인 후, 회원할인가와 적립혜택 제공
                  </span>
                </div>
              </div>

              <div className="buyGroupBtnBox off">
                <div className="buyGroupBtnView">
                  <button className="restockNotice">재입고 알림</button>
                  <button className="wishList">늘 사는 것</button>
                </div>
                <button className="addToCart" onClick={this.sendToCart}>
                  장바구니 담기
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductDetail;
