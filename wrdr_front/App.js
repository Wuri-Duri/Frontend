import React, { useState } from 'react';
import { ImageBackground } from 'react-native';
import styled from 'styled-components/native';
import BackgroundImage from './assets/exampleBG.png';
import PresetPage from './pages/PresetPage';
import MyLibraryPage from './pages/MyLibraryPage';
import BottomBar from './components/common/BottomBar';

const MainContainer = styled.View`
  position: relative;
  width: 100%;
  height: 100%;
  flex: 1;
`;

const MainBackgroundImg = styled.ImageBackground`
  flex: 1;
  justify-content: center;
`;

const App = ({ props }) => {
  return (
    <MainContainer>
      <MainBackgroundImg source={BackgroundImage} resizeMode="cover">
        <PresetPage />
        {/* <MyLibraryPage />
        <BottomBar /> */}
      </MainBackgroundImg>
    </MainContainer>
  );
};

export default App;
