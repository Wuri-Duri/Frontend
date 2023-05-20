import React from 'react';
import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

const Container = styled.View`
  width: 300;
  height: 100%;
  border-radius: 300;
  justify-content: center;
  align-items: center;
  margin-left: 10;
  margin-right: 10;
  padding-top: ${props => (props.even == 0 ? '70' : '0')};
  padding-bottom: ${props => (props.even == 1 ? '70' : '0')};
`;

const SelectArea = styled.ImageBackground`
  width: 280;
  height: 280;
  border-radius: 280;
  justify-content: center
  align-items: center;
  overflow: hidden;
  opacity: ${props => (props.isActive == true ? '0.8' : '0.4')};
`;

const InsideText = styled.Text`
  font-weight: bold;
  font-size: 30;
  color: #ffffff;
`;

const PlaceItem = ({ id, imageUrl, title, bookInfo, setBookInfo }) => {
  const onPressPlaceBtn = () => {
    setBookInfo(bookInfo => ({
      ...bookInfo,
      place: title,
      isActive: {
        ...bookInfo.isActive,
        place: true,
      },
    }));
  };

  return (
    <Container even={parseInt(id) % 2}>
      <TouchableOpacity onPress={onPressPlaceBtn}>
        <SelectArea source={imageUrl} isActive={bookInfo.place === title}>
          <InsideText>{title}</InsideText>
        </SelectArea>
      </TouchableOpacity>
    </Container>
  );
};

export default PlaceItem;
