import React, { Component } from 'react';
import './Myalwayitem.scss';

export class Myalwayitem extends Component {
  render() {
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
      </>
    );
  }
}

export default Myalwayitem;
