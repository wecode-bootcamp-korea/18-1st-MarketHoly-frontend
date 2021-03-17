import React from 'react';
import './NavBanner.scss';

class NavBanner extends React.Component {
  state = {
    bannerChange: 0,
  };

  componentDidMount() {
    this.bannerInterval = setInterval(this.bannerChange, 1500);
  }

  componentWillUnmount() {
    clearInterval(this.bannerInterval);
  }

  bannerChange = () => {
    const { bannerChange } = this.state;
    if (bannerChange === 0) this.setState({ bannerChange: 1 });
    if (bannerChange === 1) this.setState({ bannerChange: 0 });
  };

  render() {
    const { bannerChange } = this.state;
    return (
      <div className="user-menu-banner">
        <a href="#">
          {bannerChange === 0 ? (
            <>
              <span>서울 &#183; 경기 &#183; 인천</span>
              <span className="span-bold">샛별배송 > </span>
            </>
          ) : (
            <>
              <span>수도권 이외 지역</span>
              <span className="span-bold">택배배송 > </span>
            </>
          )}
        </a>
      </div>
    );
  }
}

export default NavBanner;
