import { React } from 'react';
import { Image } from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/AntDesign';
Icon.loadFont().then();

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
  opacity: ${props => (props.isActive == true ? '1' : '0.6')};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const IconText = styled.Text`
  color: #ffffff;
  font-size: 25;
  font-weight: bold;
  margin-top: 15;
  font-family: jalnan;
`;

const BtnContainer = styled.TouchableOpacity``;

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

  const onClickBackBtn = () => {
    setPageType('mylibrary');
  };

  return (
    <NavbarContainer>
      <BtnContainer onPress={onClickBackBtn}>
        <Icon name="left" size={50} color="#FFFFFF" />
      </BtnContainer>
      <IconContainer>
        <SelectArea isActive={pageType === 'character'} onPress={onClickCharBtn}>
          <Image source={require('../../assets/Preset/NavBar/charMenu.png')} />
          <IconText>인물</IconText>
        </SelectArea>
        <SelectArea isActive={pageType === 'place'} onPress={onClickPlaceBtn}>
          <Image source={require('../../assets/Preset/NavBar/bgMenu.png')} />
          <IconText>배경</IconText>
        </SelectArea>
        <SelectArea isActive={pageType === 'length'} onPress={onClickLenBtn}>
          <Image source={require('../../assets/Preset/NavBar/lenMenu.png')} />
          <IconText>길이</IconText>
        </SelectArea>
      </IconContainer>
      <BtnContainer style={{ opacity: 0 }} disabled>
        <Icon name="right" size={50} color="#FFFFFF" />
      </BtnContainer>
    </NavbarContainer>
  );
};

export default NavBar;
