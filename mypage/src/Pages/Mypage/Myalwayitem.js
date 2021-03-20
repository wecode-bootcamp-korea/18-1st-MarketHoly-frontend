import React, { Component } from 'react';
import './Myalwayitem.scss';

export class Myalwayitem extends Component {
  render() {
    const { wishItem, removeWhish, removeWhishitem } = this.props;

    return (
      <>
        <div className="sectionHeader">
          <div className="headerName">
            <h1>늘 사는 것</h1>
            <div className="headerInfo">
              늘 사는 것으로 등록하신 상품 목록입니다.
            </div>
          </div>
        </div>
        <div className="headAlwayitem">
          <input id="checkbox" type="checkbox" />
          <div className="headcenter">상품정보</div>
          <div className="headAlwayright">선택</div>
        </div>
        {this.props.wishItem.map(e => {
          return (
            <div className="wishItem" key={e.id}>
              <div className="wishItemButton">
                <input type="checkbox"></input>
              </div>
              <div className="wishItemimg">
                <img src={e.img} />
              </div>
              <div className="wishIteminfo">
                <div className="wishItemname">{e.name}</div>
                <div className="wishItemprice">{e.price}원</div>
              </div>
              <div className="wishItemOption">
                <button className="wishBasket">장바구니 담기</button>
                <button
                  className="wishDelete"
                  onClick={removeWhishitem}
                  value={e.id}
                >
                  삭제
                </button>
              </div>
            </div>
          );
        })}
        {wishItem.length == 0 && (
          <div className="notOder">늘 사는 상품 내역이 없습니다.</div>
        )}
        <div className="wishButtonbox">
          <button className="wishButton" onClick={removeWhish}>
            늘 사는 것 비우기
          </button>
        </div>
      </>
    );
  }
}

export default Myalwayitem;
