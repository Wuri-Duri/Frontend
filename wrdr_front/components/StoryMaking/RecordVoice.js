import React, { useState, useEffect } from 'react';
import Styled from 'styled-components/native';
import Voice from 'react-native-voice';

const Container = Styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const ButtonRecord = Styled.Button``;
const VoiceText = Styled.Text`
  margin: 32px;
  color: '#ffffff';
`;

const RecordVoice = () => {
  const [isRecord, setIsRecord] = useState(false);
  const [text, setText] = useState('');
  const buttonLabel = isRecord ? 'Stop' : 'Start';
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
      <VoiceText>{voiceLabel}</VoiceText>
      <ButtonRecord onPress={_onRecordVoice} title={buttonLabel} />
    </Container>
  );
};

export default RecordVoice;
