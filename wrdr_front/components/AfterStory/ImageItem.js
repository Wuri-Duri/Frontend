import React from 'react';
import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { getTicketImage } from '../../modules/ticket';

const View = styled.View``;

const Container = styled.View`
  border-radius: 20px;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 10px;
`;

const SelectArea = styled.ImageBackground`
  width: 150px;
  height: 230px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  opacity: ${props => (props.isActive === true ? '0.8' : '0.4')};
`;

const ImageItem = ({ id, imageUrl, ticketInfo, setTicketInfo }) => {
  const dispatch = useDispatch();
  const imageList = useSelector(state => state.makeStory.allImageList);
  const isLastItem = id === imageList.length - 1;

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

  return (
    <View style={{ flex: 1, marginRight: isLastItem ? 0 : 5 }}>
      <Container>
        <TouchableOpacity onPress={onPressPlaceBtn}>
          <SelectArea src={imageUrl} isActive={ticketInfo.ticketImage === id} />
        </TouchableOpacity>
      </Container>
    </View>
  );
};

export default ImageItem;
