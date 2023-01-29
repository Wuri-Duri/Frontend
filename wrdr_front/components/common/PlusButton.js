import React from 'react';
import styled from 'styled-components/native';
import {View, Image} from 'react-native';
import plus from '../../assets/BottomBar/BottomBar_button_plus.png';

// 흠 고민이 되는 부분이 이 버튼도 TouchableOpacity로 하면 LastTicketForAdd에서 버튼이 2개로 작동하길래 우선 View로 바꿔뒀는데
// 이 버튼을 눌러도 동화 추가 뷰로 넘어가야 되니까 여기도 TouchableOpacity로 하는 게 기능 상 맞긴 하고... 으음... 으음...
// 아무튼 여기도 클릭 시 동화 추가 뷰로 넘어가게 하는 작업 추가 필요

const ButtonContainer = styled.View`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #FFB966;
  border-radius: 100;
  align-items: center;
  justify-content: center;
`

const Plus = styled.Image`
  display: flex;
  position: relative;
  width: 55%;
  height: 55%;
`

const PlusButton = () => {
  return (
    <ButtonContainer>
      <Plus source={plus}/>
    </ButtonContainer>
  );
};

export default PlusButton;
