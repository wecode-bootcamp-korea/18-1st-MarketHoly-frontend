import React from 'react';
import { Link } from 'react-router-dom';
import { GiCarrot } from 'react-icons/gi';
import './Nav.scss';
class NavBarHoverList extends React.Component {
  mosueOnLinkEnter = e => {
    this.props.categoriesMenuHoverOver(e.target.id);
  };

  render() {
    const { displayShowIndex, index, list } = this.props;
    return (
      <li>
        <Link to="#" id={index} className={'menu-hover-list-name ' + (parseInt(displayShowIndex) === list.navbarId ? 'hover-on' : null)} onMouseEnter={this.mosueOnLinkEnter}>
          <span>
            <GiCarrot className="list-icon" />
          </span>
          <span>&nbsp;{list.categoriesMenuName}</span>
        </Link>
        <ul className="menu-sub-list" style={parseInt(displayShowIndex) === index ? { display: 'none' } : { display: 'flex' }}>
          {list.categoriesSubMenuName.map((list, index) => (
            <li key={index}>
              <Link to="#" className="sub-list-link">
                <span className="sub-list-name">{list}</span>
              </Link>
            </li>
          ))}
        </ul>
      </li>
    );
  }
}

export default NavBarHoverList;
