import React, {useState} from 'react';
import {ImageBackground} from 'react-native';
import styled from 'styled-components/native';
import BackgroundImage from './assets/exampleBG.png';
import MyLibraryPage from './pages/MyLibraryPage';
import PresetMenu from './components/Preset/PresetMenu';
import BottomBar from './components/common/BottomBar';

const MainContainer = styled.View`
  position: relative;
  flex: 1;
`

const MainBackgroundImg = styled.ImageBackground`
  flex: 1;
  justify-content: center;
`

const App = ({props}) => {
  return (
    <MainContainer>
      <MainBackgroundImg source={BackgroundImage} resizeMode="cover">
        {/* <MyLibraryPage/>
        <BottomBar/> */}
        <PresetMenu/>
      </MainBackgroundImg>
    </MainContainer>
  );
};

export default App;
