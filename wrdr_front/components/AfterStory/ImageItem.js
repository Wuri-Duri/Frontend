import React from 'react';
import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

const Container = styled.View`
  border-radius: 20;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 10;
  margin-right: 5;
`;

const SelectArea = styled.ImageBackground`
  width: 150;
  height: 230;
  border-radius: 20;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  opacity: ${props => (props.isActive === true ? '0.8' : '0.4')};
`;

const ImageItem = ({ id, imageUri, ticketInfo, setTicketInfo }) => {
  const onPressPlaceBtn = () => {
    setTicketInfo(ticketInfo => ({
      ...ticketInfo,
      ticketImage: {
        id: id,
        image: imageUri,
      },
      isActive: {
        ...ticketInfo.isActive,
        ticketImage: true,
      },
    }));
  };

  return (
    <Container>
      <TouchableOpacity onPress={onPressPlaceBtn}>
        <SelectArea source={imageUri} isActive={ticketInfo.ticketImage.id === id} />
      </TouchableOpacity>
    </Container>
  );
};

export default ImageItem;
