import React from 'react';
import styled from 'styled-components/native';
import { View, TouchableOpacity } from 'react-native';
import MainButton from './MainButton';
import BackgroundBar from './BackgroundBar';

const Container = styled.View`
  width: 100%;
  height: 20%;
  position: absolute;
  bottom: 0;
`;

const BottomBar = () => {
  return (
    <Container>
      <MainButton />
      <BackgroundBar />
    </Container>
  );
};

export default BottomBar;
