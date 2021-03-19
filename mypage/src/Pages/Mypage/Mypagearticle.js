import React, { Component } from 'react';
import Select from 'react-select';
import { AiOutlineRight } from 'react-icons/ai';
import './Mypagearticle.scss';

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
  }

  render() {
    return (
      <article className="myArticle">
        <div className="article">
          <nav className="navBar">
            <div className="myHoly">
              <a>마이홀리</a>
            </div>
            <ul>
              <li>
                <div>주문 내역</div> <AiOutlineRight />
              </li>
              <li>
                <div>배송지 관리</div> <AiOutlineRight />
              </li>
              <li>
                <div>늘 사는 것</div> <AiOutlineRight />
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
            <div className="sectionHeader">
              <div className="headerName">
                <h1>주문 내역</h1>
                <div className="headerInfo">
                  지난 3년간의 주문 내역 조회가 가능합니다.
                </div>
              </div>
              <div className="select">{MyComponent()}</div>
            </div>
            {this.state.item.map(item => {
              return (
                <div className="item">
                  <div className="date">
                    {item.date} ({item.time})
                  </div>
                  <div className="itemInfo">
                    <header>
                      <div>{item.name}</div>
                      <div className="infoIcon">
                        <AiOutlineRight />
                      </div>
                    </header>
                    <section>
                      <div className="itemleft">
                        <img src={item.img} />
                        <div className="orderInfo">
                          <div className="orderNumber">
                            주문번호 <span>{item.ordernumber}</span>
                          </div>
                          <div className="price">
                            결제금액 <span>{item.price}</span>
                          </div>
                          <div className="status">
                            주문상태 <a>{item.status}</a>
                          </div>
                        </div>
                      </div>
                      <div className="itemCall">1:1문의</div>
                    </section>
                  </div>
                </div>
              );
            })}
          </section>
        </div>
      </article>
    );
  }
}

export default Mypagearticle;
