import React from 'react';
import { TouchableOpacity, View, Image } from 'react-native';
import styled from 'styled-components/native';

const Conatiner = styled.TouchableOpacity`
  width: 180;
  height: 65%;
  border-radius: 10;
  margin-left: 10;
  margin-right: 10;

  background-color: yellow;
`;

const AddCharModalCard = ({}) => {
  const openDrawingModal = () => {};

  return <Conatiner onPress={openDrawingModal}></Conatiner>;
};

export default AddCharModalCard;
