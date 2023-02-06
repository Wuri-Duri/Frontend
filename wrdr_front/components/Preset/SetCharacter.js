import React, { useState } from 'react';
import { View, Image } from 'react-native';
import styled from 'styled-components/native';
import AddCharCard from './AddCharCard';
import NewCharCard from './NewCharCard';
import ModalBackground from './AddCharModal';
import Icon from 'react-native-vector-icons/AntDesign';
Icon.loadFont().then();

const Conatiner = styled.View`
  width: 100%;
  height: 65%;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
`;

const SetCharacter = ({ bookInfo, setBookInfo }) => {
  const [isModalAcitve, setIsModalActive] = useState(false);

  return (
    <Conatiner>
      {bookInfo.characters.map(character => (
        <NewCharCard key={character.name} bookTitle={character.bookTitle} name={character.name} image={character.image} />
      ))}
      {bookInfo.characters.length < 3 ? <AddCharCard charLength={bookInfo.characters.length} setIsModalActive={setIsModalActive} /> : ''}
      <ModalBackground isModalAcitve={isModalAcitve} />
    </Conatiner>
  );
};

export default SetCharacter;
