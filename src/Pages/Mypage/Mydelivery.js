import React, { Component } from 'react';
import './Mydelivery.scss';

export class Mydelivery extends Component {
  render() {
    return (
      <>
        <div className="sectionHeader">
          <div className="headerName">
            <h1>배송지 관리</h1>
            <div className="headerInfo">
              배송지에 따라 상품 정보가 달라질 수 있습니다.
            </div>
          </div>
        </div>
        <div className="headAlwayitem">
          <div className="headcenter">선택</div>
          <div className="headAlwayright1">주소</div>
          <div className="deliveryHeader">
            <div className="deliveryHeaderleft">받으실 분</div>
            <div className="deliveryHeaderleft">연락처</div>
            <div className="deliveryHeaderleft">배송유형</div>
            <div className="deliveryHeaderleft">수정</div>
          </div>
        </div>
      </>
    );
  }
}

export default Mydelivery;
