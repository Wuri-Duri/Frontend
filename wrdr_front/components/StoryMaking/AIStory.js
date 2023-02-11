import React, { useState, useEffect } from 'react';
import Styled from 'styled-components/native';
//import RecordVoice from './RecordVoice';
import Voice from 'react-native-voice';

//import CircleButton from '../common/CircleButton';
//import record from '../../assets/BottomBar/BottomBar_button_record.png';

/*
const Container = Styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
*/
const ButtonRecord = Styled.Button`
position: relative;
`;

const VoiceText = Styled.Text`
  margin: 32px;
  color: #ffffff;
  font-size: 35;
`;

const Container = Styled.View`
  flex: 1;
  flex-direction: row;
`;

const TextView1 = Styled.View`
  flex: 1;
  background-color: #e6e6e6;
  justify-content: center;
  align-items: center;
`;

const TextView2 = Styled.View`
  flex: 1;
  background-color: #1D1D1D;
  justify-content: center;
  align-items: center;
`;

const TextContainer1 = Styled.View`
  background-color: #ffffff;
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
  color: #000000;
  font-align: center;
  font-size: 35;
  margin-left: 40;
  margin-right: 40;
  margin-top: 40;
  margin-bottom: 40;
`;

const ImageView = Styled.View`
  flex: 1;
  background-color: #1d1d1d;
`;

const AIStory = ({ pageType, setPageType }) => {
  const [isRecord, setIsRecord] = useState(false);
  const [text, setText] = useState('');
  //const buttonLabel = isRecord ? 'Stop' : 'Start';
  const voiceLabel = text ? text : isRecord ? '다음 문장을 말해주세요!' : '녹음 버튼을 눌러주세요!';

  const _onSpeechStart = () => {
    console.log('onSpeechStart');
    setText('');
  };
  const _onSpeechEnd = () => {
    console.log('onSpeechEnd');
  };
  const _onSpeechResults = event => {
    console.log('onSpeechResults');
    setText(event.value[0]);
  };
  const _onSpeechError = event => {
    console.log('_onSpeechError');
    console.log(event.error);
  };

  const _onRecordVoice = () => {
    if (isRecord) {
      Voice.stop();
    } else {
      Voice.start('ko-KR');
    }
    setIsRecord(!isRecord);
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
  return (
    <Container>
      <TextView1>
        <TextContainer1>
          <AIText>
            AI가 만든 텍스트가 이 영역에 나타납니다. 가로 길이 최대 제한을 둬서 흰 박스의 가로 세로 마진을 맞춰주세요. 흰 박스의 가로 길이는 고정, 세로 길이는 내용 길이에 따라 늘어날 수 있으며, 왼쪽
            화면의 세로 중앙에 위치하기만 하면 됩니다.
          </AIText>
        </TextContainer1>
      </TextView1>
      <TextView2>
        <TextContainer2>
          <VoiceText>{voiceLabel}</VoiceText>
        </TextContainer2>
      </TextView2>
    </Container>
  );
};

export default AIStory;
