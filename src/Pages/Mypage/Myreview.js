import React, { Component } from 'react';
import { Link, Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Nonereview from './Nonereview';
import Donereview from './Donereview';
import './Myreview.scss';

export class Myreview extends Component {
  render() {
    return (
      <>
        <Router>
          <div className="headerName">
            <h1>상품 후기</h1>
            <div className="headerInfo">
              <p className="strong">
                후기 작성 시 사진후기 100원, 글후기 50원을 적립해드립니다.
              </p>
              <p>-퍼플, 더퍼플은 2배 적립(사진 200원,글 100원)</p>
              <p>-주간 베스트 후기로 선정 시 5,000만원 추가 적립</p>
              <p>* 후기 작성은 배송 완료일로부터 30일 이내 가능합니다.</p>
            </div>
          </div>
          <div className="reviewBox">
            <Link to="/Myreview">
              <div className="noneReview">작성가능 후기</div>
            </Link>
            <Link to="/done">
              <div className="doneReview">작성완료 후기</div>
            </Link>
          </div>
          <Switch>
            <Route
              exact
              path="/Myreview"
              render={() => <Nonereview review={this.props.review} />}
            />
            <Route
              exact
              path="/done"
              render={() => <Donereview reviewDone={this.props.reviewDone} />}
            />
          </Switch>
        </Router>
      </>
    );
  }
}

export default Myreview;
