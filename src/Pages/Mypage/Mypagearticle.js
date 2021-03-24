import React, { Component } from 'react';
import { Link, Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { AiOutlineRight } from 'react-icons/ai';
import Myiteminfo from './Myiteminfo';
import Myalwayitem from './Myalwayitem';
import Myreview from './Myreview';
import Mydelivery from './Mydelivery';
import '../../styles/common.scss';
import './Mypagearticle.scss';

export class Mypagearticle extends Component {
  constructor() {
    super();
    this.state = {
      item: [],
      wishItem: [],
      review: [],
      reviewDone: [],
      color: ['', true, false, false, false],
      color1: '1',
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

    fetch('/data/wishdata.json')
      .then(res => res.json())
      .then(res => {
        this.setState({
          wishItem: res,
        });
      });

    fetch('/data/review.json')
      .then(res => res.json())
      .then(res => {
        this.setState({
          review: res,
        });
      });

    fetch('/data/reviewdone.json')
      .then(res => res.json())
      .then(res => {
        this.setState({
          reviewDone: res,
        });
      });
  }

  removeWhish = () => {
    this.setState({
      wishItem: [],
    });
  };

  removeWhishitem = e => {
    this.setState({
      wishItem: this.state.wishItem.filter(item => e.target.value != item.id),
    });
  };

  changecolor = e => {
    const arr = this.state.color;
    let i;

    for (i = 1; i < this.state.color.length; i++) {
<<<<<<< HEAD
      e.target.value !== i
        ? (arr[i] = false)
        : (arr[e.target.value] = !arr[e.target.value]);
=======
      e.target.value !== i ? (arr[i] = false) : (arr[e.target.value] = !arr[e.target.value]);
>>>>>>> 8d5175f750bd3d00234d482fbd029072eb20f140
    }
    this.setState({
      color: arr,
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
<<<<<<< HEAD
                  <li
                    className={this.state.color[1] ? 'clickChange' : false}
                    onClick={this.changecolor}
                    value="1"
                  >
=======
                  <li className={this.state.color[1] ? 'clickChange' : false} onClick={this.changecolor} value="1">
>>>>>>> 8d5175f750bd3d00234d482fbd029072eb20f140
                    <div>주문 내역</div>
                    <div>
                      <AiOutlineRight />
                    </div>
                  </li>
                </Link>
                <Link to="/Myalwayitem">
<<<<<<< HEAD
                  <li
                    className={this.state.color[2] ? 'clickChange' : false}
                    onClick={this.changecolor}
                    value="2"
                  >
=======
                  <li className={this.state.color[2] ? 'clickChange' : false} onClick={this.changecolor} value="2">
>>>>>>> 8d5175f750bd3d00234d482fbd029072eb20f140
                    <div>늘 사는 것</div>
                    <div>
                      <AiOutlineRight />
                    </div>
                  </li>
                </Link>
                <Link to="/Mydelivery">
<<<<<<< HEAD
                  <li
                    className={this.state.color[3] ? 'clickChange' : false}
                    onClick={this.changecolor}
                    value="3"
                  >
=======
                  <li className={this.state.color[3] ? 'clickChange' : false} onClick={this.changecolor} value="3">
>>>>>>> 8d5175f750bd3d00234d482fbd029072eb20f140
                    <div>배송지 관리</div>
                    <div>
                      <AiOutlineRight />
                    </div>
                  </li>
                </Link>
                <Link to="/Myreview">
<<<<<<< HEAD
                  <li
                    className={this.state.color[4] ? 'clickChange' : false}
                    onClick={this.changecolor}
                    value="4"
                  >
=======
                  <li className={this.state.color[4] ? 'clickChange' : false} onClick={this.changecolor} value="4">
>>>>>>> 8d5175f750bd3d00234d482fbd029072eb20f140
                    <div>
                      <div>상품 후기</div>
                    </div>
                    <AiOutlineRight />
                  </li>
                </Link>
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
<<<<<<< HEAD
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
                <Route exact path="/Mydelivery" render={() => <Mydelivery />} />
                <Route
                  exact
                  path="/Myreview"
                  render={() => (
                    <Myreview
                      review={this.state.review}
                      reviewDone={this.state.reviewDone}
                    />
                  )}
                />
=======
                <Route exact path="/" render={() => <Myiteminfo item={this.state.item} />} />
                <Route exact path="/Myalwayitem" render={() => <Myalwayitem wishItem={this.state.wishItem} removeWhish={this.removeWhish} removeWhishitem={this.removeWhishitem} />} />
                <Route exact path="/Mydelivery" render={() => <Mydelivery />} />
                <Route exact path="/Myreview" render={() => <Myreview review={this.state.review} reviewDone={this.state.reviewDone} />} />
>>>>>>> 8d5175f750bd3d00234d482fbd029072eb20f140
              </Switch>
            </section>
          </div>
        </article>
      </Router>
    );
  }
}

export default Mypagearticle;
