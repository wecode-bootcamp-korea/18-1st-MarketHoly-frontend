import React from 'react';
import './GoodsViewInfomationContent.scss';

class GoodsViewInfomationContent extends React.Component {
  render() {
    return (
      <div className="goodsViewInfomationContent">
        <div className="goodsWrap">
          <div className="goodsIntro">
            <div className="pic">
              <img src="https://images.unsplash.com/photo-1495360010541-f48722b34f7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="" />
            </div>
            <div className="context">
              <h3>
                <small>알뜰하게 남김 없이 즐기는</small>
                <h1>[국산콩 고소한 두부 반모 2종]</h1>
                <h1>속초식 닭강정</h1>
              </h3>
              <p className="words">
                바쁜 일상 속 우리의 끼니를 책임지는 든든한 지원군이 되어 줄 먹는낙을 소개할게요. 언제 어디서나 간편하게 이용하는 편의점 식품처럼, 든든한 식사로 혹은 가벼운 간식으로 편하게 즐겨보세요.
                이번에는 속초 중앙시장의 명물, 닭강정을 준비했어요. 간편하게 드실 수 있도록 부드러운 살코기만을 담았죠. 씹을수록 매콤한 맛이 올라오는 양념은 튀김 위에서 바삭하게 굳어 따뜻하지 않아도
                매력적이랍니다. 촉촉한 식감을 원하는 분들은 전자레인지에 살짝만 조리해주세요.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GoodsViewInfomationContent;
