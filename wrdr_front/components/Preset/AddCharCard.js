import React from 'react';
import styled from 'styled-components/native';
import plus from '../../assets/BottomBar/BottomBar_button_plus.png';

const Conatiner = styled.TouchableOpacity`
  width: 22%;
  height: 67%;
  justify-content: center;
  align-items: center;
  background-color: #000000;
  border-radius: 10;
  opacity: 0.8;
  margin-left: 10;
  margin-right: 10;
`;

const PlusIcon = styled.Image`
  width: 15%;
  height: 15%;
  resize-mode: contain;
`;

const SubText = styled.Text`
  color: #ffffff;
  font-size: 20;
  margin-top: 20;
  font-family: jalnan;
  display: ${props => (props.isActive === true ? 'flex' : 'none')};
`;

const AddCharCard = ({ charLength, setIsModalActive }) => {
  const openDrawingModal = () => {
    setIsModalActive(true);
  };

  return (
    <Conatiner onPress={openDrawingModal}>
      <PlusIcon source={plus} />
      <SubText isActive={charLength === 1 || charLength === 2}>더 뽑을 수도 있어요!</SubText>
    </Conatiner>
  );
};

export default AddCharCard;
