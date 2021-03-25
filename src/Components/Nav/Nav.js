import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { CgSearch } from 'react-icons/cg';
import { FiMenu, FiShoppingCart } from 'react-icons/fi';
import { MdCancel } from 'react-icons/md';
import { GoTriangleDown } from 'react-icons/go';
import NavBanner from './NavBanner';
import NavBarHoverList from './NavBarHoverList';
import './Nav.scss';

const HOVER_WIDTH_TYPE1 = 220;
const HOVER_WIDTH_TYPE2 = 450;

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.searchInputRef = React.createRef();
  }

  state = {
    search: '',
    allCategoriesHover: false,
    hoverWidth: HOVER_WIDTH_TYPE1,
    navbarList: [],
    displayShowIndex: 0,
    toggleSearchInput: false,
    isNavFixed: false,
    isLoginHover: false,
    isLogin: false,
    userInfo: {},
  };

  componentDidMount() {
    fetch('/product/category', {})
      .then(res => res.json())
      .then(res => {
        this.setState({ navbarList: res.result });
      });
    this.fetchNavUser();
    window.addEventListener('scroll', this.onScrollGet);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.location !== this.props.location && this.state.userInfo) {
      console.log('여기 실행');
      this.fetchNavUser();
    }
  }

  fetchNavUser = () => {
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

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScrollGet);
  }

  handleChange = e => {
    this.setState(
      {
        [e.target.name]: e.target.value,
      },
      () => {
        if (this.state.search) {
          this.setState({
            toggleSearchInput: true,
          });
        } else {
          this.setState({
            toggleSearchInput: false,
          });
        }
      }
    );
  };

  handleSubmitSearch = e => {
    e.preventDefault();
  };

  allCategoriesHoverEnter = () => {
    this.setState({
      allCategoriesHover: true,
      hoverWidth: HOVER_WIDTH_TYPE1,
    });
  };
  allCategoriesHoverLeave = () => {
    this.setState({
      allCategoriesHover: false,
      hoverWidth: HOVER_WIDTH_TYPE1,
      displayShowIndex: 0,
    });
  };
  categoriesMenuHoverEnter = index => {
    this.setState({
      hoverWidth: HOVER_WIDTH_TYPE2,
      displayShowIndex: index,
    });
  };

  resetInputValue = () => {
    this.setState({
      toggleSearchInput: !this.state.toggleSearchInput,
    });
    this.searchInputRef.current.value = '';
  };

  loginMenuHover = () => {
    this.setState({ isLoginHover: !this.state.isLoginHover });
  };

  onScrollGet = () => {
    if (window.scrollY > 105) {
      if (this.state.isNavFixed === false) {
        this.setState({ isNavFixed: true });
      }
    }
    if (window.scrollY < 104) {
      if (this.state.isNavFixed === true) {
        this.setState({ isNavFixed: false });
      }
    }
  };

  render() {
    const { allCategoriesHover, hoverWidth, displayShowIndex, navbarList, toggleSearchInput, isNavFixed, userInfo, isLoginHover } = this.state;
    return (
      <div className={'navbar ' + (isNavFixed && 'navbarFixed')} onMouseHover={this.allCategoriesHoverLeave} onScroll={this.onScrollGet}>
        <div className="user-menu">
          <NavBanner />
          {Object.keys(userInfo).length === 0 ? (
            <div className="user-list-menu">
              <div className="list-join menu-list">
                <Link to="/Signup" className="join-link">
                  회원가입
                </Link>
              </div>
              <div className="list-login menu-list">
                <Link to="/Login" className="login-link">
                  &nbsp;로그인
                </Link>
              </div>
            </div>
          ) : (
            <li className="userLoginMenu" onMouseEnter={this.loginMenuHover} onMouseLeave={this.loginMenuHover}>
              <Link to="/mypage" className="use">
                <span className="ico_grade grade6">웰컴</span>
                <span className="txt">
                  <span className="name">{userInfo.name}</span>
                  <span className="sir">님</span>
                  <GoTriangleDown />
                </span>
              </Link>
              <ul className="sub" style={{ display: isLoginHover ? 'flex' : 'none' }}>
                <li>
                  <Link to="">주문 내역</Link>
                </li>
                <li>
                  <Link to="">배송지 관리</Link>
                </li>
                <li>
                  <Link to="">늘 사는 것</Link>
                </li>
                <li>
                  <Link to="">상품 후기</Link>
                </li>
                <li>
                  <Link to="">적립금</Link>
                </li>
                <li>
                  <Link to="">쿠폰</Link>
                </li>
                <li>
                  <Link to="">개인 정보 수정</Link>
                </li>
                <li>
                  <Link to="">로그아웃</Link>
                </li>
              </ul>
            </li>
          )}
        </div>
        <div className="navbar-logo">
          <Link to="/" className="logo-link">
            <img src="/images/navlogo.png" alt="마켓홀리 로고" />
          </Link>
        </div>
        <div className="navbar-menu">
          <div className="menu-main">
            <ul className="menu-main-list">
              <li className="menu1" onMouseEnter={this.allCategoriesHoverEnter}>
                <Link to="#" className="menu1-link">
                  <FiMenu className="menu1-icon" />
                  <span className="menu-text">전체 카테고리</span>
                </Link>
              </li>
              <li className="menu2">
                <Link
                  to={{
                    pathname: `/product`,
                    state: {
                      checkMenu: 'new',
                    },
                  }}
                >
                  <span className="menu-text">신상품</span>
                </Link>
              </li>
              <li className="menu3">
                <Link
                  to={{
                    pathname: `/product`,
                    state: {
                      checkMenu: 'best',
                    },
                  }}
                >
                  <span className="menu-text">베스트</span>
                </Link>
              </li>
              <li className="menu4">
                <Link to="#">
                  <span className="menu-text">알뜰쇼핑</span>
                </Link>
              </li>
              <li className="menu5">
                <Link to="#">
                  <span className="menu-text">금주혜택</span>
                </Link>
              </li>
            </ul>
            <div className="side-search">
              <form className="side-search-box" onSubmit={this.handleSubmitSearch}>
                <input type="text" className="search-input" name="search" onChange={this.handleChange} ref={this.searchInputRef} />
                {toggleSearchInput && (
                  <button className="search-btn-cancel" onClick={this.resetInputValue}>
                    <MdCancel className="search-btn-icon" />
                  </button>
                )}
                <button className="search-btn" type="submit">
                  <CgSearch className="search-btn-icon" />
                </button>
              </form>
            </div>
            <div className="cart-count">
              <div className="cart-count-link">
                <FiShoppingCart className="cart-count-icon" />
              </div>
            </div>
          </div>
          <div className="menu-hover-box" style={allCategoriesHover ? { display: 'flex', width: `${hoverWidth}px` } : { display: 'none' }} onMouseLeave={this.allCategoriesHoverLeave}>
            <div className="menu-hover">
              <ul className="menu-hover-list">
                {navbarList.map((list, index) => (
                  <NavBarHoverList displayShowIndex={displayShowIndex} list={list} index={index + 1} key={index} categoriesMenuHoverEnter={this.categoriesMenuHoverEnter} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Nav);
