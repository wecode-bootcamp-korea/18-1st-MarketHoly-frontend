import React, { Component } from 'react';
import { Link, Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Select from 'react-select';
import { AiOutlineRight } from 'react-icons/ai';
import './Mypagearticle.scss';
import Myiteminfo from './Myiteminfo';
// import { Route } from 'react-router-dom';

const options = [
  { value: '전체기간', label: '전체기간' },
  { value: '2021년', label: '2021년' },
  { value: '2020년', label: '2020년' },
  { value: '2019년', label: '2019년' },
];

const MyComponent = () => <Select options={options} />;

export class Mypagearticle extends Component {
  constructor() {
    super();
    this.state = {
      item: [],
      mapItem: '',
    };
  }

  componentDidMount() {
    fetch('/data/productinfo.json')
      .then(res => res.json())
      .then(res => {
        this.setState({
          item: res,
        });
      });
  }

  render() {
    return (
      <article className="myArticle">
        <div className="article">
          <nav className="navBar">
            <div className="myHoly">
              <a>마이홀리</a>
            </div>
            <Router>
              <ul>
                <Link to="/">
                  <li>
                    <div>주문 내역</div> <AiOutlineRight />
                  </li>
                </Link>
                <li>
                  <div>배송지 관리</div> <AiOutlineRight />
                </li>
                <li>
                  <div>늘 사는 것</div> <AiOutlineRight />
                </li>
                <li>
                  <div>상품 후기</div>
                  <AiOutlineRight />
                </li>
                <li>
                  <div> 적립금</div>
                  <AiOutlineRight />
                </li>
                <li>
                  <div>쿠폰</div>
                  <AiOutlineRight />
                </li>
                <li>
                  <div>개인 정보 수정</div>
                  <AiOutlineRight />
                </li>
              </ul>
            </Router>
          </nav>
          <section className="pageSection">
            <div className="sectionHeader">
              <div className="headerName">
                <h1>주문 내역</h1>
                <div className="headerInfo">
                  지난 3년간의 주문 내역 조회가 가능합니다.
                </div>
              </div>
              <div className="select">{MyComponent()}</div>
            </div>
            {/* <Switch>
              <Route path="/" render={() => <Myiteminfo name={name} />} />
            </Switch> */}
            {this.state.item.map(item => {
              return (
                <Myiteminfo
                  img={item.img}
                  name={item.name}
                  price={item.price}
                  ordernumber={item.ordernumber}
                  status={item.status}
                  date={item.date}
                  time={item.time}
                />
              );
            })}
          </section>
        </div>
      </article>
    );
  }
}

export default Mypagearticle;
