import React, { useState } from 'react';
import styled from 'styled-components/native';
import plus from '../../assets/BottomBar/BottomBar_button_plus.png';
import next from '../../assets/BottomBar/BottomBar_button_next.png';
import check from '../../assets/BottomBar/BottomBar_button_check.png';
import home from '../../assets/BottomBar/BottomBar_button_home.png';

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

const MainButton = ({ pageType, setPageType, bookInfo, ticketInfo, size, disabled, finish, setFinish, show }) => {
  const onPressMainBtn = () => {
    if (pageType === 'mylibrary') {
      setPageType('character');
    } else if (bookInfo && bookInfo.isActive.character && pageType === 'character') {
      setPageType('place');
    } else if (bookInfo && bookInfo.isActive.place && pageType === 'place') {
      setPageType('length');
    } else if (bookInfo && bookInfo.isActive.length && pageType === 'length') {
      //   setPageType('preRocket');
      // } else if (pageType === 'preRocket') {
      //   //setPageType('');
      //   //동화 제작 뷰로 넘어가기
      setPageType('makestory');
    } else if (pageType === 'makestory') {
      setPageType('ticketImage');
    } else if (ticketInfo.isActive.ticketImage && pageType === 'ticketImage') {
      console.log(pageType);
      setPageType('storyTitle');
    } else if (ticketInfo.isActive.storyTitle && pageType === 'storyTitle') {
      console.log(finish);
      // setFinish(!finish);
      setFinish((finish: boolean) => !finish);
      setTimeout(() => {
        setPageType('mylibrary');
      }, 1500);
    }
  };

  return (
    <HomeButtonContainer onPress={onPressMainBtn} size={size} disabled={disabled}>
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
      ) : pageType === 'preRocket' ? (
        ''
      ) : pageType === 'mylibrary' ? (
        <ButtonContainer isActive={true}>
          <Icon source={plus} />
        </ButtonContainer>
      ) : pageType === 'ticketImage' && show ? (
        <ButtonContainer isActive={ticketInfo.isActive.ticketImage} pageType={pageType}>
          <Icon source={next} />
        </ButtonContainer>
      ) : pageType === 'ticketImage' && !show ? (
        ''
      ) : pageType === 'storyTitle' && !finish ? (
        <ButtonContainer isActive={ticketInfo.isActive.storyTitle} pageType={pageType} finish={finish} setFinish={setFinish}>
          <Icon source={check} />
        </ButtonContainer>
      ) : pageType === 'storyTitle' && finish ? (
        ''
      ) : (
        <ButtonContainer isActive={true}>
          <Icon source={home} />
        </ButtonContainer>
      )}
    </HomeButtonContainer>
  );
};

export default MainButton;
