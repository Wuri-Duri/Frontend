import React, { useState } from 'react';
import styled from 'styled-components/native';
import { ScrollView, View, Image, TouchableOpacity } from 'react-native';
import PlaceItem from './PlaceItem';

const Conatiner = styled.View`
  width: 100%;
  height: 65%;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-end;
  padding-bottom: 170;
`;

const InsideContainer = styled.View`
  width: 100%;
  flex-direction: row;
  margin-left: 50;
  margin-right: 50;
`;

const SelectBackground = ({ bookInfo, setBookInfo }) => {
  const places = [
    { key: 0, image: require('../../assets/Preset/SetBackground/bgCabin.png'), title: '산 속 오두막' },
    { key: 1, image: require('../../assets/Preset/SetBackground/bgDeepSea.png'), title: '깊은 바닷속' },
    { key: 2, image: require('../../assets/Preset/SetBackground/bgMagicCastle.png'), title: '마법의 성' },
    { key: 3, image: require('../../assets/Preset/SetBackground/bgSkyIsland.png'), title: '하늘섬' },
    { key: 4, image: require('../../assets/Preset/SetBackground/bgCabin.png'), title: '또 뭐가 있을까' },
  ];

  return (
    <Conatiner>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <InsideContainer>
          {places.map(place => (
            <PlaceItem key={place.key} id={place.key} imageUri={place.image} title={place.title} bookInfo={bookInfo} setBookInfo={setBookInfo} />
          ))}
        </InsideContainer>
      </ScrollView>
    </Conatiner>
  );
};

export default SelectBackground;
