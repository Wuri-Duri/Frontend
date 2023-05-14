import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import BackgroundImage from './assets/background.gif';
import PresetPage from './pages/PresetPage';
import MyLibraryPage from './pages/MyLibraryPage';
import BottomBar from './components/common/BottomBar';
import StoryMakingPage from './pages/StoryMakingPage';
import AfterStoryPage from './pages/AfterStoryPage';

import { useSelector } from 'react-redux';

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
  const num = useSelector(state => state.makeStory.num);

  const [bookInfo, setBookInfo] = useState({
    characters: [''],
    place: null,
    length: null,
    isActive: {
      character: false,
      place: false,
      length: false, //나중에는 length만이 아니라 나머지 요소들이 모두 true일 때 true가 되도록 변경해야 함. 우선 length만 해둠.
    },
  });

  return (
    <MainContainer>
      <MainBackgroundImg source={BackgroundImage} resizeMode="cover">
        {pageType === 'mylibrary' ? (
          <>
            <MyLibraryPage pageType={pageType} setPageType={setPageType} />
            <BottomBar pageType={pageType} setPageType={setPageType} />
          </>
        ) : pageType === 'character' || pageType === 'place' || pageType === 'length' ? (
          <PresetPage pageType={pageType} setPageType={setPageType} bookInfo={bookInfo} setBookInfo={setBookInfo} />
        ) : pageType === 'makestory' && bookInfo.length !== num ? (
          <StoryMakingPage pageType={pageType} setPageType={setPageType} bookInfo={bookInfo} setBookInfo={setBookInfo} />
        ) : pageType === 'makestory' && bookInfo.length === num ? (
          setPageType('ticketImage')
        ) : pageType === 'ticketImage' || pageType === 'storyTitle' ? (
          <AfterStoryPage pageType={pageType} setPageType={setPageType} bookInfo={bookInfo} setBookInfo={setBookInfo} />
        ) : (
          ''
        )}
      </MainBackgroundImg>
    </MainContainer>
  );
};

export default App;
