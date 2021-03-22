import React, { Component } from 'react';
import { SiInstagram } from 'react-icons/si';
import { ImFacebook2 } from 'react-icons/im';
import { IoLogoYoutube } from 'react-icons/io';
import './Footer.scss';

class Footer extends Component {
  render() {
    return (
      <div className="footerContainer">
        <footer>
          <div className="footerCS">
            <h2>홀리고객센터</h2>

            <div className="csCall">
              <h3>1234-5678</h3>
              <div className="csList">
                <span>365고객센터</span>
                <p>00:00 - 24:00</p>
              </div>
            </div>

            <div className="csKakao">
              <button>카카오톡 문의</button>
              <div className="csList">
                <span>365고객센터</span>
                <p>00:00 - 24:00</p>
              </div>
            </div>

            <div className="csQna">
              <button>1:1 문의</button>
              <div className="csList">
                <span>24시간 접수 가능</span>
                <p>고객센터 운영시간에 순차적으로 답변해드리겠습니다.</p>
              </div>
            </div>
          </div>

          <div className="company">
            <ul className="footerList">
              <li>홀리소개</li>
              <li>홀리소개영상</li>
              <li>인재채용</li>
              <li>이용약관</li>
              <li>개인정보처리방침</li>
              <li>이용안내</li>
            </ul>
            <div className="companyText">
              <p>
                법인명 (상호) : 주식회사 홀리 | 사업자등록번호: 123-45-67890
                <span> 사업자정보 확인</span>
              </p>
              <p>통신판매업 : 제 2021-서울강남-00000 호 | 개인정보책임자 : 김홀리</p>
              <p>주소 : 서울시 홀리대로 16길 20, 홀리빌딩 | 대표이사 : 박홀라</p>
              <p>
                입점문의 : <span>입점문의하기</span> | 제휴문의 :<span> bussiness@holycorp.com</span>
              </p>
              <p>
                채용문의 : <span>recruit@holycorp.com</span>
              </p>
              <p>
                팩스 : 070-0000-0000 | 이메일 : <span>help@holycorp.com</span>
              </p>
              <small>© holy CORP. ALL RIGHTS RESERVED</small>
            </div>
            <ul className="snsList">
              <li>
                <SiInstagram className="icon" />
              </li>
              <li>
                <ImFacebook2 className="icon" />
              </li>
              <li>
                <IoLogoYoutube className="icon" />
              </li>
            </ul>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
