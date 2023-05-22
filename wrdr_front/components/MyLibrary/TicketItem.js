import React from 'react';
import styled from 'styled-components/native';
import { useDispatch } from 'react-redux';
import { getTicketIdx } from '../../modules/ticket';

const Container = styled.View`
  width: 300;
  height: 100%;
  margin-left: 25;
  justify-content: flex-end;
`;

const TicketContainer = styled.TouchableOpacity`
  width: 100%;
  height: 100%;
  align-items: center;
`;

const ImageContainer = styled.View`
  width: 100%;
  height: 70%;
  border-radius: 20
  overflow: hidden;
  margin:0 auto;
`;

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

const TitleText = styled.Text`
  font-size: 28;
  font-family: 'Jalnan';
  color: #2e3236;
`;

const TicketItem = ({ idx, number, title, image, setPageType }) => {
  const dispatch = useDispatch();
  const onPressTicket = () => {
    setPageType('readstory');
    dispatch(getTicketIdx(idx));
  };
  return (
    <Container>
      <TicketContainer onPress={onPressTicket}>
        <ImageContainer>
          <TicketImage src={image} />
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
