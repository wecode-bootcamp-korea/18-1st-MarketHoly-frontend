import React, { Component } from 'react';
import './Donereview.scss';

export class Donereview extends Component {
  render() {
    return (
      <>
        {this.props.reviewDone.map(e => (
          <div className="doneReviewBox" key={e.id}>
            <div className="doneItemname">{e.item}</div>
            <header className="doneHeader">
              <div className="doneTittle">{e.title} </div>
              <div className="doneDate">{e.create_at} </div>
            </header>
            <div className="doneComment">{e.content} </div>
            <div className="doneButton">
              <div className="doneChange">수정</div>
              <div className="doneDelete">삭제하기</div>
            </div>
          </div>
        ))}
      </>
    );
  }
}

export default Donereview;
