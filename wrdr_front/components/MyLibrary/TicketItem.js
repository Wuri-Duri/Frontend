import React from 'react';
import styled from 'styled-components/native';
import {View, Image, Text} from 'react-native';
import exampleImage from '../../assets/MyLibrary/peterpan.jpg';

const TicketContainer = styled.View`
  width: 310;
  height: 100%;
  align-items: center;
  margin-right: 25;
`

const ImageContainer = styled.View`
  width: 100%;
  height: 70%;
  border-radius: 20
  overflow: hidden;
  margin:0 auto;
`

//이미지 width가 티켓 가로 길이보다는 커야 됨
const TicketImage = styled.Image`
  width: 100%;
  height: 100%;
  object-fit:cover;
`

const BottomContainer = styled.View`
  width: 100%;
  height: 30%;
  background-color: #ffffff;
  border-radius: 20;
  justify-content: center;
  align-items: center;
`

const OrderText = styled.Text`
  font-size: 18;
  font-family: 'Jalnan';
  color: #2E3236;
`

//제목 텍스트 최대 글자수 제한 있어야 될듯
const TitleText = styled.Text`
  font-size: 28;
  font-family: 'Jalnan';
  color: #2E3236;
`

const TicketItem = ({number, title}) => {
  return (
    <TicketContainer>
      <ImageContainer>
        <TicketImage source={exampleImage}/>
      </ImageContainer>
      <BottomContainer>
        <OrderText>{number}번째 이야기</OrderText>
        <TitleText>{title}</TitleText>
      </BottomContainer>
    </TicketContainer>
  );
};

export default TicketItem;
