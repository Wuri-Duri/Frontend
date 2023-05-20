import React, { useState, useEffect } from 'react';
import Styled from 'styled-components/native';
import AIStory from '../components/StoryMaking/AIStory';
import Voice from '@react-native-voice/voice';
import recordActive from '../assets/BottomBar/BottomBar_button_record_active.png';
import recordInactive from '../assets/BottomBar/BottomBar_button_record_inactive.png';
import nextButton from '../assets/nextButton.png';

import { useSelector, useDispatch } from 'react-redux';
import { getAllText, getPageNum, getUserText, getStoryImage, getAIText } from '../modules/makeStory';

import { grammarCorrect, postStoryText, requestMiddleSentence, requestLastSentence, requestDALLEAPI, requestPAPAGOAPI } from '../lib/api/fairytale';

import { Animated, Easing } from 'react-native';

const MainContainer = Styled.View`
  width: 100%;
  height: 100%;
  flex: 1;
  justify-content: center;
  align-items: center;
  position: absolute;
`;

const ButtonContainer = Styled.TouchableOpacity`
  position: absolute;
  padding-top: 650;
 
`;
const ButtonRecord = Styled.Image`
  width: 90;
  height: 90;
`;

const Icon = Styled.Image`
  display: flex;
  position: relative;
  width: 70%;
  height: 70%;
  resize-mode: contain;
`;

const NextButtonContainer = Styled.View`
  display: flex;
  width: 100;
  height: 100;
  background-color: '#FFB966' ;
  border-radius: 100;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const HomeButtonContainer = Styled.TouchableOpacity`
  position: relative;
  align-self: flex-start;
`;

const StoryMakingPage = ({ setPageType, imageDalle, setImageDalle, images, setImages, bookInfo }) => {
  const [storyText, setStoryText] = useState();

  const [isRecord, setIsRecord] = useState(false);
  const [recordFinish, setRecordFinish] = useState(false);
  const [isText, setIsText] = useState(false);
  const [change, setChange] = useState(false);
  const [grammar, setGrammar] = useState();
  const [doubleChange, setDoubleChange] = useState(false);
  const [speakingText, setSpeakingText] = useState('');
  const [lastCall, setLastCall] = useState(false);
  // const [collectText, setCollectText] = useState();

  const [fadeOutAnim] = useState(new Animated.Value(1));

  const num = useSelector(state => state.makeStory.num);
  const idx = useSelector(state => state.ticket.ticketIdx);
  const aiMadeText = useSelector(state => state.makeStory.aiText);
  const userMadeText = useSelector(state => state.makeStory.userText);
  const dalleMadeImage = useSelector(state => state.makeStory.dalleUrl);
  const stackedText = useSelector(state => state.makeStory.allText);

  const dispatch = useDispatch();

  const _onRecordVoice = () => {
    if (isRecord) {
      Voice.stop();
      setRecordFinish(!recordFinish);
    } else {
      Voice.start('ko-KR');
    }
    setIsRecord(!isRecord);
  };

  const _onGenerateAIText = async () => {
    try {
      dispatch(getPageNum(num));
      setChange(!change);

      await postStoryText(idx, aiMadeText, dalleMadeImage);

      const grammar = await grammarCorrect(userMadeText);

      let nextSentence;
      let papago;
      let url;
      let collectText;

      collectText = stackedText + grammar;

      if (bookInfo.length - 3 === num) {
        const [lastSentence, papagoResult] = await Promise.all([requestLastSentence(collectText), requestPAPAGOAPI(grammar)]);
        nextSentence = lastSentence;
        papago = papagoResult;
        url = await requestDALLEAPI(papago);
      } else if (bookInfo.length - 2 > num) {
        const [middleSentence, papagoResult] = await Promise.all([requestMiddleSentence(collectText), requestPAPAGOAPI(grammar)]);
        nextSentence = middleSentence;
        papago = papagoResult;
        url = await requestDALLEAPI(papago);
      }

      dispatch(getUserText(grammar));
      dispatch(getAllText(collectText));
      dispatch(getAIText(nextSentence));
      dispatch(getStoryImage(url));

      (collectText = ''), (nextSentence = ''), (papago = ''), (url = '');
      // // 화면 페이드 아웃 애니메이션
      // Animated.timing(fadeOutAnim, {
      //   toValue: 0, // 목표값 (완전히 사라짐)
      //   duration: 10000, // 애니메이션 진행 시간 (10초)
      //   easing: Easing.linear, // 이징 함수 (선형)
      //   useNativeDriver: true, // 네이티브 드라이버 사용 (성능 향상)
      // }).start(() => {
      //   // 애니메이션 완료 후 페이지 전환 등 필요한 작업 수행
      //   // 예를 들면, setPageType('newPageType') 등
      //   setPageType('');
      // });
    } catch (error) {
      console.log('API error: ', error);
    }
  };

  const _onClickNextPage = async () => {
    dispatch(getPageNum(num));
    setRecordFinish(false);
    setGrammar('');
    setChange(!change);
    setDoubleChange(!doubleChange);
    dispatch(getStoryImage(await requestDALLEAPI(await requestPAPAGOAPI(aiMadeText))));
    await postStoryText(idx, userMadeText, dalleMadeImage);
    dispatch(getAllText(stackedText + aiMadeText));
    setSpeakingText('');

    if (bookInfo.length - 2 === num) {
      setLastCall(!lastCall);
    }
  };

  const _onLastPage = async () => {
    dispatch(getPageNum(num));
    await postStoryText(idx, aiMadeText, dalleMadeImage);
  };

  return (
    <MainContainer>
      <AIStory
        storyText={storyText}
        setStoryText={setStoryText}
        imageDalle={imageDalle}
        setImageDalle={setImageDalle}
        images={images}
        setImages={setImages}
        isText={isText}
        setIsText={setIsText}
        isRecord={isRecord}
        setIsRecord={setIsRecord}
        recordFinish={recordFinish}
        setRecordFinish={setRecordFinish}
        change={change}
        setChange={setChange}
        grammar={grammar}
        setGrammar={setGrammar}
        doubleChange={doubleChange}
        setDoubleChange={setDoubleChange}
        speakingText={speakingText}
        setSpeakingText={setSpeakingText}
        lastCall={lastCall}
        setLastCall={setLastCall}
      />

      {bookInfo.length - 1 === num ? (
        <ButtonContainer onPress={_onLastPage}>
          <ButtonRecord source={nextButton} />
        </ButtonContainer>
      ) : !change && recordFinish ? (
        <ButtonContainer onPress={_onGenerateAIText}>
          <ButtonRecord source={nextButton} />
        </ButtonContainer>
      ) : change && recordFinish ? (
        <ButtonContainer onPress={_onClickNextPage}>
          <ButtonRecord source={nextButton} />
        </ButtonContainer>
      ) : !isRecord ? (
        <ButtonContainer onPress={_onRecordVoice}>
          <ButtonRecord source={recordActive} />
        </ButtonContainer>
      ) : isRecord && !recordFinish ? (
        <ButtonContainer onPress={_onRecordVoice}>
          <ButtonRecord source={recordInactive} />
        </ButtonContainer>
      ) : (
        ''
      )}
    </MainContainer>
  );
};

export default StoryMakingPage;
