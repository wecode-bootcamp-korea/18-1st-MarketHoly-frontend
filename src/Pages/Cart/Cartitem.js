import React, { Component } from 'react';
import { RiAddFill } from 'react-icons/ri';
import { GrSubtract } from 'react-icons/gr';
import { AiOutlineCheckCircle } from 'react-icons/ai';

export class Cartitem extends Component {
  constructor() {
    super();
    this.state = {
      count: 1,
    };
  }

  handleCnts = (num, e, id) => {
    const { count } = this.state;
    if (num === -1 && count === 1) return;
    this.setState({ count: count + num });
    this.props.countTotalPrice(e * (count + num - 1), id);
  };

  render() {
    const { name, img, isCheck, price, id } = this.props;

    return (
      <>
        <div className="cartItemList">
          <div className="btnCartLeft">
            <AiOutlineCheckCircle className={isCheck ? 'checked' : 'unchecked'} />
          </div>
          <div>
            <img src={img} />
          </div>
          <div className="cartItemName2">{name}</div>
          <div className="dhcountNumber">
            <button className="subtract" name="subtract" onClick={() => this.handleCnts(-1, price, id)} value={this.state.count}>
              <GrSubtract />
            </button>
            <input readonly="readonly" value={this.state.count} />
            <button className="add" name="add" onClick={() => this.handleCnts(1, price, id)} value={this.state.count}>
              <RiAddFill />
            </button>
          </div>
          <div className="cartListPrice">{price * this.state.count}원</div>
          <button className="cartDeleteBtn" onClick={this.props.deleteCartItem} value={id}>
            ❌
          </button>
        </div>
      </>
    );
  }
}

export default Cartitem;
