import React, { useState } from 'react';
import { View, Image, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import AddCharMiniCard from './AddCharMiniCard';

const ModalBackground = styled.View`
  width: 90%;
  height: 68%;
  background-color: #000000;
  opacity: 1;
  border-radius: 10;
  position: absolute;
  display: ${props => (props.isActive === true ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
`;

const ModalScrollContainer = styled.ScrollView`
  flex-direction: row;
`;

const SelectedCard = styled.TouchableOpacity`
  display: ${props => (props.isActive === true ? 'flex' : 'none')};
  width: 23%;
  height: 90%;
  border-radius: 10;
  position: absolute;
`;

const CharImage = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 10;
`;

const AddCharModal = ({ isModalAcitve, setIsModalActive, bookInfo, setBookInfo }) => {
  const [isSelected, setIsSelected] = useState(false);
  const onPressSelectedCard = () => {
    setIsModalActive(false);
    setIsSelected(false);
  };

  function repeeatMiniCard() {
    let array = [];
    for (let i = 0; i < 10; i++) {
      array.push(<AddCharMiniCard isSelected={isSelected} setIsSelected={setIsSelected} bookInfo={bookInfo} setBookInfo={setBookInfo} />);
    }
    return array;
  }

  return (
    <ModalBackground isActive={isModalAcitve}>
      <ModalScrollContainer horizontal={true} scrollEnabled={!isSelected} showsHorizontalScrollIndicator={false} contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}>
        {repeeatMiniCard()}
      </ModalScrollContainer>

      <SelectedCard isActive={isSelected} onPress={onPressSelectedCard}>
        <CharImage source={bookInfo.characters.length > 0 ? bookInfo.characters[bookInfo.characters.length - 1].image : ''} />
      </SelectedCard>
    </ModalBackground>
  );
};

export default AddCharModal;
