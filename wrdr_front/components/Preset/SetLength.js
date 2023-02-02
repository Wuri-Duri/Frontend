import React from 'react';
import { ScrollView, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

const Conatiner = styled.View`
  width: 100%;
  height: 65%;
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
  opacity: 0.5;
`;

const IconText = styled.Text`
  color: #ffffff;
  font-size: 25;
  font-weight: bold;
  margin-top: 30;
`;

const SetLength = () => {
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

export default SetLength;
