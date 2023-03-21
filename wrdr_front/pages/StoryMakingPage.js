import React, { useState } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import Styled from 'styled-components/native';
import AIStory from '../components/StoryMaking/AIStory';
import Voice from '@react-native-voice/voice';
//import UserTurn from '../components/StoryMaking/UserTurn';
//import recordInactive from '../assets/BottomBar/BottomBar_button_record_inactive.png';
import recordActive from '../assets/BottomBar/BottomBar_button_record_active.png';
//import CircleButton from '../components/common/CircleButton';
import next from '../assets/BottomBar/BottomBar_button_next.png';
import AfterStoryPage from './AfterStoryPage';

const MainContainer = Styled.View`
  width: 100%;
  height: 100%;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const ButtonContainer = Styled.TouchableOpacity`
  position: absolute;
  padding-top: 650;
 
`;
const ButtonRecord = Styled.Image`
  width: 90;
  height: 90;
`;

const Icon = Styled.Image`
  display: flex;
  position: relative;
  width: 70%;
  height: 70%;
  resize-mode: contain;
`;

const NextButtonContainer = Styled.View`
  display: flex;
  width: 100;
  height: 100;
  background-color: '#FFB966' ;
  border-radius: 100;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const HomeButtonContainer = Styled.TouchableOpacity`
  position: relative;
  align-self: flex-start;
`;

const StoryMakingPage = ({ pageType, setPageType }) => {
  const [isRecord, setIsRecord] = useState(false);
  //const buttonlabel = isRecord ? source{record} : source{active};
  const _onRecordVoice = () => {
    if (isRecord) {
      Voice.stop();
    } else {
      Voice.start('ko-KR');
    }
    setIsRecord(!isRecord);
  };

  const onPressMainBtn = () => {
    setPageType('ticketImage');
  };

  return (
    <MainContainer>
      <HomeButtonContainer onPress={onPressMainBtn}>
        <NextButtonContainer>
          <Icon source={next} />
        </NextButtonContainer>
      </HomeButtonContainer>
      <AIStory />
      <ButtonContainer onPress={_onRecordVoice}>
        <ButtonRecord source={recordActive} />
      </ButtonContainer>
    </MainContainer>
  );
};

export default StoryMakingPage;
