import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/AntDesign';
Icon.loadFont().then();

const Conatiner = styled.View`
  width: 100%;
  height: 65%;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-end;
  padding-bottom: 200;
`;

const SetCharacter = () => {
  return <Conatiner></Conatiner>;
};

export default SetCharacter;
