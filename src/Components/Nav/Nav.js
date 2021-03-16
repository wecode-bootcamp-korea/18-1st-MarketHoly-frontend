import React from 'react';
import { Link } from 'react-router-dom';
import NavBanner from './NavBanner';
import { CgSearch } from 'react-icons/cg';
import { FiMenu, FiShoppingCart } from 'react-icons/fi';
import { GiCarrot } from 'react-icons/gi';
import './Nav.scss';
import NavBarHoverList from './NavBarHoverList';

class Nav extends React.Component {
  state = {
    search: '',
    allCategoriesHover: false,
    hoverWidth: 220,
    navbarList: [],
    displayShowIndex: -1,
  };

  componentDidMount() {
    fetch('http://localhost:3000/data/productNavbar.json', {})
      .then(res => res.json())
      .then(res => {
        this.setState({ navbarList: res });
      });
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmitSearch = e => {
    e.preventDefault();
    console.log(this.state.search);
  };

  allCategoriesHoverOver = () => {
    this.setState({
      allCategoriesHover: true,
      hoverWidth: 220,
    });
  };
  allCategoriesHoverOut = () => {
    this.setState({
      allCategoriesHover: false,
      hoverWidth: 220,
      displayShowIndex: -1,
    });
  };

  categoriesMenuHoverOver = index => {
    console.log(index);
    this.setState({
      hoverWidth: 450,
      displayShowIndex: index,
    });
  };
  categoriesMenuHoverOut = () => {
    this.setState({
      hoverWidth: 220,
    });
  };

  render() {
    const { allCategoriesHover, hoverWidth, displayShowIndex, navbarList } = this.state;
    return (
      <div className="navbar">
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
              <li className="menu1" onMouseEnter={this.allCategoriesHoverOver}>
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
                <input type="text" className="search-input" name="search" onChange={this.handleChange} />
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
          <div className="menu-hover-box" style={allCategoriesHover ? { display: 'flex', width: `${hoverWidth}px` } : { display: 'none' }} onMouseLeave={this.allCategoriesHoverOut}>
            <div className="menu-hover">
              <ul className="menu-hover-list">
                {navbarList.map((list, index) => (
                  <NavBarHoverList displayShowIndex={displayShowIndex} list={list} index={index} key={index} categoriesMenuHoverOver={this.categoriesMenuHoverOver} />
                ))}
                {/*<li>*/}
                {/*  <Link to="#" id={2} className={'menu-hover-list-name ' + (parseInt(displayShowIndex) === 2 ? 'hover-on' : null)} onMouseEnter={this.categoriesMenuHoverOver}>*/}
                {/*    <span>*/}
                {/*      <GiCarrot className="list-icon" />*/}
                {/*    </span>*/}
                {/*    <span>&nbsp;햄버거</span>*/}
                {/*  </Link>*/}
                {/*  <ul className="menu-sub-list" style={parseInt(displayShowIndex) === 2 ? { display: 'none' } : { display: 'flex' }}>*/}
                {/*    <li>*/}
                {/*      <Link to="#" className="sub-list-link">*/}
                {/*        <span className="sub-list-name">햄버거 &#183; 치즈버거 &#183; 군대버거</span>*/}
                {/*      </Link>*/}
                {/*    </li>*/}
                {/*    <li>*/}
                {/*      <Link to="#" className="sub-list-link">*/}
                {/*        <span className="sub-list-name">불고기버거 &#183; 치킨버거 &#183; 똥버거</span>*/}
                {/*      </Link>*/}
                {/*    </li>*/}
                {/*    <li>*/}
                {/*      <Link to="#" className="sub-list-link">*/}
                {/*        <span className="sub-list-name">딸기에몽버거 &#183; 상하이버거&#183; 모짜렐라버거</span>*/}
                {/*      </Link>*/}
                {/*    </li>*/}
                {/*    <li>*/}
                {/*      <Link to="#" className="sub-list-link">*/}
                {/*        <span className="sub-list-name">바나나버거 &#183; 딸기버거&#183; 초코버</span>*/}
                {/*      </Link>*/}
                {/*    </li>*/}
                {/*  </ul>*/}
                {/*</li>*/}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;
