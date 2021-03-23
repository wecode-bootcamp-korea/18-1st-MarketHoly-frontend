import React, { Component } from 'react';
import { RiAddFill } from 'react-icons/ri';
import { GrSubtract } from 'react-icons/gr';
import { AiOutlineCheckCircle } from 'react-icons/ai';

export class Cartitem extends Component {
  // handleCnts = (num, cnt) => {
  //   if (num === -1 && cnt === 1) return;
  //   this.setState({ cnt: cnt + num });
  // };
  handleCnts = num => {
    const { count } = this.props;

    if (num === -1 && count === 1) return;
    this.setState({ count: count + num });
  };

  render() {
    const { cartlist, changecartlist, count } = this.props;
    return (
      <>
        {cartlist.length !== 0 ? (
          cartlist.map(e => (
            <div className="cartItemList">
              <div className="btnCartLeft">
                <AiOutlineCheckCircle
                  className={e.isCheck ? 'checked' : 'unchecked'}
                />
              </div>
              <div>
                <img src={e.img} />
              </div>
              <div className="cartItemName2">{e.name}</div>
              <div className="dhcountNumber">
                <button
                  className="subtract"
                  name="subtract"
                  onClick={() => this.props.handleCnts(-1)}
                  // onClick={() => changecartlist(-1)}
                  value={e.cnt}
                >
                  <GrSubtract />
                </button>
                <input readonly="readonly" value={count} />
                <button
                  className="add"
                  name="add"
                  onClick={() => this.props.handleCnts(1)}
                  // onClick={() => changecartlist(1)}
                  value={e.cnt}
                >
                  <RiAddFill />
                </button>
              </div>
              <div className="cartListPrice">{e.price * count}원</div>
              <button
                className="cartDeleteBtn"
                onClick={this.props.deleteCartItem}
                value={e.id}
              >
                ❌
              </button>
            </div>
          ))
        ) : (
          <div className="noGoods">장바구니에 담긴 상품이 없습니다</div>
        )}
      </>
    );
  }
}

export default Cartitem;
