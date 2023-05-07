import React, { useState, useEffect } from 'react';
import Styled from 'styled-components/native';
import Voice from '@react-native-voice/voice';

import ImageColors from 'react-native-image-colors';

import { useSelector, useDispatch } from 'react-redux';
import { getUserText } from '../../redux/modules/makeStory';

const ButtonRecord = Styled.Button`
position: relative;
`;

const VoiceText = Styled.TextInput`
  margin: 32px;
  color: #ffffff;
  font-size: 35;
  font-weight: bold;
`;

const Container = Styled.View`
  flex: 1;
  flex-direction: row;
`;

const TextView1 = Styled.ImageBackground`
  flex: 1;
  
  justify-content: center;
  align-items: center;
  
`;

const TextView2 = Styled.View`
  flex: 1;
  
  justify-content: center;
  align-items: center;
`;

const TextContainer1 = Styled.View`
  
  margin-left: 30;
  margin-right: 30;
  border-radius: 10;
  
`;

const TextContainer2 = Styled.View`
  margin-left: 30;
  margin-right: 30;
  border-radius: 10;
`;

const AIText = Styled.Text`
  color: #ffffff;
  font-align: center;
  font-size: 35;
  font-weight: bold;
  margin-left: 40;
  margin-right: 40;
  margin-top: 40;
  margin-bottom: 40;
`;

const ImageView = Styled.View`
  flex: 1;
  background-color: #1d1d1d;
`;

const AIStory = ({ storyText, setStoryText, colorEx, setColorEx }) => {
  const userText = useSelector(state => state.makeStory.userText);
  console.log('redux state : ', userText);
  const dispatch = useDispatch();

  const src = require('../../assets/forestBg.png');
  //이미지로부터 색상 추출
  const color = ImageColors.getColors(src, {
    fallback: '#000000',
    cache: true,
    key: 'unique_key',
  });

  const [isRecord, setIsRecord] = useState(false);
  const [speakingText, setSpeakingText] = useState('');
  //const buttonLabel = isRecord ? 'Stop' : 'Start';

  // const voiceLabel = text ? text : isRecord ? '다음 문장을 말해주세요!' : '녹음 버튼을 눌러주세요!';
  const voiceLabel = speakingText ? speakingText : '녹음 버튼을 눌러주세요!';

  const _onSpeechStart = () => {
    console.log('onSpeechStart');
    setSpeakingText('');
  };

  const _onSpeechResults = event => {
    console.log('onSpeechResults');
    setSpeakingText(event.value[0]);
  };

  const _onSpeechEnd = () => {
    console.log('onSpeechEnd');

    setStoryText(storyText => ({
      ...storyText,
      userText: voiceLabel,
      isActive: {
        ...storyText.isActive,
        userText: true,
      },
    }));
    setColorEx(colorEx => ({
      ...colorEx,
      background: color._j.background,
      primary: color._j.primary,
      secondary: color._j.secondary,
      detail: color._j.detail,
    }));
  };

  const _onSpeechError = event => {
    console.log('_onSpeechError');
    console.log(event.error);
  };

  useEffect(() => {
    Voice.onSpeechStart = _onSpeechStart;
    Voice.onSpeechEnd = _onSpeechEnd;
    Voice.onSpeechResults = _onSpeechResults;
    Voice.onSpeechError = _onSpeechError;

    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  // useEffect(() => {
  //   // console.log('바뀌고 있지롱 헤헤' + speakingText);
  //   setStoryText(storyText => ({
  //     ...storyText,
  //     userText: voiceLabel,
  //     isActive: {
  //       ...storyText.isActive,
  //       userText: true,
  //     },
  //   }));

  //   dispatch(getUserText(voiceLabel));
  // }, [speakingText]);

  // console.log('dslk '+ voiceLabel);
  dispatch(getUserText(voiceLabel));

  return (
    <Container>
      <TextView1 source={require('../../assets/forestBg.png')} opacity={0.6}>
        <TextContainer1>
          <AIText>
            AI가 만든 텍스트가 이 영역에 나타납니다. 가로 길이 최대 제한을 둬서 흰 박스의 가로 세로 마진을 맞춰주세요. 흰 박스의 가로 길이는 고정, 세로 길이는 내용 길이에 따라 늘어날 수 있으며, 왼쪽
            화면의 세로 중앙에 위치하기만 하면 됩니다.
          </AIText>
        </TextContainer1>
      </TextView1>

      <TextView2 backgroundColor={colorEx.detail}>
        <TextContainer2 backgroundColor={colorEx.primary}>
          <VoiceText>{voiceLabel}</VoiceText>
        </TextContainer2>
      </TextView2>
    </Container>
  );
};

export default AIStory;
