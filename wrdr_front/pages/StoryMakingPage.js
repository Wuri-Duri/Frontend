import React, { useState } from 'react';
import Styled from 'styled-components/native';
import AIStory from '../components/StoryMaking/AIStory';
import Voice from '@react-native-voice/voice';
import recordActive from '../assets/BottomBar/BottomBar_button_record_active.png';
import recordInactive from '../assets/stopButton.png';
import nextButton from '../assets/nextButton.png';
import inactiveNextButton from '../assets/inactiveNextButton.png';
import finishButton from '../assets/finishButton.png';
import inactiveRecordButton from '../assets/BottomBar/BottomBar_button_record_inactive.png';
import clearButton from '../assets/XButton.png';
import { useSelector, useDispatch } from 'react-redux';
import { initText, getQuestion, getAllText, getPageNum, getUserText, getStoryImage, getAIText, getRandomNum, getSelectText1, getSelectText2, getGrammarCorrect } from '../modules/makeStory';
import { initPreset } from '../modules/presetStory';
import { grammarCorrect, postStoryText, requestMiddleSentence, requestLastSentence, requestDALLEAPI, requestPAPAGOAPI, requestQuestion, requestMiddleSentence2 } from '../lib/api/fairytale';

const PageContainer = Styled.View`
  flex: 1;

`;

const MainContainer = Styled.View`
  width: 100%;
  height: 100%;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const ButtonContainer = Styled.TouchableOpacity`
  position: absolute;
  padding-top: 650px;
`;

const ButtonRecord = Styled.Image`
  width: 90px;
  height: 90px;
`;

const Icon = Styled.Image`
  display: flex;
  position: relative;
  width: 70%;
  height: 70%;
  resize-mode: contain;
`;

const XButtonContainer = Styled.TouchableOpacity`
  align-items: flex-start;
  position: absolute;
  width: 100;
  height: 60;
  zIndex: 1;

`;

const XButton = Styled.Image`
  width: 100%;
  height: 100%;
  margin-top: 30%;
  margin-left: 10%;
