import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';
import PresetMenu from './NavBar';
import CircleBG from '../../components/Preset/CircleBG';

const TitleContianer = styled.View`
  width: 100%;
  height: 15%;
  justify-content: center;
  align-items: center;
`;

const TitleText = styled.Text`
  color: #ffffff;
  font-size: 30;
  font-weight: bold;
`;

const Title = () => {
  return (
    <TitleContianer>
      <TitleText>우리의 이야기는 어디서 시작하나요?</TitleText>
    </TitleContianer>
  );
};

export default Title;
