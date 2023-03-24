import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import Styled from 'styled-components/native';
import Title from '../Preset/Title';

const Container = Styled.View`
  width: 50%;
  height: 78%;
  align-items: center;
  flex-direction: column;
  position: relative;
`;

const TicketView = Styled.View`
  width: 57%;
  height: 75%;
  justify-content: center;
  align-items: center;
  background-color: #000000;
  border-radius: 20;
  opacity: 0.6;
  margin-left: 10;
  margin-right: 10;
  paddingbottom: 0;
`;

const Text = Styled.Text`
  color: #ffffff;
  font-size: 25;
  font-weight: bold;
  text-align: center;
  `;

const TicketTitleView = Styled.View`
    width: 57%;
    height: 25%;
    background-color: #ffffff;
    border-radius: 20;
    
`;

const TitleInput = Styled.TextInput`
  color: #000000;
  font-size: 30;
  font-weight: bold;
  margin-top: 8%;
  margin-left: 2%;
  margin-right: 2%;
  text-align: center;
  font-family:'Jalnan';
`;

const TicketImageBox = ({ pageType, setPageType }) => {
  console.log(pageType);
  return (
    <>
      <Container>
        <TicketView>
          <Text>
            오른쪽에서{'\n'}
            {'\n'}그림을{'\n'}
            {'\n'}선택해주세요!
          </Text>
        </TicketView>
        <TicketTitleView>{pageType === 'storyTitle' ? <TitleInput multiline placeholder="이곳을 클릭해 제목을 입력해주세요!" maxLength={20} /> : <TitleInput editable={false} />}</TicketTitleView>
      </Container>
    </>
  );
};

export default TicketImageBox;
