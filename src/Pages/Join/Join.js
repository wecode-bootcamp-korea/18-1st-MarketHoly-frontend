import React, { Component } from 'react';
import './Join.scss';

class Join extends Component {
  constructor() {
    super();
    this.state = {
      idField: '',
      pwField: '',
    };
  }

  render() {
    return (
      <div className="joinForm">
        <h3>회원가입</h3>
        <p className="subText">
          <span className="essential">*</span>필수입력사항
        </p>
        <form>
          <table className="joinTable">
            <tbody>
              <tr className="emailTable">
                <th>이메일</th>
                <td>
                  <input
                    type="text"
                    className="idField"
                    value=""
                    label="아이디"
                    placeholder="이메일을 입력해주세요"
                  />
                </td>
                <button className="duplicationBtn">중복확인</button>
              </tr>
              <tr className="pwTable">
                <th>비밀번호</th>
                <td>
                  <input
                    type="password"
                    className="pwField"
                    label="비밀번호"
                    placeholder="비밀번호를 입력해주세요"
                  />
                </td>
              </tr>
              <tr className="pwCheckTable">
                <th>비밀번호확인</th>
                <td>
                  <input
                    type="password"
                    className="pwCheckField"
                    label="비밀번호 확인"
                    placeholder="비밀번호를 한번 더 입력해주세요"
                  />
                </td>
              </tr>
              <tr className="nameTable">
                <th>이름*</th>
                <td>
                  <input
                    type="text"
                    className="nameField"
                    label="이름"
                    placeholder="이름을 입력해주세요"
                  />
                </td>
              </tr>
              <tr className="phoneNumberTable">
                <th>휴대폰</th>
                <td>
                  <input
                    type="text"
                    className="phoneNumberField"
                    label="이름"
                    placeholder="숫자만 입력해주세요"
                  />
                </td>
              </tr>
              <tr className="birthTable">
                <th>생년월일</th>
                <td>
                  <input
                    type="text"
                    className="birthField"
                    label="생년월일"
                    placeholder="YY/MM/DD"
                  />
                </td>
              </tr>
              <tr className="tosTable">
                <th>이용약관동의</th>
                <td></td>
              </tr>
            </tbody>
          </table>
          <button className="joinBtn">가입하기</button>
        </form>
      </div>
    );
  }
}

export default Join;
