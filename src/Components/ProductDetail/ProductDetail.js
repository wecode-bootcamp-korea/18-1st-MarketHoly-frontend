import React from 'react';
import { BiShareAlt } from 'react-icons/bi';
import { AiFillFacebook, AiOutlineMinus, AiOutlinePlus, AiOutlineTwitter } from 'react-icons/ai';
import ProductGoodsAdd from './ProductGoodsAdd';
import GoodsViewInfomation from './GoodsViewInfomation';
import './ProductDetail.scss';

class ProductDetail extends React.Component {
  state = {
    productInfo: {},
    productCount: 0,
    productPrice: 11700,
    sumPrice: 0,
    isSharedBtn: false,
    isLogin: false,
    isRestockNotice: true,
    isWishList: false,
  };

  componentDidMount() {
    fetch('/data/productDetail.json')
      .then(res => res.json())
      .then(res => {
        this.setState({ productInfo: res });
      });
  }

  changeProductPrice = count => {
    const { productInfo } = this.state;
    this.setState({
      sumPrice: (productInfo.price - productInfo.price * productInfo.discountRate) * count,
    });
  };

  handleProductCount = e => {
    const { productCount } = this.state;
    if (e.target.className === 'countPlus') {
      if (productCount < 99) {
        this.setState({ productCount: productCount + 1 }, () => {
          this.changeProductPrice(this.state.productCount);
        });
      } else {
        alert('99개 이상 주문은 안됩니다.');
      }
    }
    if (e.target.className === 'countMinus') {
      if (productCount >= 1) {
        this.setState({ productCount: productCount - 1 }, () => {
          this.changeProductPrice(this.state.productCount);
        });
      }
    }
  };

  handleShareBtn = () => {
    this.setState({ isSharedBtn: !this.state.isSharedBtn });
  };
  sendToCart = () => {
    if (this.state.sumPrice === 0) alert('1개 이상 선택 해주세요!');
    else console.log(this.state.sumPrice);
  };

