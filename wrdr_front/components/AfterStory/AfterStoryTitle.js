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
`;

const AfterStoryTitle = ({ pageType }) => {
  return (
    <TitleContianer>
      <TitleText>{pageType === 'ticketImage' ? '이야기 티켓의 그림을 골라볼까요?' : pageType === 'storyTitle' ? '이야기의 제목을 정해볼까요?' : ''}</TitleText>
    </TitleContianer>
  );
};

export default AfterStoryTitle;
