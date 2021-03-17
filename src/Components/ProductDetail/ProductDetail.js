import React from 'react';
import './ProductDetail.scss';

class ProductDetail extends React.Component {
  render() {
    return (
      <div className="detailMain">
        <div className="detailHeader">
          <div className="detailImgSection">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFV2nh9gwdUsucDf0l3k_zy3meZliht1M26Q&usqp=CAU" alt="" />
          </div>
          <div className="detailInfoSection">
            <div className="detailInfoHeader">[신규회원 이벤트] 글레이즈 9개입</div>
            <div className="detailInfoMiniHeader">촉촉한 도넛의 진한 달콤함</div>
            <div className="detailInfoIsUsers">회원할인가</div>
            <div className="detailInfoPriceBox">
              <div className="detailInfoPriceDc">
                <span className="detailInfoPrice">7,605원</span>
                <span className="detailInfoPriceSale">35%</span>
              </div>
              <div className="detailInfoOriginalPrice">
                <div className="price">11,700원</div>
                <span>? 이</span>
              </div>
              <div className="notLogin">
                <span className="notLoginText">로그인 후, 회원할인가와 적립혜택이 제공됩니다.</span>
              </div>
            </div>
            <div className="detailInfoDeliveryBox">
              <span className="deliveryDivision">배송구분</span>
              <span className="deliveryKinds">샛별배송/택배배송</span>
            </div>
            <div className="detailInfoPackingBox">
              <span className="detailPackingType">포장타입</span>
              <div className="detailPackingNameBox">
                <span className="detailPackingName">상온/종이포장</span>
                <span className="detailPackingExplicate">택배배송은 에코포장이 스티로폼으로 대체됩니다.</span>
              </div>
            </div>
            <div className="detailInfoBuyBox">
              <span className="detailInfoBuyName">구매수량</span>
              <div className="detailInfoBuyCountBox">
                <button className="countMinus">-</button>
                <span className="countNumber">1</span>
                <button className="countPlus">+</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductDetail;
