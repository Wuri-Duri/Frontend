import React from 'react';
import styled from 'styled-components/native';
import { ScrollView } from 'react-native';
import PlaceItem from './PlaceItem';

const Container = styled.View`
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
    { key: 0, image: require('../../assets/Preset/SetBackground/bgForest.png'), title: '숲 속' },
    { key: 1, image: require('../../assets/Preset/SetBackground/bgDeepSea.png'), title: '깊은 바닷속' },
    { key: 2, image: require('../../assets/Preset/SetBackground/bgPalace.png'), title: '궁전' },
    { key: 3, image: require('../../assets/Preset/SetBackground/bgField.png'), title: '넓은 들판' },
    { key: 4, image: require('../../assets/Preset/SetBackground/bgLake.png'), title: '잔잔한 호수' },
    { key: 5, image: require('../../assets/Preset/SetBackground/bgTown.png'), title: '작은 마을' },
  ];

  return (
    <Container>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <InsideContainer>
          {places.map(place => (
            <PlaceItem key={place.key} id={place.key} imageUrl={place.image} title={place.title} bookInfo={bookInfo} setBookInfo={setBookInfo} />
          ))}
        </InsideContainer>
      </ScrollView>
    </Container>
  );
};

export default SelectBackground;
