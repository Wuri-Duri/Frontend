import React, { useState, useEffect } from 'react';
import Styled from 'styled-components/native';
import Voice from '@react-native-voice/voice';

import { useSelector, useDispatch } from 'react-redux';
import { getUserText } from '../../modules/makeStory';
import { TouchableOpacity, Platform } from 'react-native';
import rerecord from '../../assets/ReRecordButton.png';
import { getSelectedText, getGrammarCorrect, getRecordVoice } from '../../modules/makeStory';
import { grammarCorrect } from '../../lib/api/fairytale';
import nextButton from '../../assets/nextButton.png';
import UserSection from './ UserSection';

const VoiceText = Styled.TextInput`
  margin: 32px;
  color: #000000;
  font-size: 35px;
  font-weight: bold;
  padding: 0;
  margin: 0;
  line-height: 50px;
`;

const SelectText = Styled.Text`
  margin: 32px;
  color: #000000;
  font-size: 35;
  font-weight: bold;
  padding: 0;
  margin: 0;
  line-height: 50px;
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
  background-color: rgba(255,255,255, 0.63); 
  ${Platform.select({
    ios: `
      shadow-color: #000;
      shadow-opacity: 0.3;
      shadow-radius: 10;
    `,
    android: `
      elevation: 5;
    `,
  })}
`;

const SelectTextContainer1 = Styled.View`
  padding-left: 50;
  padding-right: 50;
  padding-bottom: 40;
  padding-top: 40;
  margin-bottom: 30;
  margin-left: 50;
  margin-right: 50;
  border-radius: 10;
  background-color:  ${props => (props.isActive == false ? 'rgba(255,255,255, 0.53)' : 'rgba(81, 87, 92, 0.23)')};
  align-items: center;
  position: relative;
  ${Platform.select({
    ios: `
      shadow-color: #000;
      shadow-opacity: 0.3;
      shadow-radius: 10;
    `,
    android: `
      elevation: 5;
    `,
  })}
`;

const SelectTextContainer2 = Styled.View`
  padding-left: 50;
  padding-right: 50;
  padding-bottom: 40;
  padding-top: 40;
  margin-left: 50;
  margin-right: 50;
  border-radius: 10;
  background-color:${props => (props.isActive == false ? 'rgba(255,255,255, 0.53)' : 'rgba(81, 87, 92, 0.23)')}; 
  position: relative;
  ${Platform.select({
    ios: `
      shadow-color: #000;
      shadow-opacity: 0.3;
      shadow-radius: 10;
    `,
    android: `
      elevation: 5;
    `,
  })}
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
  line-height: 50px;
`;

const GuideText = Styled.Text`
  color: #ffffff;
  ${Platform.select({
    ios: `
      shadow-color: #000;
      shadow-opacity: 1;
      shadow-radius: 10;
    `,
    android: `
      elevation: 2;
    `,
  })}
  font-size: 35;
  font-weight: bold;
  padding-bottom: 40;
  
`;

const RerecordButton = Styled.Image`
color: #ffffff;
size: 1;
width: 210px;
height: 70px;
`;

const GrammarButton = Styled.Image`
color: #ffffff;
size: 1;
width: 70px;
height: 70px;
`;

const ButtonContainer = Styled.View`
  padding-top: 40;
  justify-content: center;
  align-items: center;
`;

const AIStory = ({ isCorrected, setIsCorrected, setSelectText, change, recordFinish, setRecordFinish, setIsRecord, isRecord, speakingText, setSpeakingText, lastCall, question, isQuestion }) => {
  const UserMadeText = useSelector(state => state.makeStory.userText);
  const AIMadeText = useSelector(state => state.makeStory.aiText);
  const dalleImage = useSelector(state => state.makeStory.dalleUrl);
  const selectText1 = useSelector(state => state.makeStory.selectText1);
  const selectText2 = useSelector(state => state.makeStory.selectText2);
  const num = useSelector(state => state.makeStory.num);
  const correctedText = useSelector(state => state.makeStory.correctedText);

  const [textChange, setTextChange] = useState(false);
  const [select1, setSelect1] = useState(false);
  const [select2, setSelect2] = useState(false);

  const dispatch = useDispatch();

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
      dispatch(getRecordVoice(voiceLabel));
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
    setIsCorrected(false);
  };

  //
  const _onSelectText1 = () => {
    dispatch(getSelectedText(selectText1));
    setSelectText(true);
    setSelect1(true);
    setSelect2(false);
  };

  const _onSelectText2 = () => {
    dispatch(getSelectedText(selectText2));
    setSelectText(true);
    setSelect1(false);
    setSelect2(true);
  };

  const _onGrammarCorrect = async () => {
    dispatch(getGrammarCorrect(await grammarCorrect(UserMadeText)));
    setIsCorrected(true);
  };

  const showAIText = AIMadeText;

  const randomNum = useSelector(state => state.makeStory.randomNum);
  const guideText = num === 0 ? '' : num !== 0 && randomNum === 2 ? '다음에 올 문장을 선택해요!' : num !== 0 && randomNum === 0 ? '' : num !== 0 && randomNum === 1 ? question : '';
  ////////randomNum이 2이면 <VoiceText>가 2개 나옴. 둘다 TouchableOpacity로 해서 누르면 그 텍스트 값이 userText로 디스패치하기
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
            {recordFinish ? <GuideText>박스를 클릭하면 수정할 수 있어요!</GuideText> : <GuideText>{guideText}</GuideText>}
            {num !== 0 && randomNum === 2 ? (
              <>
                <SelectTextContainer1 isActive={select1}>
                  <TouchableOpacity onPress={_onSelectText1}>
                    <SelectText multiline={true} editable={false}>
                      {selectText1}
                    </SelectText>
                  </TouchableOpacity>
                </SelectTextContainer1>
                <SelectTextContainer2 isActive={select2}>
                  <TouchableOpacity onPress={_onSelectText2}>
                    <SelectText multiline={true} editable={false}>
                      {selectText2}
                    </SelectText>
                  </TouchableOpacity>
                </SelectTextContainer2>
              </>
            ) : (
              <TextContainer2>{!isCorrected ? <VoiceText multiline={true}>{voiceLabel}</VoiceText> : <VoiceText multiline={true}> {correctedText}</VoiceText>}</TextContainer2>
            )}

            {recordFinish ? (
              <>
                <ButtonContainer>
                  <TouchableOpacity onPress={_onPressRerecord}>
                    <RerecordButton source={rerecord} />
                  </TouchableOpacity>
                </ButtonContainer>
                <ButtonContainer>
                  <TouchableOpacity onPress={_onGrammarCorrect}>
                    <GrammarButton source={nextButton} />
                  </TouchableOpacity>
                </ButtonContainer>
              </>
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
              <AIText>{showAIText}</AIText>
            </TextContainer1>
          </TextView1>
        </Container>
      )}
    </>
  );
};

export default AIStory;
