import React, { Component } from 'react';
import Nav from '../../Components/Nav/Nav';
import Footer from '../../Components/Footer/Footer';
import './Order.scss';

class Order extends Component {
  constructor() {
    super();
    this.state = {
      product: [],
      user: {},
      address: {},
      payment: [],
    };
  }

  componentDidMount() {
    fetch('/data/productList.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          product: data,
        });
      });

    fetch('/data/userInfo.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          user: data,
        });
      });

    fetch('/data/addressInfo.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          address: data,
        });
      });

    fetch('/data/payment.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          payment: data,
        });
      });
  }

  render() {
    const { product, user, address, payment } = this.state;
    return (
      <>
        <Nav />
        <div className="orderContainer">
          <h2>주문서</h2>
          <div className="userForm">
            <h3>주문상품</h3>
            <div className="itemList">
              <ul className="productList">
                {product.productList?.map(item => {
                  return (
                    <li>
                      <div className="productImg">
                        <img src={item.img} alt="상품 이미지" />
                      </div>
                      <div className="productName">
                        <span>{item.name}</span>
                      </div>
                      <div className="productCount">
                        <span>{item.count}개</span>
                      </div>
                      <div className="productPrice">
                        <span className="price">{item.price.toLocaleString(navigator.language)}원</span>
                        <span className="cost">{item.cost.toLocaleString(navigator.language)}원</span>
                      </div>
                    </li>
                  );
                })}
              </ul>

              <div className="userInfo">
                <h3>주문자 정보</h3>
                <div className="ordererSection">
                  {user.userInfo?.map(user => (
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
                  ))}
                </div>
              </div>

              <div className="addressInfo">
                <h3>배송 정보</h3>
                <div className="addressSection">
                  <h4>배송지</h4>
                  {address.addressInfo?.map(address => (
                    <span>{address.address}</span>
                  ))}
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
                      <label>
                        <input type="checkbox" />
                        일반 결제
                      </label>
                    </div>
                  </div>
                </div>

                <div className="paymentResult">
                  <h3>결제금액</h3>
                  <div className="paymentResultSection">
                    {payment.payment?.map(payment => (
                      <table>
                        <tbody>
                          <tr>
                            <th className="subTit">주문금액</th>
                            <td>{payment.orderAmount.toLocaleString(navigator.language)}원</td>
                          </tr>
                          {/* <tr className="productAmount">
                            <th>- 상품금액</th>
                            <td>{payment.productAmount.toLocaleString(navigator.language)}원</td>
                          </tr>
                          <tr className="productAmount">
                            <th>- 상품할인금액</th>
                            <td>-{payment.discountAmount.toLocaleString(navigator.language)}원</td>
                          </tr> */}
                          <tr>
                            <th className="subTit">배송비</th>
                            <td>{payment.deliveryCharge.toLocaleString(navigator.language)}원</td>
                          </tr>
                          <tr className="reserveTit">
                            <th className="subTit">적립금사용</th>
                            <td>{payment.useReserve.toLocaleString(navigator.language)}원</td>
                          </tr>
                          <tr>
                            <th className="subTit">최종결제금액</th>
                            <td className="finalpayment">{payment.finalpayment.toLocaleString(navigator.language)}원</td>
                          </tr>
                        </tbody>
                      </table>
                    ))}
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
        <Footer />
      </>
    );
  }
}

export default Order;
