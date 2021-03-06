import React, { Component } from 'react';
import DaumPostcode from 'react-daum-postcode';
import './searchAddress.scss';

class SearchAddress extends Component {
  handleComplete = data => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }

    localStorage.setItem('fulladdress', fullAddress);
  };

  render() {
    return (
      <div className="searchAddress">
        <DaumPostcode onComplete={this.handleComplete} />
      </div>
    );
  }
}

export default SearchAddress;
