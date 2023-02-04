import React from 'react';
import styled from 'styled-components/native';
import { View, TouchableOpacity } from 'react-native';
import CircleButton from './CircleButton';
import BackgroundBar from './BackgroundBar';

const Container = styled.View`
  width: 100%;
  height: 20%;
  position: absolute;
  bottom: 0;
`;

const BottomBar = ({ pageType, setPageType }) => {
  return (
    <Container>
      <CircleButton pageType={pageType} setPageType={setPageType} />
      <BackgroundBar />
    </Container>
  );
};

export default BottomBar;
