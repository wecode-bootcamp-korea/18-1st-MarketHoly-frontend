import React, { Component } from 'react';
import './Mypagearticle.scss';

export class Mypagearticle extends Component {
  render() {
    return (
      <article className="myArticle">
        <div className="article">
          <nav className="navBar">
            <div className="myHoly">
              <a>마이홀리</a>
            </div>
            <ul>
              <li>주문 내역</li>
              <li>배송지 관리</li>
              <li>늘 사는 것</li>
              <li>상품 후기</li>
              <li>적립금</li>
              <li>쿠폰</li>
              <li>개인 정보 수정</li>
            </ul>
          </nav>
          <section className="pageSection">
            <div className="sectionHeader">
              <h1>주문 내역</h1>
              <span>지난 3년간의 주문 내역 조회가 가능합니다.</span>
            </div>
          </section>
        </div>
      </article>
    );
  }
}

export default Mypagearticle;
