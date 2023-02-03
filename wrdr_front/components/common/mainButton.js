import React from 'react';
import styled from 'styled-components/native';
import { View, Image } from 'react-native';
import plus from '../../assets/BottomBar/BottomBar_button_plus.png';
import next from '../../assets/BottomBar/BottomBar_button_next.png';
import check from '../../assets/BottomBar/BottomBar_button_check.png';

const HomeButtonContainer = styled.TouchableOpacity`
  width: 95;
  height: 95;
  position: absolute;
  align-self: center;
  bottom: 25%;
`;

const ButtonContainer = styled.View`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: ${props => (props.isActived == false ? '#C1C1C1' : props.pageType === 'length' ? '#A5C95C' : '#FFB966')};
  border-radius: 100;
  align-items: center;
  justify-content: center;
`;

const Icon = styled.Image`
  display: flex;
  position: relative;
`;

const MainButton = ({ pageType, bookInfo }) => {
  //클릭시 다음 뷰로 넘어가게 하는 네비게이션(분기처리) 필요
  //pageType 확인하고 해당하는 bookInfo 있는지 확인해서 isActived 변화시키기

  return (
    <HomeButtonContainer>
      <ButtonContainer isActived={true} pageType={pageType}>
        {pageType === 'character' || pageType === 'place' ? <Icon source={next} /> : pageType === 'length' ? <Icon source={check} /> : <Icon source={plus} />}
      </ButtonContainer>
    </HomeButtonContainer>
  );
};

export default MainButton;
