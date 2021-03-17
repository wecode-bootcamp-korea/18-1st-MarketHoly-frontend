import React from 'react';
import { Link } from 'react-router-dom';
import './NavBarHoverList.scss';

class NavBarHoverList extends React.Component {
  mosueOnLinkEnter = e => {
    this.props.categoriesMenuHoverEnter(e.target.id);
  };

  render() {
    const { displayShowIndex, index, list } = this.props;
    return (
      <li>
        <Link to="#" id={index} className={'menu-hover-list-name ' + (parseInt(displayShowIndex) === list.navbarId ? 'hover-on' : null)} onMouseEnter={this.mosueOnLinkEnter}>
          <span>&nbsp;{list.categoriesMenuName}</span>
        </Link>
        {parseInt(displayShowIndex) === index && (
          <ul className="menu-sub-list">
            {list.categoriesSubMenuName.map((list, index) => (
              <li key={index}>
                <Link to="#" className="sub-list-link">
                  <span className="sub-list-name">{list}</span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </li>
    );
  }
}

export default NavBarHoverList;
