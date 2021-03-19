import React, { Component } from 'react';
import Mypageorderlist from './Mypageorderlist';
import Mypagearticle from './Mypagearticle';
// import './Mypage.scss';

export class Mypage extends Component {
  render() {
    return (
      <div className="myPage">
        <Mypageorderlist />
        <Mypagearticle />
      </div>
    );
  }
}

export default Mypage;
