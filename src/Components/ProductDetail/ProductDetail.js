import React from 'react';
import { withRouter } from 'react-router-dom';
import { BiShareAlt } from 'react-icons/bi';
import { AiFillFacebook, AiOutlineMinus, AiOutlinePlus, AiOutlineTwitter } from 'react-icons/ai';
import ProductGoodsAdd from './ProductGoodsAdd';
import GoodsViewInfomation from './GoodsViewInfomation';
import Footer from '../Footer/Footer';
import Nav from '../Nav/Nav';
import Aside from '../../Pages/aside/aside';
import './ProductDetail.scss';

class ProductDetail extends React.Component {
  state = {
    productInfo: {},
    productList: [],
    productCount: 0,
    sumPrice: 0,
    isSharedBtn: false,
    isLogin: false,
    isRestockNotice: true,
    isWishList: false,
  };

  componentDidMount() {
    fetch(`/product/detail/${this.props.match.params.id}`)
      .then(res => res.json())
      .then(res => {
        console.log(res);
        this.setState({ productInfo: res.info, productList: res.related_products });
      });

    window.scrollTo(0, 0);
  }

  handleProductCount = e => {
    const { productCount } = this.state;
    if (e.target.className === 'countPlus') {
      if (productCount < 99) {
        this.setState({ productCount: productCount + 1 });
      } else {
        alert('99개 이상 주문은 안됩니다.');
      }
      return;
    }
    if (e.target.className === 'countMinus') {
      if (productCount >= 1) {
        this.setState({ productCount: productCount - 1 });
      }
    }
  };

  handleShareBtn = () => {
    this.setState({ isSharedBtn: !this.state.isSharedBtn });
  };

  sendToCart = () => {
    const { productInfo, productCount } = this.state;
    if ((productInfo.price - productInfo.price * productInfo.discount_rate) * productCount === 0) alert('1개 이상 선택 해주세요!');
    else {
      // 카트로 보낼때 값
      // const sumPrice = (productInfo.price - productInfo.price * productInfo.discount_rate) * productCount;
      const cart_id = productInfo.id;
      const quantity = productCount;
      console.log(cart_id);
      console.log(quantity);
    }
  };

  render() {
    const { productCount, productInfo, isSharedBtn, isLogin, isRestockNotice, isWishList } = this.state;
    return (
      <div className="detailContainer">
        <div className="detailMain">
          <div className="detailHeader">
            <div className="detailImgSection">
              <img src={productInfo.image_url} alt="제품 이미지" />
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
                  <span className="detailInfoPrice">{productInfo.price && Math.floor(productInfo.price - productInfo.price * productInfo.discount_rate).toLocaleString(navigator.language)}</span>
                  <span className="won">원</span>
                  {productInfo.discount_rate && productInfo.dscount_rate !== 0 && <span className="detailInfoPriceSale">{productInfo.discount_rate * 100}%</span>}
                </div>
                <div className="detailInfoOriginalPrice">
                  {productInfo.discount_rate !== null && (
                    <>
                      <div className="price">{productInfo.price && Math.floor(productInfo.price).toLocaleString('KO-kr')}</div>
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
                    <span className="salesUnitText">{productInfo.sales_unit}</span>
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
                    <span className="detailPackingName">{productInfo.storage_method ? `${productInfo.storage_method}` : '기타'}</span>
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
                    <span className="sumBuyPrice">
                      {productInfo.price && Math.floor((productInfo.price - productInfo.price * productInfo.discount_rate) * productCount).toLocaleString(navigator.language)}
                    </span>
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
        <ProductGoodsAdd productInfoId={productInfo.id} productInfo={this.state.productList} />
        <GoodsViewInfomation productInfo={productInfo} />
      </div>
    );
  }
}

export default withRouter(ProductDetail);
