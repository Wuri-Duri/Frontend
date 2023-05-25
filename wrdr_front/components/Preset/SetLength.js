import React from 'react';
import styled from 'styled-components/native';
import LengthItem from './LengthItem';

const Container = styled.View`
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
    { key: 5, image: require('../../assets/Preset/SetLength/len1.png'), title: '짧은 이야기' },
    { key: 11, image: require('../../assets/Preset/SetLength/len2.png'), title: '중간 이야기' },
    { key: 31, image: require('../../assets/Preset/SetLength/len3.png'), title: '긴 이야기' },
  ];

  return (
    <Container>
      {lengthList.map(length => (
        <LengthItem key={length.key} id={length.key} imageUrl={length.image} title={length.title} bookInfo={bookInfo} setBookInfo={setBookInfo} />
      ))}
    </Container>
  );
};

export default SetLength;
