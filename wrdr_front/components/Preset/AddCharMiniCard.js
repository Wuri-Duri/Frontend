import React from 'react';
import { TouchableOpacity, View, Image } from 'react-native';
import styled from 'styled-components/native';

const Conatiner = styled.ImageBackground`
  width: 180;
  height: 90%;
  border-radius: 10;
  margin-top: 40;
  margin-left: 10;
  margin-right: 10;
`;

const AddCharMiniCard = ({ isSelected, setIsSelected, bookInfo, setBookInfo }) => {
  const selectCard = () => {
    const newItem = [
      {
        bookTitle: '콩쥐팥쥐',
        name: '콩쥐',
        image: require('../../assets/Preset/SetCharacter/Kongjwi.png'),
      },
      {
        bookTitle: '흥부와 놀부',
        name: '흥부',
        image: require('../../assets/Preset/SetCharacter/Heungbu.png'),
      },
      {
        bookTitle: '심청전',
        name: '심청',
        image: require('../../assets/Preset/SetCharacter/Simcheong.png'),
      },
      {
        bookTitle: '도깨비 방망이',
        name: '도깨비',
        image: require('../../assets/Preset/SetCharacter/Goblin.png'),
      },
      {
        bookTitle: '선녀와 나무꾼',
        name: '나무꾼',
        image: require('../../assets/Preset/SetCharacter/Woodcutter.png'),
      },
      {
        bookTitle: '피터팬',
        name: '피터팬',
        image: require('../../assets/Preset/SetCharacter/Peterpan.png'),
      },
      {
        bookTitle: '신데렐라',
        name: '신데렐라',
        image: require('../../assets/Preset/SetCharacter/Cinderella.png'),
      },
      {
        bookTitle: '인어공주',
        name: '인어공주',
        image: require('../../assets/Preset/SetCharacter/Mermaid.png'),
      },
      {
        bookTitle: '백설공주',
        name: '백설공주',
        image: require('../../assets/Preset/SetCharacter/SnowWhite.png'),
      },
      {
        bookTitle: '피노키오',
        name: '피노키오',
        image: require('../../assets/Preset/SetCharacter/Pinocchio.png'),
      },
      {
        bookTitle: '라푼젤',
        name: '라푼젤',
        image: require('../../assets/Preset/SetCharacter/Rapunzel.png'),
      },
      {
        bookTitle: '알라딘',
        name: '알라딘',
        image: require('../../assets/Preset/SetCharacter/Aladdin.png'),
      },
    ];

    const randomItem = newItem[Math.floor(Math.random() * newItem.length)];

    setBookInfo(bookInfo => ({
      ...bookInfo,
      characters: [...bookInfo.characters, randomItem],
      isActive: {
        ...bookInfo.isActive,
        character: true,
      },
    }));

    setIsSelected(true);
  };

  return (
    <TouchableOpacity onPress={selectCard}>
      <Conatiner source={require('../../assets/Preset/tarotRocket.png')} />
    </TouchableOpacity>
  );
};

export default AddCharMiniCard;