  render() {
    const { productCount, productInfo, sumPrice, isSharedBtn, isLogin, isRestockNotice, isWishList } = this.state;
    return (
      <div className="detailContainer">
        <div className="detailMain">
          <div className="detailHeader">
            <div className="detailImgSection">
              <img src={productInfo.imageUrl} alt="" />
            </div>
            <div className="detailInfoSection">
              <div className="detailInfoHeader">
                <strong className="infoName">{productInfo.name}</strong>
                <button className="btnShare" onClick={this.handleShareBtn}>
                  <BiShareAlt className="btnShareIcon" />
                  {isSharedBtn && (
                    <div className="layerShare">
                      <div className="layerShareBox">
                        <div className="twiterBox">
                          <AiOutlineTwitter className="shareTwiterIcon" />
                          <a href="#" className="twiterText">
                            트윗하기
                          </a>
                        </div>
                        <div className="fabookBox">
                          <AiFillFacebook className="shareFabookIcon" />
                          <a href="#" className="fabookText">
                            공유하기
                          </a>
                        </div>
                      </div>
                      <div className="shareUrlBox">
                        <input type="text" className="shareUrlText" value="https://ss37g.app.goo.gl/i69s" disabled />
                        <button className="copyUrl">URL 복사 ✅</button>
                      </div>
                    </div>
                  )}
                </button>
              </div>
              <div className="detailInfoMiniHeader">
                <span>{productInfo.description}</span>
              </div>
              <div className="detailInfoIsUsers">
                <span className="isUserText">회원할인가</span>
              </div>

              <div className="detailInfoPriceBox">
                <div className="detailInfoPriceDc">
                  <span className="detailInfoPrice">{productInfo.price && (productInfo.price - productInfo.price * productInfo.discountRate).toLocaleString(navigator.language)}</span>
                  <span className="won">원</span>
                  {productInfo.discountRate !== 0 && <span className="detailInfoPriceSale">{productInfo.discountRate * 100}%</span>}
                </div>
                <div className="detailInfoOriginalPrice">
                  {productInfo.discountRate !== 0 && (
                    <>
                      <div className="price">{productInfo.price && productInfo.price.toLocaleString('KO-kr')}</div>
                      <span>?</span>
                    </>
                  )}
                </div>
                {!isLogin && (
                  <div className="notLogin">
                    <span className="notLoginText">로그인 후, 회원할인가와 적립혜택이 제공됩니다.</span>
                  </div>
                )}
              </div>

              <div className="salesUnitBox">
                <div className="salesUnitMiniBox">
                  <div className="salesUnitName widthCommonBox">
                    <span className="salesUnitText">판매단위</span>
                  </div>
                  <div className="salesUnit">
                    <span className="salesUnitText">{productInfo.salesUnit}개</span>
                  </div>
                </div>
                {productInfo.amount && (
                  <div className="salesUnitAmountBox">
                    <div className="salesUnitName paddingCommonBox">
                      <span className="salesUnitText">중량단위</span>
                    </div>
                    <div className="salesUnit">
                      <span className="salesUnitText">{productInfo.amount}</span>
                    </div>
                  </div>
                )}
              </div>
              <div className="detailInfoDeliveryBox">
                <div className="deliveryDivisionBox paddingCommonBox">
                  <span className="deliveryDivision DeliveryCommon widthCommonBox">배송구분</span>
                  <span className="deliveryKinds">샛별배송/택배배송</span>
                </div>
                <div className="detailInfoPackingBox paddingCommonBox">
                  <span className="detailPackingType DeliveryCommon widthCommonBox">포장타입</span>
                  <div className="detailPackingNameBox">
                    <span className="detailPackingName">{productInfo.storageMethod ? `${productInfo.storageMethod}` : '기타'}</span>
                    <span className="detailPackingExplicate">택배배송은 에코포장이 스티로폼으로 대체됩니다.</span>
                  </div>
                </div>
              </div>
              {productInfo.allergy && (
                <div className="allergyBox paddingCommonBox">
                  <div className="allergy">
                    <span className="allergyText widthCommonBox">알레르기정보</span>
                  </div>
                  <div className="allergyInfo">
                    <span className="allergyInfoList">{productInfo.allergy?.map(list => `${list} `)}</span>
                    <span className="allergyDescription">을(를) 사용한 제품과 같은 제조시설에서 제조하였습니다.</span>
                  </div>
                </div>
              )}

              {productInfo.expirationData && (
                <div className="expirationBox paddingCommonBox">
                  <div className="expiration">
                    <span className="expirationText widthCommonBox">유통기한</span>
                  </div>
                  <div className="expirationInfo">
                    <span className="expirationText">{productInfo.expirationData}</span>
                  </div>
                </div>
              )}

              <div className="detailInfoBuyBox paddingCommonBox">
                <span className="detailInfoBuyName widthCommonBox">구매수량</span>
                <div className="detailInfoBuyCountBox">
                  <button className="countMinus" onClick={this.handleProductCount}>
                    <AiOutlineMinus className="countIcon" name="minus" />
                  </button>
                  <span className="countNumber">{productCount}</span>
                  <button className="countPlus" onClick={this.handleProductCount}>
                    <AiOutlinePlus className="countIcon" name="plus" />
                  </button>
                </div>
              </div>
              <div className="sumPriceBox">
                <div className="sumPrice">
                  <span className="sumName">총 상품금액 : </span>
                  <span className="sumBox">
                    <span className="sumBuyPrice">{sumPrice.toLocaleString(navigator.language)}</span>
                    <span className="sumWon">원</span>
                  </span>
                </div>
                <div className="notLoginSumPrice">
                  <span className="notLoginEmphasize">적립</span>
                  <span className="notLoginText">로그인 후, 회원할인가와 적립혜택 제공</span>
                </div>
              </div>
              <div className="buyGroupBtnBox off">
                <div className="buyGroupBtnView">
                  <button className={'restockNotice ' + (isRestockNotice && 'notBuyGroupBtn')}>재입고 알림</button>
                  <button className={'wishList ' + (isWishList && 'notAddToCart')}>늘 사는 것</button>
                </div>
                <button className="addToCart" onClick={this.sendToCart}>
                  장바구니 담기
                </button>
              </div>
            </div>
          </div>
        </div>
        <ProductGoodsAdd productInfoId={productInfo.id} />
        <GoodsViewInfomation />
      </div>
    );
  }
}

export default ProductDetail;
