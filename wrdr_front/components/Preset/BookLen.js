import React from 'react';
import { ScrollView, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

const Conatiner = styled.View`
  width: 100%;
  height: 62%;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-end;
  padding-right: 50;
  padding-left: 50;
  padding-bottom: 180;
`;

const SelectArea = styled.TouchableOpacity`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const IconText = styled.Text`
  color: #ffffff;
  font-size: 25;
  font-weight: bold;
  margin-top: 30;
`;

//presetmenu에서 선택시 해당 아이콘 선명하게 바꾸기
//배경 선택시 => 길이선택 버튼 투명도 바뀜, check button 이미지 변경
const BookLen = () => {
  return (
    <Conatiner>
      <SelectArea>
        <Image source={require('../../assets/Preset/SetLength/len1.png')} />
        <IconText>짧은 이야기</IconText>
      </SelectArea>
      <SelectArea>
        <Image source={require('../../assets/Preset/SetLength/len2.png')} />
        <IconText>중간 이야기</IconText>
      </SelectArea>
      <SelectArea>
        <Image source={require('../../assets/Preset/SetLength/len3.png')} />
        <IconText>긴 이야기</IconText>
      </SelectArea>
    </Conatiner>
  );
};

export default BookLen;
