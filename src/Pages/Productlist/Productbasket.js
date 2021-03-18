import React, { Component } from 'react';
import { RiAddFill } from 'react-icons/ri';
import { GrSubtract } from 'react-icons/gr';
import './productbasket.scss';

export class Productbasket extends Component {
  render() {
    const {
      count,
      handleCnt,
      addComma,
      price,
      handleModalremove,
      productBasket,
    } = this.props;
    let sumCount = addComma(price * count);
    return (
      <>
        {productBasket && (
          <div className="modalEffect">
            <div className="cartList">
              <div className="namePrice">
                <div className="listName">{this.props.name}</div>
                <div className="priceCount">
                  <div className="listPrice">{this.props.price}</div>
                  <div className="countNumber">
                    <button
                      className="subtract"
                      name="subtract"
                      onClick={() => handleCnt(-1)}
                    >
                      <GrSubtract />
                    </button>
                    <input readonly="readonly" value={count} />
                    <button
                      className="add"
                      name="add"
                      onClick={() => handleCnt(1)}
                    >
                      <RiAddFill />
                    </button>
                  </div>
                </div>
                <div className="modalTotal">
                  <div className="modalTotalleft">합계</div>
                  <div className="modalTotalright">
                    <div className="modalTotalprice">{sumCount}원</div>
                    <div className="modalTotalcomment">
                      <span className="modalTotalicon">적립</span>
                      <span className="modalTotalCash">
                        로그인 후, 적립혜택 제공
                      </span>
                    </div>
                  </div>
                </div>
                <div className="button">
                  <button className="cancel" onClick={handleModalremove}>
                    취소
                  </button>
                  <button className="pushBasket">장바구니 담기</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default Productbasket;
