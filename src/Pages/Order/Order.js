import React, { Component } from 'react';
import './Order.scss';

class Order extends Component {
  constructor() {
    super();
    this.state = {
      product: [],
      user: '',
      address: '',
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/productList.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          product: data,
        });
      });

    fetch('http://localhost:3000/data/userInfo.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          user: data,
        });
      });

    fetch('http://localhost:3000/data/addressInfo.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          address: data,
        });
      });
  }

  render() {
    const { product, user, address } = this.state;
    return (
      <>
        <div className="orderContainer">
          <h2>주문서</h2>
          <div className="userForm">
            <h3>주문상품</h3>
            <div className="itemList">
              {product.map(item => {
                return <Product key={product.id} img={product.img} name={product.name} count={product.count} price={product.price} cost={product.cost} />;
              })}
              <ul className="productList">
                <li>
                  <div className="productImg">{product[0]?.img}</div>
                  <div className="productName">
                    <span>{product[0]?.name}</span>
                  </div>
                  <div className="productCount">
                    <span>{product.count}개</span>
                  </div>
                  <div className="productPrice">
                    <span className="price">{product.price}원</span>
                    <span className="cost">{product.cost}원</span>
                  </div>
                </li>
              </ul>

              <div className="userInfo">
                <h3>주문자 정보</h3>
                <div className="ordererSection">
                  <table>
                    <tbody>
                      <tr>
                        <th>보내는 분</th>
                        <td>{user.name}</td>
                      </tr>
                      <tr>
                        <th>휴대폰</th>
                        <td>{user.phone}</td>
                      </tr>
                      <tr>
                        <th>이메일</th>
                        <td>{user.email}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="addressInfo">
                <h3>배송 정보</h3>
                <div className="addressSection">
                  <h4>배송지</h4>
                  <span>{address.address}</span>
                </div>
              </div>

              <div className="payContainer">
                <div>
                  <div className="point">
                    <h3>적립금</h3>
                    <div className="pointsApplied">
                      <h4>적립금 적용</h4>
                      <span>사용 가능한 적립금이 없습니다.</span>
                    </div>
                  </div>
                  <div className="payment">
                    <h3>결제수단</h3>
                    <div className="paymentSection">
                      <h4>결제</h4>
                      <span>결제 수단 API</span>
                    </div>
                  </div>
                </div>

                <div className="paymentResult">
                  <h3>결제금액</h3>
                  <div className="paymentResultSection">
                    <table>
                      <tbody>
                        <tr>
                          <th className="subTit">주문금액</th>
                          <td>32,140원</td>
                        </tr>
                        <tr className="productAmount">
                          <th>상품금액</th>
                          <td>48,300원</td>
                        </tr>
                        <tr className="productAmount">
                          <th>상품할인금액</th>
                          <td>-16,160원</td>
                        </tr>
                        <tr>
                          <th className="subTit">배송비</th>
                          <td>0원</td>
                        </tr>
                        <tr>
                          <th className="subTit">쿠폰할인금액</th>
                          <td>0원</td>
                        </tr>
                        <tr>
                          <th className="subTit">적립금사용</th>
                          <td>0원</td>
                        </tr>
                        <tr>
                          <th className="subTit">최종결제금액</th>
                          <td>32,140원</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <button>결제하기</button>
              <div className="paymentText">
                <p>직접 주문취소는 '입금확인' 상태에서만 가능합니다.</p>
                <p>미성년자가 결제 시 법정대리인이 거래를 취소할 수 있습니다.</p>
                <p>상품 미 배송 시, 결제수단으로 환불됩니다.</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Order;
