import React, { useState } from 'react';
import { View, Image, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import AddCharModalCard from './AddCharModalCard';
import exampleImageUri from '../../assets/Preset/SetCharacter/anna.png';

const ModalBackground = styled.View`
  width: 90%;
  height: 68%;
  background-color: #000000;
  opacity: 0.9;
  border-radius: 10;
  position: absolute;
  display: ${props => (props.isActive === true ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
`;

const ModalScrollContainer = styled.ScrollView`
  flex-direction: row;
`;

const SelectedCard = styled.View`
  display: ${props => (props.isActive === true ? 'flex' : 'none')};
  width: 23%;
  height: 90%;
  border-radius: 10;
  position: absolute;
  opacity: 1;
`;

const CharImage = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 10;
`;

const AddCharModal = ({ isModalAcitve }) => {
  const hiddenCharList = [
    { bookTitle: '', name: '', image: '' },
    { bookTitle: '', name: '', image: '' },
    { bookTitle: '', name: '', image: '' },
    { bookTitle: '', name: '', image: '' },
    { bookTitle: '', name: '', image: '' },
    { bookTitle: '', name: '', image: '' },
    { bookTitle: '', name: '', image: '' },
    { bookTitle: '', name: '', image: '' },
    { bookTitle: '', name: '', image: '' },
    { bookTitle: '', name: '', image: '' },
  ];

  return (
    <ModalBackground isActive={isModalAcitve}>
      <ModalScrollContainer horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}>
        {hiddenCharList.map(card => (
          <AddCharModalCard key={card.name} imageUri={card.image} bookTitle={card.bookTitle} />
        ))}
      </ModalScrollContainer>
      <SelectedCard isActive={false}>
        <CharImage source={exampleImageUri} />
      </SelectedCard>
    </ModalBackground>
  );
};

export default AddCharModal;
