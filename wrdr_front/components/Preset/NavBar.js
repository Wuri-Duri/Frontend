import { React, useState } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/AntDesign';
Icon.loadFont().then();
//아이콘이 안드로이드에서는 엑박으로 떠서 확인 필요

const NavbarContainer = styled.View`
  width: 100%;
  height: 20%;
  background-color: #000000;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 30;
  padding-right: 30;
`;

const IconContainer = styled.View`
  width: 40%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const SelectArea = styled.TouchableOpacity`
  opacity: ${props => (props.pageType == true ? '1' : '0.6')};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const IconText = styled.Text`
  color: #ffffff;
  font-size: 25;
  font-weight: bold;
  margin-top: 15;
`;

const NavBar = ({ pageType, setPageType }) => {
  const onClickCharBtn = () => {
    if (pageType !== 'character') setPageType('character');
  };

  const onClickPlaceBtn = () => {
    if (pageType !== 'place') setPageType('place');
  };

  const onClickLenBtn = () => {
    if (pageType !== 'length') setPageType('length');
  };

  return (
    <NavbarContainer>
      <Icon name="left" size={50} color="#FFFFFF" />
      <IconContainer>
        <SelectArea pageType={pageType === 'character'} onPress={onClickCharBtn}>
          <Image source={require('../../assets/Preset/NavBar/charMenu.png')} />
          <IconText>인물</IconText>
        </SelectArea>
        <SelectArea pageType={pageType === 'place'} onPress={onClickPlaceBtn}>
          <Image source={require('../../assets/Preset/NavBar/bgMenu.png')} />
          <IconText>배경</IconText>
        </SelectArea>
        <SelectArea pageType={pageType === 'length'} onPress={onClickLenBtn}>
          <Image source={require('../../assets/Preset/NavBar/lenMenu.png')} />
          <IconText>길이</IconText>
        </SelectArea>
      </IconContainer>
      <Icon name="right" size={50} color="#FFFFFF" />
    </NavbarContainer>
  );
};

export default NavBar;
