import React, { Component } from 'react';
import './Donereview.scss';

export class Donereview extends Component {
  render() {
    return (
      <div className="doneReviewBox">
        <div className="doneItemname">상품상품상품상품</div>
        <header className="doneHeader">
          <div className="doneTittle">제목제목제목 </div>
          <div className="doneDate">2021.03.23 </div>
        </header>
        <div className="doneComment">집가고싶다 </div>
        <div className="doneButton">
          <div className="doneChange">수정</div>
          <div className="doneDelete">삭제하기</div>
        </div>
      </div>
    );
  }
}

export default Donereview;
