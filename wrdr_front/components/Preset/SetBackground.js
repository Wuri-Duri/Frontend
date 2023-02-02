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
  padding-bottom: 200;
`;

const InsideContainer = styled.View`
  width: 100%;
  flex-direction: row;
  margin-left: 50;
  margin-right: 50;
`;

const SelectBackground = () => {
  const places = [
    { id: 0, image: require('../../assets/Preset/SetBackground/bgCabin.png'), title: '산 속 오두막' },
    { id: 1, image: require('../../assets/Preset/SetBackground/bgDeepSea.png'), title: '깊은 바닷속' },
    { id: 2, image: require('../../assets/Preset/SetBackground/bgMagicCastle.png'), title: '마법의 성' },
    { id: 3, image: require('../../assets/Preset/SetBackground/bgSkyIsland.png'), title: '하늘섬' },
    { id: 4, image: require('../../assets/Preset/SetBackground/bgCabin.png'), title: '또 뭐가 있을까' },
  ];

  return (
    <Conatiner>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <InsideContainer>
          {places.map(place => (
            <PlaceItem key={place.id} imageUri={place.image} title={place.title} />
          ))}
        </InsideContainer>
      </ScrollView>
    </Conatiner>
  );
};

export default SelectBackground;
