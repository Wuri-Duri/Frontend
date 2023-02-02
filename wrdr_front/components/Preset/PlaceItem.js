import React from 'react';
import styled from 'styled-components/native';
import { TouchableOpacity, View, Image, Text } from 'react-native';

const Container = styled.View`
  width: 300;
  height: 100%;
  border-radius: 300;
  justify-content: center;
  align-items: center;
  margin-left: 10;
  margin-right: 10;
  padding-top: ${props => (parseInt(props.even) % 2 == 0 ? '70' : '0')};
  padding-bottom: ${props => (parseInt(props.even) % 2 == 1 ? '70' : '0')};
`;

const SelectArea = styled.ImageBackground`
  width: 280;
  height: 280;
  border-radius: 280;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  opacity: 0.5;
`;

const InsideText = styled.Text`
  font-weight: bold;
  font-size: 26;
  color: #ffffff;
`;

const PlaceItem = ({ even, imageUri, title }) => {
  return (
    <Container even={even}>
      <TouchableOpacity>
        <SelectArea source={imageUri}>
          <InsideText>{title}</InsideText>
        </SelectArea>
      </TouchableOpacity>
    </Container>
  );
};

export default PlaceItem;
