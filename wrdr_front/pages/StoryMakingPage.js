import React, { useState } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import Styled from 'styled-components/native';
import AIStory from '../components/StoryMaking/AIStory';
import Voice from '@react-native-voice/voice';
//import UserTurn from '../components/StoryMaking/UserTurn';
//import recordInactive from '../assets/BottomBar/BottomBar_button_record_inactive.png';
import recordActive from '../assets/BottomBar/BottomBar_button_record_active.png';
//import CircleButton from '../components/common/CircleButton';

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

  return (
    <MainContainer>
      <AIStory />
      <ButtonContainer onPress={_onRecordVoice}>
        <ButtonRecord source={recordActive}  />
      </ButtonContainer>
    </MainContainer>
  );
};

export default StoryMakingPage;
