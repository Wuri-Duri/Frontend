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
//타로카드 뒷면 이미지로 추후 변경

const AddCharMiniCard = ({ isSelected, setIsSelected, bookInfo, setBookInfo }) => {
  const selectCard = () => {
    //얘 눌렀을 때 서버에 랜덤한 캐릭터 정보 요청해야
    //지금은 서버 연결 안 했으니까 수동으로 바꿔볼게요

    const newItem = [
      {
        bookTitle: '콩쥐팥쥐',
        name: '콩쥐',
        image: require('../../assets/Preset/SetCharacter/anna.png'),
      },
      {
        bookTitle: '흥부와 놀부',
        name: '흥부',
        image: require('../../assets/Preset/SetCharacter/anna.png'),
      },
      {
        bookTitle: '심청전',
        name: '심청',
        image: require('../../assets/Preset/SetCharacter/anna.png'),
      },
      {
        bookTitle: '도깨비 방망이',
        name: '도깨비',
        image: require('../../assets/Preset/SetCharacter/anna.png'),
      },
      {
        bookTitle: '선녀와 나무꾼',
        name: '나무꾼',
        image: require('../../assets/Preset/SetCharacter/anna.png'),
      },
      {
        bookTitle: '피터팬',
        name: '피터팬',
        image: require('../../assets/Preset/SetCharacter/anna.png'),
      },
      {
        bookTitle: '신데렐라',
        name: '신데렐라',
        image: require('../../assets/Preset/SetCharacter/anna.png'),
      },
      {
        bookTitle: '인어공주',
        name: '인어공주',
        image: require('../../assets/Preset/SetCharacter/anna.png'),
      },
      {
        bookTitle: '백설공주',
        name: '백설공주',
        image: require('../../assets/Preset/SetCharacter/anna.png'),
      },
      {
        bookTitle: '피노키오',
        name: '피노키오',
        image: require('../../assets/Preset/SetCharacter/anna.png'),
      },
      {
        bookTitle: '라푼젤',
        name: '라푼젤',
        image: require('../../assets/Preset/SetCharacter/anna.png'),
      },
      {
        bookTitle: '알라딘',
        name: '알라딘',
        image: require('../../assets/Preset/SetCharacter/anna.png'),
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

    // console.log(bookInfo);

    //카드를 선택할 경우 선택된 카드가 가운데 뜨게
    setIsSelected(true);
  };

  return (
    <TouchableOpacity onPress={selectCard}>
      <Conatiner source={require('../../assets/Preset/tarotRocket.png')} />
    </TouchableOpacity>
  );
};

export default AddCharMiniCard;
