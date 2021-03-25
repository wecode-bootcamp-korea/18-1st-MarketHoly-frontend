import React, { Component } from 'react';
import { AiOutlineRight } from 'react-icons/ai';
import './Mypageorderlist.scss';

export class Mypageorderlist extends Component {
  state = {
    userInfo: {},
  };

  componentDidMount() {
    this.fetchMyPageUser();
  }

  fetchMyPageUser = () => {
    fetch('/user/name', {
      method: 'GET',
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
        this.setState({ userInfo: res });
      });
  };

  render() {
    const { userInfo } = this.state;
    return (
      <div className="mypageOrderlist">
        <div className="mypageOrderlist2">
          <div className="myInfo">
            <div className="myInfo_one">
              <div className="myInfo_img"></div>
              <div className="myInfo_names">
                <p className="nameOne">
                  <span className="user">{userInfo.name}</span>
                  <span className="sir">님</span>
                </p>
                <p className="nameTwo">적립 5%</p>
                <p className="nameThree">최초 1회 무료배송</p>
              </div>
            </div>
            <div className="myInfo_two">
              <button className="totalGrade">전체등급 보기</button>
              <button className="nextGrade">다음 달 예상등급 보기</button>
            </div>
          </div>
          <div className="myMoney">
            <div className="userReserve">
              <p className="title">적립금</p>
              <div className="info">
                <span>0</span>원
                <div className="icon">
                  <AiOutlineRight />
                </div>
              </div>
              <p className="infoFooter">소멸 예정 0원</p>
            </div>
          </div>
          <div className="myCoupon">
            <div className="userReserve">
              <p className="title">쿠폰</p>
              <div className="info">
                <span>0</span>개
                <div className="icon">
                  <AiOutlineRight />
                </div>
              </div>
            </div>
          </div>
          <div className="kullyPass">
            <div className="userReserve">
              <p className="title">컬리패스</p>
              <span className="info">알아보기</span>
              <div className="icon">
                <AiOutlineRight />
              </div>
            </div>
          </div>
        </div>
        <div className="orderListUnderbar">
          <span className="leftText">2021 HOLLY FESTA! 매일 쏟아지는 혜택 </span>
          <span className="rightText">- 100% 당첨 랜덤 쿠폰 + 최대90% 한정수량 럭키드로우</span>
        </div>
      </div>
    );
  }
}

export default Mypageorderlist;
