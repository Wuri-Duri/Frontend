import React from 'react';
import styled from 'styled-components/native';
import { TouchableOpacity, Image, Text } from 'react-native';

const SelectArea = styled.TouchableOpacity`
  display: flex;
  justify-content: space-between;
  align-items: center;
  opacity: ${props => (props.isActive == true ? '1' : '0.5')};
`;

const IconText = styled.Text`
  color: #ffffff;
  font-size: 25;
  font-weight: bold;
  margin-top: 30;
`;

const LengthItem = ({ id, imageUri, title, bookInfo, setBookInfo }) => {
  const onPressLenBtn = () => {
    setBookInfo(bookInfo => ({
      ...bookInfo,
      length: id,
      isActive: {
        ...bookInfo.isActive,
        length: true,
      },
    }));
  };

  return (
    <SelectArea isActive={bookInfo.length == id} onPress={onPressLenBtn}>
      <Image source={imageUri} />
      <IconText>{title}</IconText>
    </SelectArea>
  );
};

export default LengthItem;