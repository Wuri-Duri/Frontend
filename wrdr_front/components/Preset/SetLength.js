import React from 'react';
import { ScrollView, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import LengthItem from './LengthItem';

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

const SetLength = ({ bookInfo, setBookInfo }) => {
  const lengthList = [
    { key: 0, image: require('../../assets/Preset/SetLength/len1.png'), title: '짧은 이야기' },
    { key: 1, image: require('../../assets/Preset/SetLength/len2.png'), title: '중간 이야기' },
    { key: 2, image: require('../../assets/Preset/SetLength/len3.png'), title: '긴 이야기' },
  ];

  return (
    <Conatiner>
      {lengthList.map(length => (
        <LengthItem key={length.key} id={length.key} imageUri={length.image} title={length.title} bookInfo={bookInfo} setBookInfo={setBookInfo} />
      ))}
    </Conatiner>
  );
};

export default SetLength;
