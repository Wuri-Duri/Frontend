import React, { useState, useEffect } from 'react';
import Styled from 'styled-components/native';
import Voice from '@react-native-voice/voice';

import ImageColors from 'react-native-image-colors';

import { useSelector, useDispatch } from 'react-redux';
import { getAIText, getAllText, getPageNum, getStoryImage, getUserText, minusPageNum } from '../../modules/makeStory';
import { requestPAPAGOAPI, requestDALLEAPI, grammarCorrect } from '../../lib/api/fairytale';

import rerecord from '../../assets/ReRecordButton.png';

import axios from 'axios';

const ButtonRecord = Styled.Button`
position: relative;
`;

const VoiceText = Styled.TextInput`
  margin: 32px;
  color: #000000;
  font-size: 35;
  font-weight: bold;
  padding: 0;
  margin: 0;
`;

const Container = Styled.ImageBackground`
  flex: 1;
  flex-direction: row;
  position: relative;
  
`;

const TextView1 = Styled.View`
  flex: 1;
  justify-content: center;
  align-items: center; 
  background-color : rgba(0,0,0,0.53);
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
  padding-left: 50;
  padding-right: 50;
  padding-bottom: 50;
  padding-top: 50;
  margin-left: 50;
  margin-right: 50;
  border-radius: 10;
  background-color: #ffffff;
  opacity: 0.6;
  position: absolute;
`;

const AIText = Styled.Text`
  position: relative;
  color: #ffffff;
  text-align: center;
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

const GuideText = Styled.Text`
  color: #ffffff;
  font-size: 35;
  font-weight: bold;
  padding-bottom: 400;
`;

const RerecordButton = Styled.Image`
color: #ffffff;
size: 1;
width: 210px;
height: 70px;
`;

const ButtonContainer = Styled.TouchableOpacity`
  position: absolute;
  padding-top: 400;
 
`;

const AIStory = ({
  change,
  setChange,
  recordFinish,
  setRecordFinish,
  storyText,
  setStoryText,
  colorEx,
  setColorEx,
  imageDalle,
  setImageDalle,
  images,
  setImages,
  isText,
  setIsText,
  isRecord,
  setIsRecord,
  grammar,
  setGrammar,
  doubleChange,
  setDoubleChange,
}) => {
  const UserMadeText = useSelector(state => state.makeStory.userText);
  const AIMadeText = useSelector(state => state.makeStory.aiText);
  const dalleImage = useSelector(state => state.makeStory.dalleUrl);
  const num = useSelector(state => state.makeStory.num);
  const stackedText = useSelector(state => state.makeStory.allText);

  const dispatch = useDispatch();

  const [textChange, setTextChange] = useState(false);
  const [engText, setEngText] = useState();
  const [speakingText, setSpeakingText] = useState('');

  const voiceLabel = speakingText ? speakingText : '       녹음 버튼을 눌러\n다음 문장을 말해보세요!';

  // //이미지로부터 색상 추출
  // const color = ImageColors.getColors(imageDalle, {
  //   fallback: '#000000',
  //   cache: true,
  //   key: 'unique_key',
  // });

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
    // setColorEx(colorEx => ({
    //   ...colorEx,
    //   background: color._j.background,
    //   primary: color._j.primary,
    //   secondary: color._j.secondary,
    //   detail: color._j.detail,
    // }));
    setTextChange(!textChange);
  };

  useEffect(() => {
    if (textChange) {
      dispatch(getUserText(voiceLabel));
    }
  }, [textChange]);

  // useEffect(() => {
  //   if (UserMadeText) {
  //     setGrammar(grammarCorrect(UserMadeText));
  //     dispatch(getUserText(grammarCorrect(UserMadeText)._j));
  //     // setEngText(requestPAPAGOAPI(grammar));
  //     // dispatch(getStoryImage(requestDALLEAPI(engText)));
  //   }
  // }, [UserMadeText]);

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
  //   if (AIMadeText) {
  //     setIsText(!isText);
  //   }
  // });
  const _onPressRerecord = () => {
    setIsRecord(false);
    setRecordFinish(false);
    setSpeakingText();
  };

  return (
    <>
      {!change ? (
        <Container src={dalleImage}>
          <TextView1>
            <TextContainer1>
              <AIText>{AIMadeText}</AIText>
            </TextContainer1>
          </TextView1>

          <TextView2>
            {recordFinish ? <GuideText>박스를 클릭하면 수정할 수 있어요!</GuideText> : ''}
            <TextContainer2>
              <VoiceText multiline={true}>{doubleChange ? '       녹음 버튼을 눌러\n다음 문장을 말해보세요!' : voiceLabel}</VoiceText>
            </TextContainer2>
            {recordFinish ? (
              <ButtonContainer onPress={_onPressRerecord}>
                <RerecordButton source={rerecord} />
              </ButtonContainer>
            ) : (
              ''
            )}
          </TextView2>
        </Container>
      ) : (
        <Container src={dalleImage}>
          <TextView2>
            <TextContainer2>
              <VoiceText multiline={true}>{UserMadeText}</VoiceText>
            </TextContainer2>
          </TextView2>

          <TextView1>
            <TextContainer1>
              <AIText>{AIMadeText}</AIText>
            </TextContainer1>
          </TextView1>
        </Container>
      )}
    </>
  );
};

export default AIStory;
