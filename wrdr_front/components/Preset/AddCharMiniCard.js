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

    const newItem = {
      bookTitle: '겨울왕국',
      name: '안나',
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

  return (
    <TouchableOpacity onPress={selectCard}>
      <Conatiner source={require('../../assets/Preset/tarotRocket.png')} />
    </TouchableOpacity>
  );
};

export default AddCharMiniCard;
