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
    console.log(this.props.isCheck);
    return (
      <div className="searchAddress">
        <DaumPostcode
          onComplete={this.handleComplete}
          //   onClick={console.log(this.handleComplete(data)}
        />
      </div>
    );
  }
}

export default SearchAddress;
