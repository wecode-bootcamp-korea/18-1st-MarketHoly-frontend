import React from 'react';
import './Cart.scss';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { VscKebabVertical } from 'react-icons/vsc';

class Cart extends React.Component {
  state = {
    isCheck: false,
  };

  handleCheck = () => {
    this.setState({ isCheck: !this.state.isCheck });
  };

  deleteAlert = () => {
    alert('선택한 상품을 삭제하시겠습니까?');
  };

  render() {
    return (
      <div className="cart">
        <div className="title">장바구니</div>
        <div className="select">
          <button className="checkbox" onClick={this.handleCheck}>
            <AiOutlineCheckCircle
              className={this.state.isCheck ? 'checked' : 'unchecked'}
            />
            <span className="checkAll">전체선택(0/0)</span>
          </button>
          <VscKebabVertical className="verticalLine" />
          <button className="checkDelete" onClick={this.deleteAlert}>
            선택삭제
          </button>
          <div className="lineblack" />
          <div className="noGoods">장바구니에 담긴 상품이 없습니다</div>
          <div className="linegray" />
          <button className="checkbox" onClick={this.handleCheck}>
            <AiOutlineCheckCircle
              className={this.state.isCheck ? 'checked' : 'unchecked'}
            />
            <span className="checkAll">전체선택(0/0)</span>
          </button>
          <VscKebabVertical className="verticalLine" />
          <button className="checkDelete" onClick={this.deleteAlert}>
            선택삭제
          </button>
        </div>
        <div className="delivery" />
      </div>
    );
  }
}

export default Cart;
