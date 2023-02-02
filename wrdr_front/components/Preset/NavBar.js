import { React, useState } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/AntDesign';
Icon.loadFont().then();
//아이콘이 안드로이드에서는 엑박으로 떠서 확인 필요
//아이콘 클릭시에 따라 하단 컴포넌트 교체 및 네브바 아이콘 opacity 조절 - props 활용

const NavbarContainer = styled.View`
  width: 100%;
  height: 20%;
  background-color: #000000;
  opacity: 0.7;
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
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const IconText = styled.Text`
  color: #ffffff;
  font-size: 25;
  font-weight: bold;
  margin-top: 10;
`;

const NavBar = () => {
  const [clikedInfo, setClickedInfo] = useState([
    { id: 'character', isClicked: true },
    { id: 'background', isClicked: false },
    { id: 'length', isClicked: false },
  ]);

  return (
    <NavbarContainer>
      <Icon name="left" size={50} color="#FFFFFF" />
      <IconContainer>
        <SelectArea isClicked={true}>
          <Image source={require('../../assets/Preset/NavBar/charMenu.png')} />
          <IconText>인물</IconText>
        </SelectArea>
        <SelectArea isClicked={false}>
          <Image source={require('../../assets/Preset/NavBar/bgMenu.png')} />
          <IconText>배경</IconText>
        </SelectArea>
        <SelectArea isClicked={false}>
          <Image source={require('../../assets/Preset/NavBar/lenMenu.png')} />
          <IconText>길이</IconText>
        </SelectArea>
      </IconContainer>
      <Icon name="right" size={50} color="#FFFFFF" />
    </NavbarContainer>
  );
};

export default NavBar;
