import React, { Component } from 'react';
import { Link, Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { AiOutlineRight } from 'react-icons/ai';
import '../../styles/common.scss';
import './Mypagearticle.scss';
import Myiteminfo from './Myiteminfo';
import Myalwayitem from './Myalwayitem';
import Myreview from './Myreview';
import Mydelivery from './Mydelivery';

export class Mypagearticle extends Component {
  constructor() {
    super();
    this.state = {
      item: [],
      wishItem: [],
      review: [],
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

  changecolor = e => {
    let i;
    console.log(this.state.color[e.target.value]);
    this.setState({
      color1: '',
    });
    for (i = 1; i < this.state.color.length; i++) {
      e.target.value != i
        ? (this.state.color[i] = false)
        : (this.state.color[e.target.value] = !this.state.color[
            e.target.value
          ]);
    }
    console.log(e.target.value);
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
                  <li
                    className={this.state.color[1] ? 'clickChange' : false}
                    onClick={this.changecolor}
                    value="1"
                  >
                    <div>주문 내역</div>
                    <div>
                      <AiOutlineRight />
                    </div>
                  </li>
                </Link>
                <Link to="/Myalwayitem">
                  <li
                    className={this.state.color[2] ? 'clickChange' : false}
                    onClick={this.changecolor}
                    value="2"
                  >
                    <div>늘 사는 것</div>
                    <div>
                      <AiOutlineRight />
                    </div>
                  </li>
                </Link>
                <Link to="/Mydelivery">
                  <li>
                    <div
                      className={this.state.color[3] ? 'reclickChanged' : false}
                      onClick={this.changecolor}
                      value="3"
                    >
                      배송지 관리
                    </div>
                    <div>
                      <AiOutlineRight />
                    </div>
                  </li>
                </Link>
                <Link to="/Myreview">
                  <li>
                    <div
                      className={this.state.color[4] ? 'reclickChanged' : false}
                      onClick={this.changecolor}
                      value="4"
                    >
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
                  render={() => <Myreview review={this.state.review} />}
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
