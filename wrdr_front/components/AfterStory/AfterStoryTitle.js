import React from 'react';
import Styled from 'styled-components/native';

const TitleContianer = Styled.View`
  width: 100%;
  height: 12%;
  justify-content: center;
  align-items: center;
`;

const TitleText = Styled.Text`
  color: #ffffff;
  font-size: 47;
  font-weight: bold;
  font-family: jalnan;
  text-align: center;
`;

const AfterStoryTitle = ({ pageType, show, finish }) => {
  return (
    <>
      <TitleContianer>
        <TitleText>
          {pageType === 'ticketImage' && !show
            ? '우리가 만든 이야기가 완성됐어요!'
            : pageType === 'ticketImage'
            ? '이야기 티켓의 그림을 골라볼까요?'
            : pageType === 'storyTitle' && !finish
            ? '이야기의 제목을 정해볼까요?'
            : pageType === 'storyTitle'
            ? '이야기 티켓 완성!\n언제든 다시 볼 수 있어요.'
            : ''}
        </TitleText>
      </TitleContianer>
    </>
  );
};

export default AfterStoryTitle;
