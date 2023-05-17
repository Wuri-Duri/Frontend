import React, { useState, useEffect } from 'react';
import Styled from 'styled-components/native';
import AIStory from '../components/StoryMaking/AIStory';
import Voice from '@react-native-voice/voice';
import recordActive from '../assets/BottomBar/BottomBar_button_record_active.png';
import next from '../assets/BottomBar/BottomBar_button_next.png';

import { useSelector, useDispatch } from 'react-redux';
import { getPageNum, getUserText } from '../modules/makeStory';

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

const StoryMakingPage = ({ setPageType, imageDalle, setImageDalle, images, setImages }) => {
  const [storyText, setStoryText] = useState();

  const [colorEx, setColorEx] = useState({
    background: '',
    primary: '',
    secondary: '',
    detail: '',
  });

  const [isRecord, setIsRecord] = useState(false);

  const [isText, setIsText] = useState(false);

  const num = useSelector(state => state.makeStory.num);

  // const userText = useSelector(state => state.makeStory.userText);

  const dispatch = useDispatch();

  const _onRecordVoice = () => {
    if (isRecord) {
      Voice.stop();
      dispatch(getPageNum(num));
      // dispatch(getUserText(storyText.userText));
    } else {
      Voice.start('ko-KR');
    }
    setIsRecord(!isRecord);
  };

  // useEffect(() => {
  //   if (userText) {
  //     dispatch(getUserText(userText));
  //   }
  // }, [userText]);

  return (
    <MainContainer>
      <AIStory
        storyText={storyText}
        setStoryText={setStoryText}
        colorEx={colorEx}
        setColorEx={setColorEx}
        imageDalle={imageDalle}
        setImageDalle={setImageDalle}
        images={images}
        setImages={setImages}
        isText={isText}
        setIsText={setIsText}
      />
      <ButtonContainer onPress={_onRecordVoice}>
        <ButtonRecord source={recordActive} />
      </ButtonContainer>
    </MainContainer>
  );
};

export default StoryMakingPage;
