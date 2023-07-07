import React from 'react';
import Styled from 'styled-components/native';
import { TouchableOpacity, Platform } from 'react-native';
import { useSelector } from 'react-redux';

const VoiceText = Styled.TextInput`
  margin: 32px;
  color: #000000;
  font-size: 35;
  font-weight: bold;
  padding: 0;
  margin: 0;
`;

const TextView2 = Styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  display: ${props => (props.isShow ? 'none' : 'flex')};
 
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
  position: absolute;
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

const RerecordButton = Styled.Image`
color: #ffffff;
size: 1;
width: 210px;
height: 70px;
`;

const ButtonContainer = Styled.View`
  position: absolute;
  padding-top: 400;

  justify-content: center;
  align-items: center;
 
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
  padding-bottom: 400;
  
`;

const UserSection = (lastCall, question, recordFinish, voiceLabel, _onPressRerecord, rerecord) => {
  const randomNum = useSelector(state => state.makeStory.randomNum);
  console.log('랜덤: ', randomNum);
  const guideText = randomNum === 0 ? '' : question;

  return (
    <TextView2 isShow={lastCall}>
      {recordFinish ? <GuideText>박스를 클릭하면 수정할 수 있어요!</GuideText> : <GuideText>{guideText}</GuideText>}
      <TextContainer2>
        <VoiceText multiline={true}>{voiceLabel}</VoiceText>
      </TextContainer2>

      {recordFinish ? (
        <ButtonContainer>
          <TouchableOpacity onPress={_onPressRerecord}>
            <RerecordButton source={rerecord} />
          </TouchableOpacity>
        </ButtonContainer>
      ) : (
        ''
      )}
    </TextView2>
  );
};

export default UserSection;
