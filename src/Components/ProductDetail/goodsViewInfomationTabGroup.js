import React from 'react';

import './goodsViewInfomationTabGroup.scss';

class GoodsViewInfomationTabGroup extends React.Component {
  render() {
    const { idx } = this.props;
    return (
      <ul className="goodsViewInfomationTabGroup">
        <li
          className={`goodsViewInfomationTab ` + (idx === 1 && `tabUse`)}
          onClick={() => {
            this.props.moveScrollY(1);
          }}
        >
          <a href="#" className={`goodsViewInfomationTabAnchor`}>
            상품설명
          </a>
        </li>
        <li
          className={`goodsViewInfomationTab ` + (idx === 2 && `tabUse`)}
          onClick={() => {
            this.props.moveScrollY(2);
          }}
        >
          <a href="#" className={`goodsViewInfomationTabAnchor`}>
            고객후기(16)
          </a>
        </li>
        <li
          className={`goodsViewInfomationTab ` + (idx === 3 && `tabUse`)}
          onClick={() => {
            this.props.moveScrollY(3);
          }}
        >
          <a href="#" className={`goodsViewInfomationTabAnchor`}>
            상품문의(10)
          </a>
        </li>
      </ul>
    );
  }
}

export default GoodsViewInfomationTabGroup;
