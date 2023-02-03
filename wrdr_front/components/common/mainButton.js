import React, { useState } from 'react';
import styled from 'styled-components/native';
import { View, Image } from 'react-native';
import plus from '../../assets/BottomBar/BottomBar_button_plus.png';
import next from '../../assets/BottomBar/BottomBar_button_next.png';
import check from '../../assets/BottomBar/BottomBar_button_check.png';

const HomeButtonContainer = styled.TouchableOpacity`
  width: ${props => props.size || '95'};
  height: ${props => props.size || '95'};
  position: absolute;
  align-self: center;
  bottom: 25%;
`;

const ButtonContainer = styled.View`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: ${props => (props.isActive == false ? '#C1C1C1' : props.pageType === 'length' ? '#A5C95C' : '#FFB966')};
  border-radius: 100;
  align-items: center;
  justify-content: center;
`;

const Icon = styled.Image`
  display: flex;
  position: relative;
  width: 70%;
  height: 70%;
  resize-mode: contain;
`;

const MainButton = ({ pageType, bookInfo, size }) => {
  const onPressMainBtn = () => {
    //클릭시 다음 뷰로 넘어가게 하는 네비게이션(분기처리) 필요
    //isActive가 true이면 character -> place -> length 순으로 이동
    //length 페이지일 경우엔 완료 뷰로 넘어가도록
  };

  return (
    <HomeButtonContainer onPress={onPressMainBtn} size={size}>
      {pageType === 'character' ? (
        <ButtonContainer isActive={bookInfo.isActive.character} pageType={pageType}>
          <Icon source={next} />
        </ButtonContainer>
      ) : pageType === 'place' ? (
        <ButtonContainer isActive={bookInfo.isActive.place} pageType={pageType}>
          <Icon source={next} />
        </ButtonContainer>
      ) : pageType === 'length' ? (
        <ButtonContainer isActive={bookInfo.isActive.length} pageType={pageType}>
          <Icon source={check} />
        </ButtonContainer>
      ) : (
        <ButtonContainer isActive={true}>
          <Icon source={plus} />
        </ButtonContainer>
      )}
    </HomeButtonContainer>
  );
};

export default MainButton;
