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
        extraAddress +=
          extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
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
    idCheck.test(this.state.email)
      ? this.setState({ isIdValid: false })
      : this.setState({ isIdValid: true });
  };
  handlePwCheck = () => {
    this.state.password.length >= 10
      ? this.setState({ isPwValid: false })
      : this.setState({ isPwValid: true });
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
          alert('회원가입 완료');
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
    const { isDaumPost, fullAddress, zoneCode } = this.state;

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
                  <input
                    type="text"
                    className="idField"
                    name="email"
                    label="이메일"
                    placeholder="이메일을 입력해주세요"
                    onChange={this.handleOnChange}
                  />
                  <button className="duplicationBtn">중복확인</button>
                  {this.state.isIdValid && (
                    <p className="warningText">
                      이메일 형식이 올바르지 않습니다.
                    </p>
                  )}
                </td>
              </tr>
              <tr className="pwTable">
                <th>
                  비밀번호<span className="essential">*</span>
                </th>
                <td>
                  <input
                    type="password"
                    className="pwField"
                    name="password"
                    label="비밀번호"
                    placeholder="비밀번호를 입력해주세요"
                    onChange={this.handleOnChange}
                  />
                  {this.state.isPwValid && (
                    <p className="warningText">
                      비밀번호를 10자 이상 입력해주세요
                    </p>
                  )}
                </td>
              </tr>
              <tr className="pwCheckTable">
                <th>
                  비밀번호확인<span className="essential">*</span>
                </th>
                <td>
                  <input
                    type="password"
                    className="pwCheckField"
                    name="passwordCheck"
                    label="비밀번호 확인"
                    placeholder="비밀번호를 한번 더 입력해주세요"
                    onChange={this.handleOnChange}
                  />
                </td>
              </tr>
              <tr className="nameTable">
                <th>
                  이름<span className="essential">*</span>
                </th>
                <td>
                  <input
                    type="text"
                    className="nameField"
                    name="name"
                    label="이름"
                    placeholder="이름을 입력해주세요"
                    onChange={this.handleOnChange}
                  />
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
                      <input
                        className="inputAddress"
                        name="zipCode"
                        placeholder="우편번호"
                        type="text"
                        value={zoneCode}
                      />
                      <input
                        type="button"
                        className="inputAddressButton"
                        onClick={this.handleOpenPost}
                        value="주소 검색"
                      />
                    </div>
                    <div className="textFieldAddressBottom">
                      <div>
                        <input
                          className="inputAddressBottom"
                          name="address"
                          placeholder="주소"
                          type="text"
                          value={fullAddress}
                        />
                      </div>
                      <div className="addressDetail">
                        <input
                          type="text"
                          className="inputAddressBottom"
                          name="detailAddress"
                          placeholder="상세주소"
                          onChange={this.handleOnChange}
                        />
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
                    <p className="subHeading">제1조</p>
                    (목적) 이 약관은 마켓홀리가 운영하는 사이트에서 제공하는
                    인터넷 관련 서비스(이하 "서비스"라 한다)를 이용함에 있어
                    마켓홀리와 이용자의 권리/의무 및 책임사항을 규정함을
                    목적으로 합니다.
                    <br />
                    <br />
                    <p className="subHeading">제2조</p>
                    (용어정의) ① "마켓홀리" : 문서/서식 및 관련 컨텐츠를
                    서비스를 목록으로 하는 서식/양식 전문 포탈 사이트입니다. ②
                    "이용자"란 "마켓홀리"에 접속하여 이 약관에 따라 "마켓홀리"이
                    제공하는 서비스를 받는 회원 및 비회원을 말합니다. ③
                    "회원"이라 함은 "마켓홀리"에 개인정보를 제공하여 회원등록을
                    한 자로서, "마켓홀리"의 정보를 지속적으로 제공받으며,
                    "마켓홀리"이 제공하는 서비스를 계속적으로 이용할 수 있는
                    자를 말합니다. ④ "비회원"이라 함은 회원에 가입하지
                    않고마켓홀리"이 제공하는 서비스를 이용하는 자를 말합니다.
                    <br />
                    <br />
                    <p className="subHeading">제3조</p>
                    (약관 등의 명시와 설명 및 개정) ① "마켓홀리"는 이 약관의
                    내용과 상호 및 대표자 성명, 영업소 소재지 주소(소비자의
                    불만을 처리할 수 있는 곳의 주소를 포함), 전화번호,
                    모사전송번호, 전자우편주소, 사업자등록번호,
                    통신판매업신고번호, 개인정보관리책임자 등을 이용자가 쉽게 알
                    수 있도록 마켓홀리의 초기 서비스화면(전면)에 게시합니다.
                    다만, 약관의 내용은 이용자가 연결화면을 통하여 볼 수 있도록
                    할 수 있습니다. ② "마켓홀리"는 이용자가 약관에 동의하기에
                    앞서 약관에 정하여져 있는 내용 중 청약철회,배송책임,
                    환불조건 등과 같은 중요한 내용을 이용자가 이해할 수 있도록
                    별도의 연결 화면 또는 팝업화면 등을 제공하여 이용자의 확인을
                    구하여야 합니다. ③ "마켓홀리"는 전자상거래 등에서
                    소비자보호에 관한 법률, 약관의 규제에 관한 법률,
                    전자거래기본법, 전자서명법, 정보통신망 이용촉진 등에 관한
                    법률, 방문판매 등에 관한 법률, 소비자보호법 등 관련법을
                    위배하지 않는 범위에서 이 약관을 개정할 수 있습니다. ④
                    "마켓홀리"가 약관을 개정할 경우에는 적용일자 및 개정사유를
                    명시하여 현행약관과 함께 마켓홀리의 초기화면에 그 적용일자
                    7일 이전부터 적용일자 전일까지 공지합니다. 다만, 이용자에게
                    불리하게 약관내용을 변경하는 경우에는 최소한 30일 이상의
                    사전 유예기간을 두고 공지합니다. 이 경우 "마켓홀리"은 개정
                    전 내용과 개정 후 내용을 명확하게 비교하여 이용자가 알기
                    쉽도록 표시합니다. ⑤ "마켓홀리"이 약관을 개정할 경우에는 그
                    개정약관은 그 적용일자 이후에 체결되는 계약에만 적용되고 그
                    이전에 이미 체결된 계약에 대해서는 개정 전의 약관조항이
                    그대로 적용됩니다. 다만 이미 계약을 체결한 이용자가 개정약관
                    조항의 적용을 받기를 원하는 뜻을 제3항에 의한 개정약관의
                    공지기간 내에 "마켓홀리"에 송신하여 "마켓홀리"의 동의를 받은
                    경우 에는 개정약관 조항이 적용됩니다. ⑥ 이 약관에서 정하지
                    아니한 사항과 이 약관의 해석에 관하여는
                    전자상거래등에서의소비자보호에관한법률,
                    약관의규제등에관한법률, 공정거래위원회가 정하는 전자상거래
                    등에서의소비자보호지침 및 관계법령 또는 상관례에 따릅니다.
                  </div>
                  <div>
                    <input
                      className="agreeCheckBox"
                      type="checkbox"
                      onChange={this.handleOnChange}
                    />
                    <span className="necessaryText">(필수)</span> 동의합니다.
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <button
            className="SignUpBtn"
            type="submit"
            onClick={this.signUpSummit}
          >
            가입하기
          </button>

          {isDaumPost ? (
            <DaumPostcode
              onComplete={this.handleAddress}
              autoClose
              width={width}
              height={height}
              style={modalStyle}
              isDaumPost={isDaumPost}
            />
          ) : null}
        </form>
      </div>
    );
  }
}

export default SignUp;
