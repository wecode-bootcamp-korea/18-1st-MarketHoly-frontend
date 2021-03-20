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
    const { item } = this.props;
    console.log(item);
    return (
      <>
        <div className="sectionHeader">
          <div className="headerName">
            <h1>주문 내역</h1>
            <div className="headerInfo">
              지난 3년간의 주문 내역 조회가 가능합니다.
            </div>
          </div>
          <div className="select">{MyComponent()}</div>
        </div>
        {this.props.item.map(e => {
          return (
            <div className="item">
              <div className="date">
                {e.date} ({e.time})
              </div>
              <div className="itemInfo">
                <header>
                  <div>{e.name}</div>
                  <div className="infoIcon">
                    <AiOutlineRight />
                  </div>
                </header>
                <section>
                  <div className="itemleft">
                    <img src={e.img} />
                    <div className="orderInfo">
                      <div className="orderNumber">
                        주문번호 <span>{e.ordernumber}</span>
                      </div>
                      <div className="price">
                        결제금액 <span>{e.price}</span>
                      </div>
                      <div className="status">
                        주문상태 <a>{e.status}</a>
                      </div>
                    </div>
                  </div>
                  <div className="itemCall">1:1문의</div>
                </section>
              </div>
            </div>
          );
        })}
      </>
    );
  }
}

export default Myiteminfo;
