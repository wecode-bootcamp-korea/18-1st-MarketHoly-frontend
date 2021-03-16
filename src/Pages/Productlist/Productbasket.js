import React, { Component } from 'react';
import './productbasket.scss';
import { RiAddFill } from 'react-icons/ri';
import { GrSubtract } from 'react-icons/gr';

export class Productbasket extends Component {
  render() {
    return (
      <>
        {this.props.productbasket ? (
          <div className="modalEffect">
            <div className="cartList">
              <div className="namePrice">
                <div className="listName">{this.props.name}</div>
                <div className="priceCount">
                  <div className="listPrice">{this.props.Price}</div>
                  <div className="countNumber">
                    <button className="subtract">
                      <GrSubtract />
                    </button>
                    <input readonly="readonly" value="1"></input>
                    <button className="add">
                      <RiAddFill />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </>
    );
  }
}

export default Productbasket;
