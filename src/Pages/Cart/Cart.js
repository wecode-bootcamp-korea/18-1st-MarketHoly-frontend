import React from 'react';
import { Link } from 'react-router-dom';
import Cartitem from './Cartitem';
import './Cart.scss';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { VscKebabVertical } from 'react-icons/vsc';
import { GrLocation } from 'react-icons/gr';
import { BiSearch } from 'react-icons/bi';
import { RiAddFill } from 'react-icons/ri';
import { GrSubtract } from 'react-icons/gr';
import { fireEvent } from '@testing-library/react';

class Cart extends React.Component {
  state = {
    isCheck: false,
    address: '',
    count: 1,
    cartlist: [],
    priceAdd: [],
  };

  componentDidMount() {
    fetch('/data/cartlist.json')
      .then(res => res.json())
      .then(res => {
        this.setState({
          cartlist: res,
        });
      });
  }

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

  countTotalPrice = (data, id) => {
    console.log(data, id);
  };

  deleteCartItem = e => {
    console.log(e.target);
    this.setState({
      cartlist: this.state.cartlist.filter(e => e.id != e.target.value),
    });
  };

  render() {
    const pricearr = [];
    for (let i = 0; i < this.state.cartlist.length; i++)
      pricearr[i] = this.state.cartlist[i].price;
    let totalprice = pricearr.reduce((acc, cur) => acc + cur, 0);

    return (
      <div className="cart">
        <div className="title">장바구니</div>
        <div className="contents">
          <div className="select">
            <button className="checkbox" onClick={this.handleCheck}>
              <AiOutlineCheckCircle
                className={this.state.isCheck ? 'checked' : 'unchecked'}
              />
              <span className="checkAll">전체선택(0/0)</span>
            </button>
            <VscKebabVertical className="verticalLine" />
            <div className="lineblack" />
            {this.state.cartlist.length !== 0 ? (
              this.state.cartlist.map(e => (
                <Cartitem
                  cartlist={this.state.cartlist}
                  isCheck={this.state.isCheck}
                  countTotalPrice={this.countTotalPrice}
                  deleteCartItem={this.deleteCartItem}
                  id={e.id}
                  name={e.name}
                  price={e.price}
                  img={e.img}
                  discount_rate={e.discount_rate}
                />
              ))
            ) : (
              <div className="noGoods">장바구니에 담긴 상품이 없습니다</div>
            )}
            <div className="linegray" />
            <button className="checkbox" onClick={this.handleCheck}>
              <AiOutlineCheckCircle
                className={this.state.isCheck ? 'checked' : 'unchecked'}
              />
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
              <div className="text">
                <span className="purpleText">배송지를 입력</span>하고
                <br />
                배송유형을 확인해 보세요!
              </div>
              <div className="address">
                <BiSearch className="icon" />
                <Link to="/searchAddress" className="tit" target="_blank">
                  주소 검색
                </Link>
              </div>
            </div>
            <div className="amountView">
              <div className="amount">
                <span className="tit">상품금액</span>
                <span className="price">{totalprice}원</span>
              </div>
              <div className="amount">
                <span className="tit">상품할인금액</span>
                <span className="price">원</span>
              </div>
              <div className="amount">
                <span className="tit">배송비</span>
                <span className="price">무료</span>
              </div>
              <div className="line" />
              <div className="amount">
                <span className="tit">결제예정금액</span>
                <span className="price">원</span>
              </div>
            </div>
            {this.state.cartlist.length === 0 ? (
              <button className="cartBtn" type="submit">
                상품을 담아주세요
              </button>
            ) : (
              <button className="cartBtnOrder" type="submit">
                주문하기
              </button>
            )}
            <span className="notice">
              · ‘입금확인’ 상태일 때는 주문 내역 상세에서 직접 주문취소가
              &nbsp;&nbsp;&nbsp;가능합니다.
            </span>
            <br />
            <span className="notice">
              · ‘입금확인’ 이후 상태에는 고객센터로 문의해주세요.
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
