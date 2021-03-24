import React from 'react';
import './GoodsExtraInformation.scss';

class GoodsExtraInformation extends React.Component {
  render() {
    return (
      <table width="100%" border="0" cellPadding="0" cellSpacing="1" className="extraInformation">
        <tbody>
          <tr>
            <th scope="row" className="goodsViewFormTableHeading">
              식품의유형
            </th>
            <td>상품설명 및 상품이미지 참조</td>
            <th scope="row" className="goodsViewFormTableHeading">
              생산자및소재지(수입품의경우생산자,수입자및제조국)
            </th>
            <td>상품설명 및 상품이미지 참조</td>
          </tr>
          <tr>
            <th scope="row" className="goodsViewFormTableHeading">
              제조연월일,유통기한또는품질유지기한
            </th>
            <td>제품 별도 라벨 표기 참조</td>
            <th scope="row" className="goodsViewFormTableHeading">
              포장단위별용량(중량),수량
            </th>
            <td>상품설명 및 상품이미지 참조</td>
          </tr>
          <tr>
            <th scope="row" className="goodsViewFormTableHeading">
              원재료명및함량(농수산물의원산지표시에관한법률에따른원산지표시포함)
            </th>
            <td>상품설명 및 상품이미지 참조</td>
            <th scope="row" className="goodsViewFormTableHeading">
              영양성분(식품위생법에따른영양성분표시대상식품에한함)
            </th>
            <td>상품설명 및 상품이미지 참조</td>
          </tr>
          <tr>
            <th scope="row" className="goodsViewFormTableHeading">
              유전자변형식품에해당하는경우의표시
            </th>
            <td>해당사항 없음</td>
            <th scope="row" className="goodsViewFormTableHeading">
              영유아식또는체중조절식품등에해당하는경우표시광고사전심의필유무및부작용발생가능성
            </th>
            <td>해당사항 없음</td>
          </tr>
          <tr>
            <th scope="row" className="goodsViewFormTableHeading">
              수입식품에해당하는경우“식품위생법에따른수입신고를필함＂의문구
            </th>
            <td>식품위생법에 따른 수입신고를 필함</td>
            <th scope="row" className="goodsViewFormTableHeading">
              소비자상담관련전화번호
            </th>
            <td>마켓컬리 고객행복센터 (1644-1107)</td>
          </tr>
          <tr></tr>
        </tbody>
      </table>
    );
  }
}

export default GoodsExtraInformation;
