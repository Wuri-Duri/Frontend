import React, { useState, useEffect } from 'react';
import Styled from 'styled-components/native';
import Voice from '@react-native-voice/voice';

import { useSelector, useDispatch } from 'react-redux';
import { getUserText } from '../../modules/makeStory';

import rerecord from '../../assets/ReRecordButton.png';

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
  display: ${props => (props.isShow ? 'none' : 'flex')};
 
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

const AIStory = ({ change, recordFinish, setRecordFinish, setIsRecord, speakingText, setSpeakingText, lastCall, setLastCall }) => {
  const UserMadeText = useSelector(state => state.makeStory.userText);
  const AIMadeText = useSelector(state => state.makeStory.aiText);
  const dalleImage = useSelector(state => state.makeStory.dalleUrl);

  const dispatch = useDispatch();

  const [textChange, setTextChange] = useState(false);

  const voiceLabel = speakingText ? speakingText : '       녹음 버튼을 눌러\n다음 문장을 말해보세요!';

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

    setTextChange(!textChange);
  };

  useEffect(() => {
    if (textChange) {
      setTextChange(!textChange);
      dispatch(getUserText(voiceLabel));
    }
  }, [textChange]);

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

  const _onPressRerecord = () => {
    setIsRecord(false);
    setRecordFinish(false);
    setSpeakingText('');
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

          <TextView2 isShow={lastCall}>
            {recordFinish ? <GuideText>박스를 클릭하면 수정할 수 있어요!</GuideText> : ''}
            <TextContainer2>
              <VoiceText multiline={true}>{voiceLabel}</VoiceText>
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
              <VoiceText multiline={true} editable={false}>
                {UserMadeText}
              </VoiceText>
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
