import React from 'react';
import { TouchableOpacity, View, Image } from 'react-native';
import styled from 'styled-components/native';

const Conatiner = styled.TouchableOpacity`
  width: 180;
  height: 65%;
  border-radius: 10;
  margin-left: 10;
  margin-right: 10;

  background-color: #151b3b;
`;
//타로카드 뒷면 이미지로 추후 변경

const AddCharModalCard = ({ isSelected, setIsSelected, bookInfo, setBookInfo }) => {
  const selectCard = () => {
    //얘 눌렀을 때 서버에 랜덤한 캐릭터 정보 요청해야

    const newItem = {
      bookTitle: '책 제목이에요',
      name: '주인공 이름',
      image: require('../../assets/Preset/SetCharacter/anna.png'),
    };

    setBookInfo(bookInfo => ({
      ...bookInfo,
      characters: [...bookInfo.characters, newItem],
      isActive: {
        ...bookInfo.isActive,
        character: true,
      },
    }));

    //카드를 선택할 경우 선택된 카드가 가운데 뜨게
    setIsSelected(true);
  };

  return <Conatiner onPress={selectCard}></Conatiner>;
};

export default AddCharModalCard;
