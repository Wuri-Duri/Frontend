import React from 'react';
import styled from 'styled-components/native';
import { TouchableOpacity, View, Image, Text } from 'react-native';

const Container = styled.View`
  width: 300;
  height: 100%;
  margin-right: 25;
  justify-content: flex-end;
`;

const TicketContainer = styled.TouchableOpacity`
  width: 100%;
  height: 90%;
  align-items: center;
`;

const ImageContainer = styled.View`
  width: 100%;
  height: 70%;
  border-radius: 20
  overflow: hidden;
  margin:0 auto;
`;

//이미지 width가 티켓 가로 길이보다는 커야 됨
const TicketImage = styled.Image`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const BottomContainer = styled.View`
  width: 100%;
  height: 30%;
  background-color: #ffffff;
  border-radius: 20;
  justify-content: center;
  align-items: center;
`;

const OrderText = styled.Text`
  font-size: 18;
  font-family: 'Jalnan';
  color: #2e3236;
  margin-bottom: 5;
`;

//제목 텍스트 최대 글자수 제한 있어야 될듯
const TitleText = styled.Text`
  font-size: 28;
  font-family: 'Jalnan';
  color: #2e3236;
`;

const TicketItem = ({ key, number, title, image }) => {
  //나중에 실제 image url 서버에서 받으면 source 부분에 image props 넣기
  //id값 따라서 TicketContainer 클릭 시 모달 창 띄우도록 연결
  return (
    <Container>
      <TicketContainer>
        <ImageContainer>
          <TicketImage source={require('../../assets/MyLibrary/peterpan.jpg')} />
        </ImageContainer>
        <BottomContainer>
          <OrderText>{number}번째 이야기</OrderText>
          <TitleText>{title}</TitleText>
        </BottomContainer>
      </TicketContainer>
    </Container>
  );
};

export default TicketItem;
