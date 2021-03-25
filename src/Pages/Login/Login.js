import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Login.scss';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      pushCheck: 'basepush',
    };
  }

  handleOnChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  componentDidMount() {
    if (this.props.location.state) {
      this.setState({
        pushCheck: this.props.location.state ? this.props.location.state.checkSend : 'basepush',
      });
    }
  }

  loginSubmit = e => {
    e.preventDefault(); //Submit 버튼 눌러도 새로고침하지 않게 함
    const idCheck = /^[A-Za-z0-9][A-Za-z0-9._-]+[@]{1}[a-z]+[.]{1}[a-z]{1,4}$/;

    console.log(this.props);
    console.log(this);

    if (idCheck.test(this.state.email) && this.state.password.length >= 10) {
      const summonerUrl = `user/login`;
      fetch(summonerUrl, {
        //fetch url -> config.json으로 분리 필요
        method: 'POST',
        body: JSON.stringify({
          email: this.state.email,
          password: this.state.password,
        }),
      })
        .then(res => res.json())
        .then(result => {
          console.log(result);
          if (result.message === 'SUCCESS') {
            localStorage.setItem('token', result.access_token);
            alert('로그인 완료');
            this.state.pushCheck === 'signup' ? this.props.history.push('/') : this.props.history.goBack();
          } else {
            alert('로그인 실패');
          }
        });
    } else {
      alert('이메일과 비밀번호가 유효하지 않습니다.');
    }
  };

  render() {
    return (
      <>
        <div className="loginForm">
          <h3>로그인</h3>
          <form>
            <input type="text" className="idField" name="email" placeholder="이메일을 입력해주세요" onChange={this.handleOnChange} />
            <input type="password" className="pwField" name="password" placeholder="비밀번호를 입력해주세요" onChange={this.handleOnChange} />
            <div className="loginCheck">
              <label className="saveCheckBox">
                <input className="securityConnect" type="checkbox" />
                보안접속
              </label>
            </div>
            <button type="submit" className="loginBtn" onClick={this.loginSubmit}>
              로그인
            </button>
            <button className="joinBtn">회원가입 </button>
          </form>
        </div>
      </>
    );
  }
}

export default withRouter(Login);
