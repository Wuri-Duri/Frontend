import React, { useState } from 'react';
import Styled from 'styled-components/native';
import AIStory from '../components/StoryMaking/AIStory';
import Voice from '@react-native-voice/voice';
//import UserTurn from '../components/StoryMaking/UserTurn';
import CircleButton from '../components/common/CircleButton';

const MainContainer = Styled.View`
  width: 100%;
  height: 100%;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const ButtonContainer = Styled.View`
  position: absolute;
  padding-top: 650;
`;
const ButtonRecord = Styled.Button`
`;

const StoryMakingPage = ({ pageType, setPageType }) => {
  const [isRecord, setIsRecord] = useState(false);
  const buttonLabel = isRecord ? 'Stop' : 'Start';
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
      <ButtonContainer>
        <ButtonRecord onPress={_onRecordVoice} title={buttonLabel} />
      </ButtonContainer>
    </MainContainer>
  );
};

export default StoryMakingPage;
