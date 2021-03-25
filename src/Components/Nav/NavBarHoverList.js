import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './NavBarHoverList.scss';

class NavBarHoverList extends React.Component {
  mosueOnLinkEnter = e => {
    this.props.categoriesMenuHoverEnter(e.target.id);
  };

  render() {
    const { displayShowIndex, index, list } = this.props;
    return (
      <li>
        <Link
          to={{
            pathname: `/product/${index}`,
            state: {
              checkCategory: 'main',
            },
          }}
          id={index}
          data-name="main"
          className={'menu-hover-list-name ' + (parseInt(displayShowIndex) === list.id ? 'hover-on' : null)}
          onMouseEnter={this.mosueOnLinkEnter}
        >
          <span>&nbsp;{list.category}</span>
        </Link>
        {parseInt(displayShowIndex) === index && (
          <ul className="menu-sub-list">
            {list.subcategories.map((list, index) => {
              return (
                <li key={index}>
                  <Link
                    to={{
                      pathname: `/product/${list.sub_category_id}`,
                      state: {
                        checkCategory: 'sub',
                      },
                    }}
                    className="sub-list-link"
                  >
                    <span className="sub-list-name">{list.sub_category_name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </li>
    );
  }
}

export default withRouter(NavBarHoverList);
