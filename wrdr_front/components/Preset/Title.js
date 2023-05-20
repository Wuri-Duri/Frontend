import React from 'react';
import styled from 'styled-components/native';

const TitleContianer = styled.View`
  width: 100%;
  height: 15%;
  justify-content: center;
  align-items: center;
`;

const TitleText = styled.Text`
  color: #ffffff;
  font-size: 30;
  font-weight: bold;
`;

const Title = ({ pageType }) => {
  return (
    <TitleContianer>
      <TitleText>
        {pageType === 'character' ? '이야기에 등장할 인물을 골라볼까요?' : pageType === 'place' ? '우리의 이야기는 어디서 시작하나요?' : pageType === 'length' ? '이 이야기의 길이는?' : ''}
      </TitleText>
    </TitleContianer>
  );
};

export default Title;
