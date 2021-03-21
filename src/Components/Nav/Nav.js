import React from 'react';
import { Link } from 'react-router-dom';
import { CgSearch } from 'react-icons/cg';
import { FiMenu, FiShoppingCart } from 'react-icons/fi';
import { MdCancel } from 'react-icons/md';
import NavBanner from './NavBanner';
import NavBarHoverList from './NavBarHoverList';
import './Nav.scss';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.searchInputRef = React.createRef();
    this.HOVER_WIDTH_TYPE1 = 220;
    this.HOVER_WIDTH_TYPE2 = 450;
  }

  state = {
    search: '',
    allCategoriesHover: false,
    hoverWidth: this.HOVER_WIDTH_TYPE1,
    navbarList: [],
    displayShowIndex: 0,
    toggleSearchInput: false,
  };

  componentDidMount() {
    // fetch('/data/productNavbar.json', {})
    const categoryUrl = `product/category`;
    fetch(categoryUrl, {})
      .then(res => res.json())
      .then(res => {
        console.log(res.result);
        this.setState({ navbarList: res.result });
      });
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
      hoverWidth: this.HOVER_WIDTH_TYPE1,
    });
  };
  allCategoriesHoverLeave = () => {
    this.setState({
      allCategoriesHover: false,
      hoverWidth: this.HOVER_WIDTH_TYPE1,
      displayShowIndex: 0,
    });
  };
  categoriesMenuHoverEnter = index => {
    this.setState({
      hoverWidth: this.HOVER_WIDTH_TYPE2,
      displayShowIndex: index,
    });
  };

  resetInputValue = () => {
    this.setState({
      toggleSearchInput: !this.state.toggleSearchInput,
    });
    this.searchInputRef.current.value = '';
  };

  render() {
    const { allCategoriesHover, hoverWidth, displayShowIndex, navbarList, toggleSearchInput } = this.state;
    console.log(navbarList);
    return (
      <div className="navbar" onMouseHover={this.allCategoriesHoverLeave}>
        <div className="user-menu">
          <NavBanner />
          <div className="user-list-menu">
            <div className="list-join menu-list">
              <Link to="#" className="join-link">
                회원가입
              </Link>
            </div>
            <div className="list-login menu-list">
              <Link to="#" className="login-link">
                &nbsp;로그인
              </Link>
            </div>
          </div>
        </div>
        <div className="navbar-logo">
          <Link to="#" className="logo-link">
            <img src="images/navlogo.png" alt="마켓홀리 로고" />
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
                <Link to="#">
                  <span className="menu-text">신상품</span>
                </Link>
              </li>
              <li className="menu3">
                <Link to="#">
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

export default Nav;
