import React from 'react';
import { TouchableOpacity, View, Image } from 'react-native';
import styled from 'styled-components/native';

const Conatiner = styled.View`
  width: 22%;
  height: 67%;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-left: 10;
  margin-right: 10;
`;

const CharImage = styled.Image`
  width: 100%;
  height: 73%;
  border-radius: 10;
`;

const TextBox = styled.View`
  width: 100%;
  height: 25%;
  margin-top: 2%;
  background-color: #000000;
  opacity: 0.8;
  border-radius: 10;
  justify-content: center;
  align-items: center;
  font-weight: bold;
`;

const TopText = styled.Text`
  color: #ffffff;
  font-weight: bold;
  font-size: 18;
`;

const BottomText = styled.Text`
  color: #ffb966;
  font-weight: bold;
  font-size: 30;
  margin-top: 1%;
`;

const NewCharCard = ({ bookTitle, name, image }) => {
  return (
    <Conatiner>
      <CharImage source={image} />
      <TextBox>
        <TopText>
          {'<'}
          {bookTitle}
          {'>'}의
        </TopText>
        <BottomText>{name}</BottomText>
      </TextBox>
    </Conatiner>
  );
};

export default NewCharCard;