`;

const StoryMakingPage = ({ setPageType, setBookInfo, setTicketInfo, imageDalle, setImageDalle, images, setImages, bookInfo }) => {
  const [storyText, setStoryText] = useState();

  const [isRecord, setIsRecord] = useState(false);
  const [recordFinish, setRecordFinish] = useState(false);
  const [isText, setIsText] = useState(false);
  const [change, setChange] = useState(false);
  const [doubleChange, setDoubleChange] = useState(false);
  const [speakingText, setSpeakingText] = useState('');
  const [lastCall, setLastCall] = useState(false);
  const [selectPage, setSelectPage] = useState(false);
  const [selectText, setSelectText] = useState(false);
  const [isCorrected, setIsCorrected] = useState(false);
  const [select1, setSelect1] = useState(false);
  const [select2, setSelect2] = useState(false);
  const [startTyping, setStartTyping] = useState(false);

  const num = useSelector(state => state.makeStory.num);
  const idx = useSelector(state => state.ticket.ticketIdx);
  const aiMadeText = useSelector(state => state.makeStory.aiText);
  const userMadeText = useSelector(state => state.makeStory.userText);
  const dalleMadeImage = useSelector(state => state.makeStory.dalleUrl);
  const stackedText = useSelector(state => state.makeStory.allText);
  const selectedText = useSelector(state => state.makeStory.selectedText);
  const correctedText = useSelector(state => state.makeStory.correctedText);
  const recordVoice = useSelector(state => state.makeStory.recordVoice);
  const allImageList = useSelector(state => state.makeStory.allImageList);
  const selectText2 = useSelector(state => state.makeStory.selectText2);
  const questionText = useSelector(state => state.makeStory.question);
  const [pressTyping, setPressTyping] = useState(false);
  const randomNum = useSelector(state => state.makeStory.randomNum);

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
      dispatch(getAIText(''));

      await postStoryText(idx, aiMadeText, dalleMadeImage);

      inputSentence = correctedText;

      let inputSentence;

      console.log('example ', inputSentence);

      dispatch(getUserText(inputSentence));

      let nextSentence;
      let papago;
      let url;
      let collectText;

      collectText = stackedText + inputSentence;

      if (bookInfo.length - 3 === num) {
        const [lastSentence, papagoResult] = await Promise.all([requestLastSentence(collectText), requestPAPAGOAPI(inputSentence)]);
        nextSentence = lastSentence;
        papago = papagoResult;
        url = await requestDALLEAPI(papago);
      } else if (bookInfo.length - 2 > num) {
        const [middleSentence, papagoResult] = await Promise.all([requestMiddleSentence(collectText), requestPAPAGOAPI(inputSentence)]);
        nextSentence = middleSentence;
        papago = papagoResult;
        url = await requestDALLEAPI(papago);
      }

      dispatch(getAllText(collectText));
      dispatch(getAIText(nextSentence));
      dispatch(getStoryImage(url));

      dispatch(getQuestion(''));

      (collectText = ''), (nextSentence = ''), (papago = ''), (url = ''), (inputSentence = '');
    } catch (error) {
      console.log('API error: ', error);
    }
  };

  const _onClickNextPage = async () => {
    dispatch(getPageNum(num));
    setSpeakingText('');
    setIsCorrected(false);
    setStartTyping(false);

    if (bookInfo.length - 2 === num) {
      setLastCall(!lastCall);
    }

    const randomNum = Math.floor(Math.random() * 3);
    // const randomNum = 1;
    dispatch(getRandomNum(randomNum));
    if (randomNum === 2) {
      setSelectPage(true); //selectPage -> true
    }

    setRecordFinish(false);
    setChange(!change);
    setDoubleChange(!doubleChange);
    dispatch(getStoryImage(await requestDALLEAPI(await requestPAPAGOAPI(aiMadeText))));
    await postStoryText(idx, userMadeText, dalleMadeImage);
    dispatch(getAllText(stackedText + aiMadeText));

    if (randomNum === 1) {
      console.log('Entering if randomNum === 1');
      dispatch(getQuestion(await requestQuestion(stackedText + aiMadeText)));
    } else if (randomNum === 2) {
      console.log('Entering if randomNum === 2');
      dispatch(getSelectText1(await requestMiddleSentence(stackedText + aiMadeText)));
      dispatch(getSelectText2(await requestMiddleSentence2(stackedText + aiMadeText)));
    } else {
      ('');
    }
  };

  const _onGrammarCorrect = async () => {
    const grammarCorrectedText = await grammarCorrect(userMadeText);
    dispatch(getGrammarCorrect(grammarCorrectedText));
    dispatch(getUserText(grammarCorrectedText));
    setIsCorrected(true);
  };

  const _onLastPage = async () => {
    dispatch(getPageNum(num));
    await postStoryText(idx, aiMadeText, dalleMadeImage);
  };

  const _onSelectText = async () => {
    try {
      setChange(!change);
      dispatch(getPageNum(num));
      setSelectPage(false);
      setSelectText(false);
      dispatch(getAIText(''));
      dispatch(getUserText(selectedText));
      dispatch(getSelectText1(''));
      dispatch(getSelectText2(''));

      await postStoryText(idx, aiMadeText, dalleMadeImage);

      let nextSentence;
      let papago;
      let url;
      let collectText;

      collectText = stackedText + selectedText;

      if (bookInfo.length - 3 === num) {
        const [lastSentence, papagoResult] = await Promise.all([requestLastSentence(collectText), requestPAPAGOAPI(selectedText)]);
        nextSentence = lastSentence;
        papago = papagoResult;
        url = await requestDALLEAPI(papago);
      } else if (bookInfo.length - 2 > num) {
        const [middleSentence, papagoResult] = await Promise.all([requestMiddleSentence(collectText), requestPAPAGOAPI(selectedText)]);
        nextSentence = middleSentence;
        papago = papagoResult;
        url = await requestDALLEAPI(papago);
      }

      dispatch(getAllText(collectText));
      dispatch(getAIText(nextSentence));
      dispatch(getStoryImage(url));

      (collectText = ''), (nextSentence = ''), (papago = ''), (url = '');
    } catch (error) {
      console.log('API error: ', error);
    }
  };

  const _onPressXButton = () => {
    setPageType('mylibrary');
    dispatch(initText());
    dispatch(initPreset());
    setBookInfo(bookInfo => ({
      characters: [],
      place: null,
      length: null,
      isActive: {
        character: false,
        place: false,
        length: false,
      },
    }));
    setTicketInfo(ticketInfo => ({
      ticketImage: [],
      storyTitle: null,
      isActive: {
        ticketImage: false,
        storyTitle: false,
      },
    }));
  }

  return (
    <PageContainer>
      <XButtonContainer onPress={_onPressXButton}>
        <XButton source={clearButton} />
      </XButtonContainer>
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
          doubleChange={doubleChange}
          setDoubleChange={setDoubleChange}
          speakingText={speakingText}
          setSpeakingText={setSpeakingText}
          lastCall={lastCall}
          setLastCall={setLastCall}
          selectPage={selectPage}
          setSelectText={setSelectText}
          isCorrected={isCorrected}
          setIsCorrected={setIsCorrected}
          setSelect1={setSelect1}
          setSelect2={setSelect2}
          pressTyping={pressTyping}
          setPressTyping={setPressTyping}
          startTyping={startTyping}
          setStartTyping={setStartTyping}
        />

        {!pressTyping ? (
          bookInfo.length - 1 === num && allImageList.length !== num + 1 ? (
            <ButtonContainer>
              <ButtonRecord source={inactiveNextButton} />
            </ButtonContainer>
          ) : bookInfo.length - 1 === num ? (
            <ButtonContainer onPress={_onLastPage}>
              <ButtonRecord source={nextButton} />
            </ButtonContainer>
          ) : !change && recordFinish && !isCorrected ? (
            <ButtonContainer onPress={_onGrammarCorrect}>
              <ButtonRecord source={finishButton} />
            </ButtonContainer>
          ) : !change && recordFinish && isCorrected ? (
            <ButtonContainer onPress={_onGenerateAIText}>
              <ButtonRecord source={nextButton} />
            </ButtonContainer>
          ) : !change && recordFinish && selectText2 ? ( //여기여
            <ButtonContainer>
              <ButtonRecord source={inactiveNextButton} />
            </ButtonContainer>
          ) : !aiMadeText && change && !selectPage ? (
            <ButtonContainer>
              <ButtonRecord source={inactiveNextButton} />
            </ButtonContainer>
          ) : change && !selectPage ? (
            <ButtonContainer onPress={_onClickNextPage}>
              <ButtonRecord source={nextButton} />
            </ButtonContainer>
          ) : !isRecord && selectPage && !userMadeText && isCorrected ? (
            <ButtonContainer>
              <ButtonRecord source={inactiveNextButton} />
            </ButtonContainer>
          ) : !isRecord && selectPage && selectedText ? (
            <ButtonContainer onPress={_onSelectText}>
              <ButtonRecord source={nextButton} />
            </ButtonContainer>
          ) : !isRecord && selectPage ? (
            <ButtonContainer>
              <ButtonRecord source={inactiveNextButton} />
            </ButtonContainer>
          ) : !isRecord && !selectPage && num !== 0 && randomNum === 1 && !questionText ? (
            <ButtonContainer>
              <ButtonRecord source={inactiveRecordButton} />
            </ButtonContainer>
          ) : !isRecord && !selectPage && num !== 0 && isRecord ? (
            <ButtonContainer>
              <ButtonRecord source={inactiveRecordButton} />
            </ButtonContainer>
          ) : !isRecord && !selectPage ? (
            <ButtonContainer onPress={_onRecordVoice}>
              <ButtonRecord source={recordActive} />
            </ButtonContainer>
          ) : isRecord && !selectPage && !recordFinish ? (
            <ButtonContainer onPress={_onRecordVoice}>
              <ButtonRecord source={recordInactive} />
            </ButtonContainer>
          ) : (
            ''
          )
        ) : (
          ''
        )}
      </MainContainer>
    </PageContainer>
  );
};

export default StoryMakingPage;
