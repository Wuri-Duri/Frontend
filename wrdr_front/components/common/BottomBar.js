import React from 'react';
import styled from 'styled-components/native';
import { View, TouchableOpacity } from 'react-native';
import PlusButton from './PlusButton';
import BackgroundBar from './BackgroundBar';

const Container = styled.View`
  height: 20%;
  position: relative;
`;

const HomeButtonContainer = styled.TouchableOpacity`
  width: 95;
  height: 95;
  position: absolute;
  align-self: center;
  bottom: 25%;
`;

const BottomBar = () => {
  return (
    <Container>
      <HomeButtonContainer>
        <PlusButton />
      </HomeButtonContainer>
      <BackgroundBar />
    </Container>
  );
};

export default BottomBar;
