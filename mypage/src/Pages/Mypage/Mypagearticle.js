import React, { Component } from 'react';
import { Link, Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Select from 'react-select';
import { AiOutlineRight } from 'react-icons/ai';
import './Mypagearticle.scss';
import Myiteminfo from './Myiteminfo';
import Myalwayitem from './Myalwayitem';

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
      wishItem: [],
    };
  }

  componentDidMount() {
    fetch('/data/productinfo1.json')
      .then(res => res.json())
      .then(res => {
        this.setState({
          item: res,
        });
      });

    fetch('/data/wishdata.json')
      .then(res => res.json())
      .then(res => {
        this.setState({
          wishItem: res,
        });
      });
  }

  removeWhish = () => {
    this.setState({
      wishItem: [],
    });
  };

  removeWhishitem = e => {
    console.log(e.target.value);
    this.setState({
      wishItem: this.state.wishItem.filter(item => e.target.value != item.id),
    });
  };

  render() {
    return (
      <Router>
        <article className="myArticle">
          <div className="article">
            <nav className="navBar">
              <div className="myHoly">
                <a>마이홀리</a>
              </div>
              <ul>
                <Link to="/">
                  <li onClick={this.changecolor}>
                    <div>주문 내역</div>
                    <AiOutlineRight />
                  </li>
                </Link>
                <Link to="/Myalwayitem">
                  <li>
                    <div>늘 사는 것</div> <AiOutlineRight />
                  </li>
                </Link>
                <li>
                  <div>배송지 관리</div> <AiOutlineRight />
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
            </nav>
            <section className="pageSection">
              <Switch>
                <Route
                  exact
                  path="/"
                  render={() => <Myiteminfo item={this.state.item} />}
                />
                <Route
                  exact
                  path="/Myalwayitem"
                  render={() => (
                    <Myalwayitem
                      wishItem={this.state.wishItem}
                      removeWhish={this.removeWhish}
                      removeWhishitem={this.removeWhishitem}
                    />
                  )}
                />
              </Switch>
            </section>
          </div>
        </article>
      </Router>
    );
  }
}

export default Mypagearticle;
