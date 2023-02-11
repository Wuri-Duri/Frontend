
import React, { useState } from 'react';
import { ImageBackground } from 'react-native';
import styled from 'styled-components/native';
import BackgroundImage from './assets/exampleBG.png';
import PresetPage from './pages/PresetPage';
import MyLibraryPage from './pages/MyLibraryPage';
import BottomBar from './components/common/BottomBar';
import AIStory from './components/StoryMaking/AIStory';
import StoryMakingPage from './pages/StoryMakingPage';

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
  const [pageType, setPageType] = useState('mylibrary');

  return (
    <MainContainer>
      <MainBackgroundImg source={BackgroundImage} resizeMode="cover">
        {pageType === 'mylibrary' ? (
          <>
            <MyLibraryPage pageType={pageType} setPageType={setPageType} />
            <BottomBar pageType={pageType} setPageType={setPageType} />
          </>
        ) : pageType === 'character' || pageType === 'place' || pageType === 'length' ? (
          <PresetPage pageType={pageType} setPageType={setPageType} />
        ) : pageType === 'makestory' ? (
          <StoryMakingPage pageType={pageType} setPageType={setPageType} />
        ) : (
          ''
        )}
      </MainBackgroundImg>
    </MainContainer>
  );
};

export default App;
