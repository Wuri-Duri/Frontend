import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import BackgroundImage from './assets/background.gif';
import PresetPage from './pages/PresetPage';
import MyLibraryPage from './pages/MyLibraryPage';
import BottomBar from './components/common/BottomBar';
import StoryMakingPage from './pages/StoryMakingPage';
import AfterStoryPage from './pages/AfterStoryPage';
import ReadStoryPage from './pages/ReadStoryPage';
import SplashScreen from 'react-native-splash-screen';

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
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 3000);
  }, []);

  const [pageType, setPageType] = useState('mylibrary');
  const num = useSelector(state => state.makeStory.num);
  const [images, setImages] = useState({
    id: [],
    images: [],
  });

  const [imageDalle, setImageDalle] = useState({});

  const [bookInfo, setBookInfo] = useState({
    characters: [],
    place: null,
    length: null,
    isActive: {
      character: false,
      place: false,
      length: false,
    },
  });

  const [ticketInfo, setTicketInfo] = useState({
    ticketImage: null,
    fairyTaleTitle: null,
    isActive: {
      ticketImage: false,
      fairyTaleTitle: false,
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
        ) : pageType === 'readstory' ? (
          <ReadStoryPage pageType={pageType} setPageType={setPageType} />
        ) : pageType === 'character' || pageType === 'place' || pageType === 'length' ? (
          <PresetPage pageType={pageType} setPageType={setPageType} bookInfo={bookInfo} setBookInfo={setBookInfo} images={images} setImages={setImages} />
        ) : pageType === 'makestory' && bookInfo.length !== num ? (
          <StoryMakingPage
            pageType={pageType}
            setPageType={setPageType}
            bookInfo={bookInfo}
            setBookInfo={setBookInfo}
            setTicketInfo={setTicketInfo}
            imageDalle={imageDalle}
            setImageDalle={setImageDalle}
            images={images}
            setImages={setImages}
          />
        ) : pageType === 'makestory' && bookInfo.length === num ? (
          setPageType('ticketImage')
        ) : pageType === 'ticketImage' || pageType === 'storyTitle' ? (
          <AfterStoryPage
            pageType={pageType}
            setPageType={setPageType}
            bookInfo={bookInfo}
            setBookInfo={setBookInfo}
            imageDalle={imageDalle}
            setImageDalle={setImageDalle}
            images={images}
            setImages={setImages}
            setTicketInfo={setTicketInfo}
            ticketInfo={ticketInfo}
          />
        ) : (
          ''
        )}
      </MainBackgroundImg>
    </MainContainer>
  );
};

export default App;
