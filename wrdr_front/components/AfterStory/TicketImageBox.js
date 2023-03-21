import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import Styled from 'styled-components/native';
import Title from '../Preset/Title';

const Container = Styled.View`
  width: 50%;
  height: 78%;
  align-items: center;
  flex-direction: column;
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

const TitleText = Styled.Text`
  color: #000000;
  font-size: 30;
  font-weight: bold;
  text-align: center;
`;

const TicketImageBox = ({ pageType, setPageType }) => {
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
        <TicketTitleView />
      </Container>
    </>
  );
};

export default TicketImageBox;
