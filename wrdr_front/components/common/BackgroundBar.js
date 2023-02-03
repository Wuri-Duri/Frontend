import React from 'react';
import styled from 'styled-components/native';
import { TouchableOpacity, Image } from 'react-native';
import left from '../../assets/BottomBar/BottomBar_background_left.png';
import right from '../../assets/BottomBar/BottomBar_background_right.png';

const Container = styled.View`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 60%;

  align-items: center;
  flex-direction: column;
  justify-content: flex-end;

  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Piece = styled.Image`
  position: relative;
  display: flex;
`;

//추후 기능에 따라 네비게이션 아이콘 추가 (검색, 내 정보 등)
const Icon = styled.TouchableOpacity``;

const BackgroundBar = () => {
  return (
    <Container>
      <Piece source={left} />
      <Piece source={right} />
    </Container>
  );
};

export default BackgroundBar;
