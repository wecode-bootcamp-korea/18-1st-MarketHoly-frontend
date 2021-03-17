import React, { Component } from 'react';
import './productbasket.scss';
import { RiAddFill } from 'react-icons/ri';
import { GrSubtract } from 'react-icons/gr';

export class Productbasket extends Component {
  render() {
    return (
      <>
        {this.props.productbasket ? (
          <div className="modalEffect">
            <div className="cartList">
              <div className="namePrice">
                <div className="listName">{this.props.name}</div>
                <div className="priceCount">
                  <div className="listPrice">{this.props.Price}</div>
                  <div className="countNumber">
                    <button className="subtract">
                      <GrSubtract />
                    </button>
                    <input readonly="readonly" value="1" />
                    <button className="add">
                      <RiAddFill />
                    </button>
                  </div>
                </div>
                <div className="modalTotal">
                  <div className="modalTotalleft">합계</div>
                  <div className="modalTotalright">
                    <div className="modalTotalprice">{this.props.Price}</div>
                    <div className="modalTotalcomment">
                      <span className="modalTotalicon">적립</span>
                      <span className="modalTotalCash">
                        로그인 후, 적립혜택 제공
                      </span>
                    </div>
                  </div>
                </div>
                <div className="button">
                  <button className="cancle">취소</button>
                  <button className="pustBasket">장바구니 담기</button>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </>
    );
  }
}

export default Productbasket;
