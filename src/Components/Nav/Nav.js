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
    userInfo: {},
  };

  componentDidMount() {
    fetch('/product/category', {})
      .then(res => res.json())
      .then(res => {
        this.setState({ navbarList: res.result, isLoginHover: false });
      });
    this.fetchNavUser();
    window.addEventListener('scroll', this.onScrollGet);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.location !== this.props.location && this.state.userInfo) {
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
        if (res.message === 'INVALID_TOKEN_TYPE') {
          this.setState({ userInfo: {}, isLoginHover: false });
        } else {
          this.setState({ userInfo: res, isLoginHover: false });
        }
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

  handleLogout = () => {
    localStorage.removeItem('token');
    alert('???????????? ???????????????.');
  };

  render() {
    const { allCategoriesHover, hoverWidth, displayShowIndex, navbarList, toggleSearchInput, isNavFixed, userInfo, isLoginHover } = this.state;
    return (
      <div className={'navbarContainer'}>
        <div className={'navbar ' + (isNavFixed && 'navbarFixed')} onMouseHover={this.allCategoriesHoverLeave} onScroll={this.onScrollGet}>
          <div className="user-menu">
            <NavBanner />
            {Object.keys(userInfo).length === 0 ? (
              <div className="user-list-menu">
                <div className="list-join menu-list">
                  <Link to="/Signup" className="join-link">
                    ????????????
                  </Link>
                </div>
                <div className="list-login menu-list">
                  <Link to="/Login" className="login-link">
                    &nbsp;?????????
                  </Link>
                </div>
              </div>
            ) : (
              <li className="userLoginMenu" onMouseEnter={this.loginMenuHover} onMouseLeave={this.loginMenuHover}>
                <Link to="/mypage" className="use">
                  <span className="ico_grade grade6">??????</span>
                  <span className="txt">
                    <span className="name">{userInfo.name}</span>
                    <span className="sir">???</span>
                    <GoTriangleDown />
                  </span>
                </Link>
                <ul className="sub" style={{ display: isLoginHover ? 'flex' : 'none' }}>
                  <li>
                    <Link to="">?????? ??????</Link>
                  </li>
                  <li>
                    <Link to="">????????? ??????</Link>
                  </li>
                  <li>
                    <Link to="">??? ?????? ???</Link>
                  </li>
                  <li>
                    <Link to="">?????? ??????</Link>
                  </li>
                  <li>
                    <Link to="">?????????</Link>
                  </li>
                  <li>
                    <Link to="">??????</Link>
                  </li>
                  <li>
                    <Link to="">?????? ?????? ??????</Link>
                  </li>
                  <li>
                    <Link to="/" onClick={this.handleLogout}>
                      ????????????
                    </Link>
                  </li>
                </ul>
              </li>
            )}
          </div>
          <div className="navbar-logo">
            <Link to="/" className="logo-link">
              <img src="/images/navlogo.png" alt="???????????? ??????" />
            </Link>
          </div>
          <div className="navbar-menu">
            <div className="menu-main">
              <ul className="menu-main-list">
                <li className="menu1" onMouseEnter={this.allCategoriesHoverEnter}>
                  <div className="menu1-link">
                    <FiMenu className="menu1-icon" />
                    <span className="menu-text">?????? ????????????</span>
                  </div>
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
                    <span className="menu-text">?????????</span>
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
                    <span className="menu-text">?????????</span>
                  </Link>
                </li>
                <li className="menu4">
                  <Link to="#">
                    <span className="menu-text">????????????</span>
                  </Link>
                </li>
                <li className="menu5">
                  <Link to="#">
                    <span className="menu-text">????????????</span>
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
                <Link to="/Cart" className="cart-count-link">
                  <FiShoppingCart className="cart-count-icon" />
                </Link>
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
      </div>
    );
  }
}

export default withRouter(Nav);
