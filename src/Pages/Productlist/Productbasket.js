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
                    <button
                      className="subtract"
                      name="subtract"
                      onClick={() => this.props.handleCnt(-1)}
                    >
                      <GrSubtract />
                    </button>
                    <input readonly="readonly" value={this.props.count} />
                    <button
                      className="add"
                      name="add"
                      onClick={() => this.props.handleCnt(1)}
                    >
                      <RiAddFill />
                    </button>
                  </div>
                </div>
                <div className="modalTotal">
                  <div className="modalTotalleft">합계</div>
                  <div className="modalTotalright">
                    <div className="modalTotalprice">
                      {this.props.addcomma(this.props.Price * this.props.count)}
                      원
                    </div>
                    <div className="modalTotalcomment">
                      <span className="modalTotalicon">적립</span>
                      <span className="modalTotalCash">
                        로그인 후, 적립혜택 제공
                      </span>
                    </div>
                  </div>
                </div>
                <div className="button">
                  <button
                    className="cancle"
                    onClick={this.props.handleModalrevoe}
                  >
                    취소
                  </button>
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
