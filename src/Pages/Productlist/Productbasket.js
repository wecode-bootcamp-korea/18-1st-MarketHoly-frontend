import React, { Component } from 'react';
import { RiAddFill } from 'react-icons/ri';
import { GrSubtract } from 'react-icons/gr';
import './productbasket.scss';

export class Productbasket extends Component {
  render() {
    const { name, count, handleCnt, addComma, price, handleModalremove, productBasket, discount_rate, id } = this.props;
    const sumCount = addComma(price * count);
    const rate = 1 - discount_rate;
    const sumCountdiscount = addComma(Math.floor(price * rate * count));

    return (
      <>
        {productBasket && (
          <div className="modalEffect">
            <div className="cartList">
              <div className="namePrice">
                <div className="listName">{name}</div>
                <div className="priceCount">
                  {discount_rate ? <div className="listPrice">{addComma(Math.floor(price * rate))}</div> : <div className="listPrice">{addComma(Math.floor(price))}</div>}
                  <div className="countNumber">
                    <button className="subtract" name="subtract" onClick={() => handleCnt(-1)}>
                      <GrSubtract />
                    </button>
                    <input readonly="readonly" value={count} />
                    <button className="add" name="add" onClick={() => handleCnt(1)}>
                      <RiAddFill />
                    </button>
                  </div>
                </div>
                <div className="modalTotal">
                  <div className="modalTotalleft">합계</div>
                  <div className="modalTotalright">
                    {discount_rate ? <div className="modalTotalprice">{sumCountdiscount}원</div> : <div className="modalTotalprice">{sumCount}원</div>}
                    <div className="modalTotalcomment">
                      <span className="modalTotalicon">적립</span>
                      <span className="modalTotalCash">로그인 후, 적립혜택 제공</span>
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
