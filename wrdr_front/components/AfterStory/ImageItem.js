import React from 'react';
import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { getTicketImage } from '../../modules/ticket';

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

const ImageItem = ({ id, imageUrl, ticketInfo, setTicketInfo }) => {
  const ticketImage = useSelector(state => state.ticket.ticketImage);
  const dispatch = useDispatch();

  const onPressPlaceBtn = () => {
    setTicketInfo(ticketInfo => ({
      ...ticketInfo,
      ticketImage: imageUrl,
      isActive: {
        ...ticketInfo.isActive,
        ticketImage: true,
      },
    })),
      dispatch(getTicketImage(imageUrl));
  };
  console.log('아아ㅏㅇ앙: ', ticketInfo.ticketImage);

  return (
    <Container>
      <TouchableOpacity onPress={onPressPlaceBtn}>
        <SelectArea src={imageUrl} isActive={ticketInfo.ticketImage === id} />
      </TouchableOpacity>
    </Container>
  );
};

export default ImageItem;
