import React, { Component, createRef } from 'react';
import DaumPostcode from 'react-daum-postcode';
import './SignUp.scss';

const idCheck = /^[A-Za-z0-9][A-Za-z0-9._-]+[@]{1}[a-z]+[.]{1}[a-z]{2,4}$/;
const firstBirthCheck = /[0-9-]$/;
const birthCheck = /[0-9]{4}[-]{1}[0-9]{2}[-]{1}[0-9]{2}$/;
const phoneCheck = /[0-9]{1,11}$/;

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      passwordCheck: '',
      name: '',
      phoneNumber: '',
      birth: '',
      isIdValid: false,
      isPwValid: false,
      tos: [], //이용약관

      //Daumpost
      zoneCode: '', //우편번호
      fullAddress: '', //주소
      detailAddress: '', //상세주소
      isDaumPost: false,
      isRegister: false,
      register: [],
    };
    this.phoneRef = createRef();
    this.birthRef = createRef();
  }

  componentDidMount() {
    fetch('/data/signup.json')
      .then(res => res.json())
      .then(res => {
        console.log(res);
        this.setState({
          tos: res,
        });
      });
  }

  // Daumpostcode
  handleOpenPost = () => {
    this.setState({
      isDaumPost: true,
    });
  };
  handleAddress = data => {
    let AllAddress = data.address;
    let extraAddress = '';
    let zoneCodes = data.zonecode;

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      AllAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }
    this.setState({
      fullAddress: AllAddress,
      zoneCode: zoneCodes,
    });
  };

  // Check
  handleIdCheck = () => {
    this.setState({ isIdValid: idCheck.test(this.state.email) ? false : true });
  };
  handlePwCheck = () => {
    this.setState({ isPwValid: this.state.password.length >= 10 ? false : true });
  };
  handlePhoneCheck = () => {
    if (!phoneCheck.test(this.state.phoneNumber)) {
      this.phoneRef.current.value = '';
    }
  };
  handleBirthCheck = () => {
    if (!firstBirthCheck.test(this.state.birth)) {
      this.birthRef.current.value = '';
    }
  };

  // onChange
  handleOnChange = e => {
    this.setState(
      {
        [e.target.name]: e.target.value,
      },
      () => {
        if (e.target.name === 'email') {
          this.handleIdCheck();
          return;
        }
        if (e.target.name === 'password') {
          this.handlePwCheck();
          return;
        }
        if (e.target.name === 'phoneNumber') {
          this.handlePhoneCheck();
          return;
        }
        if (e.target.name === 'birth') {
          this.handleBirthCheck();
          return;
        }
      }
    );
  };

  // 백엔드 API 연결
  sendUserInfo = () => {
    fetch('http://10.58.1.200:8000/user/signup', {
      method: 'POST',
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        name: this.state.name,
        phone_number: this.state.phoneNumber,
        zip_code: this.state.zoneCode, //우편번호
        address: this.state.fullAddress, //주소
        detail_address: this.state.detailAddress, //상세주소
        date_of_birth: this.state.birth,
      }),
    })
      .then(res => res.json())
      .then(res => {
        if (parseInt(res.status) === 200) {
          alert('회원가입이 완료되었습니다.');
          this.props.history.push('../Main');
        } else {
          alert('회원가입 실패');
        }
      });
  };

  //signUp 버튼 클릭 시, alert
  signUpSummit = e => {
    e.preventDefault();
    if (this.state.email === '') {
      alert('이메일을 입력해주세요');
    } else if (this.state.password === '') {
      alert('비밀번호를 입력해주세요');
    } else if (!(this.state.password === this.state.passwordCheck)) {
      alert('비밀번호를 확인해주세요');
    } else if (this.state.name === '') {
      alert('이름을 입력해주세요');
    } else if (this.state.phoneNumber === '') {
      alert('휴대폰 번호를 입력해주세요');
    } else if (this.state.fullAddress === '') {
      alert('주소를 입력해주세요');
    } else if (!birthCheck.test(this.state.birth)) {
      alert('유효하지 않는 생년월일 입니다.');
    } else {
      this.sendUserInfo();
    }
  };

  render() {
    const { isDaumPost, fullAddress, zoneCode, tos } = this.state;
    // DaumPostCode style
    const width = 595;
    const height = 450;
    const modalStyle = {
      position: 'fixed',
      top: '80px',
      left: '320px',
      zIndex: '100',
      border: '1px solid #000000',
      overflow: 'hidden',
    };

    return (
      <div className="signUpForm">
        <h3>회원가입</h3>
        <p className="subText">
          <span className="essential">*</span>필수입력사항
        </p>
        <form>
          <table className="SignUpTable">
            <tbody>
              <tr className="emailTable">
                <th>
                  이메일<span className="essential">*</span>
                </th>
                <td>
                  <input type="text" className="idField" name="email" label="이메일" placeholder="이메일을 입력해주세요" onChange={this.handleOnChange} />
                  <button className="duplicationBtn">중복확인</button>
                  {this.state.isIdValid && <p className="warningText">이메일 형식이 올바르지 않습니다.</p>}
                </td>
              </tr>
              <tr className="pwTable">
                <th>
                  비밀번호<span className="essential">*</span>
                </th>
                <td>
                  <input type="password" className="pwField" name="password" label="비밀번호" placeholder="비밀번호를 입력해주세요" onChange={this.handleOnChange} />
                  {this.state.isPwValid && <p className="warningText">비밀번호를 10자 이상 입력해주세요</p>}
                </td>
              </tr>
              <tr className="pwCheckTable">
                <th>
                  비밀번호확인<span className="essential">*</span>
                </th>
                <td>
                  <input type="password" className="pwCheckField" name="passwordCheck" label="비밀번호 확인" placeholder="비밀번호를 한번 더 입력해주세요" onChange={this.handleOnChange} />
                </td>
              </tr>
              <tr className="nameTable">
                <th>
                  이름<span className="essential">*</span>
                </th>
                <td>
                  <input type="text" className="nameField" name="name" label="이름" placeholder="이름을 입력해주세요" onChange={this.handleOnChange} />
                </td>
              </tr>
              <tr className="phoneNumberTable">
                <th>
                  휴대폰<span className="essential">*</span>
                </th>
                <td>
                  <input
                    type="text"
                    className="phoneNumberField"
                    name="phoneNumber"
                    label="휴대폰"
                    maxlength="11"
                    placeholder="숫자만 입력해주세요"
                    onChange={this.handleOnChange}
                    ref={this.phoneRef}
                  />
                </td>
              </tr>
              <tr className="addressTable">
                <th>
                  주소<span className="essential">*</span>
                </th>
                <td>
                  <div className="textFieldAddress">
                    <div className="textFieldAddressTop">
                      <input className="inputAddress" name="zipCode" placeholder="우편번호" type="text" value={zoneCode} />
                      <input type="button" className="inputAddressButton" onClick={this.handleOpenPost} value="주소 검색" />
                    </div>
                    <div className="textFieldAddressBottom">
                      <div>
                        <input className="inputAddressBottom" name="address" placeholder="주소" type="text" value={fullAddress} />
                      </div>
                      <div className="addressDetail">
                        <input type="text" className="inputAddressBottom" name="detailAddress" placeholder="상세주소" onChange={this.handleOnChange} />
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr className="birthTable">
                <th>
                  생년월일<span className="essential">*</span>
                </th>
                <td>
                  <input
                    type="text"
                    className="birthField"
                    name="birth"
                    label="생년월일"
                    maxlength="10"
                    placeholder="YYYY-MM-DD 형식으로 입력해주세요"
                    onChange={this.handleOnChange}
                    ref={this.birthRef}
                  />
                </td>
              </tr>
              <tr className="tosTable">
                <th>
                  이용약관동의<span className="essential">*</span>
                </th>
                <td>
                  <div className="tosText">
                    <p className="subHeading">{tos[0]?.subHeading}</p>
                    {tos[0]?.contents}
                    <br />
                    <br />
                    <p className="subHeading">{tos[1]?.subHeading}</p>
                    {tos[1]?.contents}
                    <br />
                    <br />
                    <p className="subHeading">{tos[2]?.subHeading}</p>
                    {tos[2]?.contents}
                  </div>
                  <div>
                    <input className="agreeCheckBox" type="checkbox" onChange={this.handleOnChange} />
                    <span className="necessaryText">(필수)</span> 동의합니다.
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <button className="SignUpBtn" type="submit" onClick={this.signUpSummit}>
            가입하기
          </button>

          {isDaumPost && <DaumPostcode onComplete={this.handleAddress} autoClose width={width} height={height} style={modalStyle} isDaumPost={isDaumPost} />}
        </form>
      </div>
    );
  }
}

export default SignUp;
