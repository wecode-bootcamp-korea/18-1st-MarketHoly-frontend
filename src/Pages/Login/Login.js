import React, { Component } from 'react';
import './Login.scss';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      idField: '',
      pwField: '',
    };
  }

  render() {
    return (
      <div className="loginForm">
        <h3>로그인</h3>
        <form>
          <input
            type="text"
            className="idField"
            placeholder="이메일을 입력해주세요"
          />
          <input
            type="password"
            className="pwField"
            placeholder="비밀번호를 입력해주세요"
          />
          <div className="loginCheck">
            <label className="saveCheckBox">
              <input className="securityConnect" type="checkbox" />
              보안접속
            </label>
            <div className="findLogin">
              <a href="/#" className="findId">
                아이디 찾기
              </a>
              <span className="bar"> | </span>
              <a href="/#" className="findPwd">
                비밀번호 찾기
              </a>
            </div>
          </div>
          <button type="submit" className="loginBtn" onClick={this.goToMain}>
            로그인
          </button>
          <button className="joinBtn" onClick={this.goToMain}>
            회원가입
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
