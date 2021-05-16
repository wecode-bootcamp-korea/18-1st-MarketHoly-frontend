import React from 'react';
import { Link } from 'react-router-dom';
import DaumPostcode from 'react-daum-postcode';
import Cartitem from './Cartitem';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { VscKebabVertical } from 'react-icons/vsc';
import { GrLocation } from 'react-icons/gr';
import { BiSearch } from 'react-icons/bi';
import './Cart.scss';

class Cart extends React.Component {
  state = {
    isCheck: false,
    address: '',
    countTotal: 1,
    cartlist: [],
    priceAdd: [],
    priceSum: 0,
    fullAddress: '',
    isDaumPost: false,
    isRegister: false,
    register: [],
    addressRes: '',
  };
  // "proxy": "http://10.58.1.200:8000",
  componentDidMount() {
    const cartlist = `order/cart`;
    // fetch('/data/cartlist2.json');
    fetch(cartlist, {
      headers: {
        Authorization: '#',
      },
    })
      .then(res => res.json())
      .then(res => {
        //
        this.setState({
          // cart_list: res,
          cartlist: res.products,
          addressRes: res.address,
        });
      });

    let zero = [];
    let i = 0;
    while (i < 300) {
      zero.push(0);
      i++;
    }
    this.setState({
      priceAdd: [...zero],
    });
  }

  postCartData = (totalItemPrice, id) => {
    const cartlist = `order`;
    this.state.cartlist.length !== 0 &&
      fetch(cartlist, {
        method: 'POST',
        body: JSON.stringify({
          total_price: totalItemPrice,
          result: [id],
        }),
      });

    alert('결제가 완료됐습니다.');
    this.setState({
      cartlist: [],
    });
  };

  handleCheck = () => {
    this.setState({ isCheck: !this.state.isCheck });
  };

  handleChangeAddress = address => {
    this.setState({ address: address });
  };

  deleteAlert = () => {
    this.setState({
      cartlist: [],
    });
  };

  countTotalPrice = (data, id, count) => {
    let arr = this.state.priceAdd;

    arr[id] = data;
    this.setState({
      priceAdd: [...arr],
    });
    let sum = this.state.priceAdd.reduce((sum, num) => {
      return sum + num;
    }, 0);
    this.setState({
      priceSum: sum,
      countTotal: count,
    });
  };

  deleteCartItem = e => {
    this.setState({
      cartlist: this.state.cartlist.filter(item => item.id != e.target.value),
    });
  };

  handleOpenPost = () => {
    this.setState({
      isDaumPost: true,
    });
  };

  handleAddress = data => {
    let AllAddress = data.address;
    let extraAddress = '';
    let zoneCodes = data.zonecode;
    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      AllAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }
    this.setState({
      fullAddress: AllAddress,
      zoneCode: zoneCodes,
      isDaumPost: false,
    });
  };

  render() {
    const pricearr = [];
    let a = 0;
    for (let i = 0; i < this.state.cartlist.length; i++) pricearr[i] = this.state.cartlist[i].price;
    let totalprice = pricearr.reduce((acc, cur) => acc + cur, 0);

    this.state.cartlist.map(e => (a = a + e.price));

    const { isModalShow, isModalClose } = this.props;
    const { isDaumPost } = this.state;
    const width = 595;
    const height = 450;
    const modalStyle = {
      position: 'fixed',
      top: '10%',
      left: '10%',
      zIndex: '100',
      border: '1px solid #000000',
      overflow: 'hidden',
    };

    let totalItemPrice = Math.floor(a) + this.state.priceSum;

    return (
      <div className="cart">
        <div className="title">장바구니</div>
        <div className="contents">
          <div className="select">
            <button className="checkbox" onClick={this.handleCheck}>
              <AiOutlineCheckCircle className={this.state.isCheck ? 'checked' : 'unchecked'} />
              <span className="checkAll">전체선택(0/0)</span>
            </button>
            <VscKebabVertical className="verticalLine" />
            <div className="lineblack" />
            {this.state.cartlist.length !== 0 ? (
              this.state.cartlist.map(e => (
                <>
                  <Cartitem
                    cartlist={e.id}
                    isCheck={this.state.isCheck}
                    countTotalPrice={this.countTotalPrice}
                    deleteCartItem={this.deleteCartItem}
                    id={e.id}
                    name={e.name}
                    price={e.price}
                    img={e.img_url}
                    discount_rate={e.discount_rate}
                    priceAdd={this.priceAdd}
                  />
                </>
              ))
            ) : (
              <div className="noGoods">장바구니에 담긴 상품이 없습니다</div>
            )}
            <div className="linegray" />
            <button className="checkbox" onClick={this.handleCheck}>
              <AiOutlineCheckCircle className={this.state.isCheck ? 'checked' : 'unchecked'} />
              <span className="checkAll">전체선택(0/0)</span>
            </button>
            <VscKebabVertical className="verticalLine" />
            <button className="checkDelete" onClick={this.deleteAlert}>
              전체삭제
            </button>
          </div>
          <div className="result">
            <div className="delivery">
              <GrLocation className="icon" />
              <span className="tit">배송지</span>
              {/* {this.state.fullAddress == '' ? (
                <div className="text">
                  <span className="purpleText">배송지를 입력</span>하고
                  <br />
                  배송유형을 확인해 보세요!
                </div>
              ) : (
                <div className="addressColor">{this.state.fullAddress}</div>
              )} */}
              <div className="addressColor">{this.state.addressRes}</div>
              <div className="address">
                <BiSearch className="icon" />
                <div className="tit" onClick={this.handleOpenPost}>
                  주소 검색
                </div>
              </div>
            </div>
            {isDaumPost ? <DaumPostcode onComplete={this.handleAddress} autoClose width={width} height={height} style={modalStyle} isDaumPost={isDaumPost} /> : null}
            <div className="amountView">
              <div className="amount">
                <span className="tit">상품금액</span>
                <span className="price">{Math.floor(totalItemPrice)}원</span>
              </div>
              <div className="amount">
                <span className="tit">상품할인금액</span>
                <span className="price">0원</span>
              </div>
              <div className="amount">
                <span className="tit">배송비</span>
                <span className="price">무료</span>
              </div>
              <div className="line" />
              <div className="amount">
                <span className="tit">결제예정금액</span>
                <span className="price">{Math.floor(totalItemPrice)}원</span>
              </div>
            </div>
            {this.state.cartlist.length === 0 ? (
              <button className="cartBtn" type="submit">
                상품을 담아주세요
              </button>
            ) : (
              <button className="cartBtnOrder" type="submit" onClick={() => this.postCartData(totalItemPrice, this.state.cartlist.id)}>
                주문하기
              </button>
            )}
            <span className="notice">· ‘입금확인’ 상태일 때는 주문 내역 상세에서 직접 주문취소가 &nbsp;&nbsp;&nbsp;가능합니다.</span>
            <br />
            <span className="notice">· ‘입금확인’ 이후 상태에는 고객센터로 문의해주세요.</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
