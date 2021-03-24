import React, { Component } from 'react';

export class Nonereview extends Component {
  render() {
    const { review } = this.props;
    return (
      <>
        {review.map(e => (
          <div className="reviewItem">
            <div className="reviewItemLeft">
              <img src={e.img} />
              <div className="reviewItemName">
                <p className="strong">{e.name}</p>
                <p className="small">{e.count}개 구매</p>
              </div>
            </div>
            <div className="reviewWrite">후기쓰기</div>
          </div>
        ))}
      </>
    );
  }
}

export default Nonereview;
