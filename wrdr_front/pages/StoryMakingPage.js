import React, { useState } from 'react';
import Styled from 'styled-components/native';
import AIStory from '../components/StoryMaking/AIStory';
import Voice from '@react-native-voice/voice';
import recordActive from '../assets/BottomBar/BottomBar_button_record_active.png';
import next from '../assets/BottomBar/BottomBar_button_next.png';

import { useSelector, useDispatch } from 'react-redux';
import { getUserText } from '../redux/modules/makeStory';
import { _selectBtn } from '../components/StoryMaking/AIStory';

const MainContainer = Styled.View`
  width: 100%;
  height: 100%;
  flex: 1;
  justify-content: center;
  align-items: center;
  position: absolute;
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

const StoryMakingPage = ({ setPageType }) => {
  const [storyText, setStoryText] = useState({
    aiText: '',
    userText: '',
    isActive: {
      aiText: false,
      userText: false,
    },
  });

  const [colorEx, setColorEx] = useState({
    background: '',
    primary: '',
    secondary: '',
    detail: '',
  });

  const [isRecord, setIsRecord] = useState(false);

  const _onRecordVoice = () => {
    if (isRecord) {
      Voice.stop();
    } else {
      Voice.start('ko-KR');
    }
    setIsRecord(!isRecord);
    // setStoryText(storyText => ({
    //   ...storyText,
    //   userText: storyText.voiceLabel,
    //   isActive: {
    //     ...storyText.isActive,
    //     userText: true,
    //   },
    // })),
    //   dispatch(getUserText(storyText.voiceLabel));
  };

  const onPressMainBtn = () => {
    setPageType('ticketImage');
  };

  const dispatch = useDispatch();
  console.log(storyText.userText);
  return (
    <MainContainer>
      <HomeButtonContainer onPress={onPressMainBtn}>
        <NextButtonContainer>
          <Icon source={next} />
        </NextButtonContainer>
      </HomeButtonContainer>
      <AIStory storyText={storyText} setStoryText={setStoryText} colorEx={colorEx} setColorEx={setColorEx} />
      <ButtonContainer onPress={_onRecordVoice}>
        <ButtonRecord source={recordActive} />
      </ButtonContainer>
    </MainContainer>
  );
};

export default StoryMakingPage;
