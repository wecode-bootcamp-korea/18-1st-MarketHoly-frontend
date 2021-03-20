import React, { Component } from 'react';
import Select from 'react-select';
import { AiOutlineRight } from 'react-icons/ai';
import './Myiteminfo.scss';

const options = [
  { value: '전체기간', label: '전체기간' },
  { value: '2021년', label: '2021년' },
  { value: '2020년', label: '2020년' },
  { value: '2019년', label: '2019년' },
];

const MyComponent = () => <Select options={options} />;

export class Myiteminfo extends Component {
  render() {
    const { img, name, price, date, time, ordernumber, status } = this.props;
    return (
      <>
        <div className="item">
          <div className="date">
            {date} ({time})
          </div>
          <div className="itemInfo">
            <header>
              <div>{name}</div>
              <div className="infoIcon">
                <AiOutlineRight />
              </div>
            </header>
            <section>
              <div className="itemleft">
                <img src={img} />
                <div className="orderInfo">
                  <div className="orderNumber">
                    주문번호 <span>{ordernumber}</span>
                  </div>
                  <div className="price">
                    결제금액 <span>{price}</span>
                  </div>
                  <div className="status">
                    주문상태 <a>{status}</a>
                  </div>
                </div>
              </div>
              <div className="itemCall">1:1문의</div>
            </section>
          </div>
        </div>
      </>
    );
  }
}

export default Myiteminfo;
