import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import plus from '../../assets/BottomBar/BottomBar_button_plus.png';
import next from '../../assets/BottomBar/BottomBar_button_next.png';
import check from '../../assets/BottomBar/BottomBar_button_check.png';
import home from '../../assets/BottomBar/BottomBar_button_home.png';

import { useSelector, useDispatch } from 'react-redux';
import { initText, getAIText, getStoryImage } from '../../modules/makeStory';
import { initPreset } from '../../modules/presetStory';
import { getTicketIdx } from '../../modules/ticket';
import { requestPAPAGOAPI, requestDALLEAPI } from '../../lib/api/fairytale';

import axios from 'axios';

const HomeButtonContainer = styled.TouchableOpacity`
  width: ${props => props.size || '95'};
  height: ${props => props.size || '95'};
  position: absolute;
  align-self: center;
  bottom: 25%;
`;

const ButtonContainer = styled.View`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: ${props => (props.isActive == false ? '#C1C1C1' : props.pageType === 'length' ? '#A5C95C' : '#FFB966')};
  border-radius: 100;
  align-items: center;
  justify-content: center;
`;

const Icon = styled.Image`
  display: flex;
  position: relative;
  width: 70%;
  height: 70%;
  resize-mode: contain;
`;

const MainButton = ({
  pageType,
  setPageType,
  bookInfo,
  setBookInfo,
  ticketInfo,
  setTicketInfo,
  size,
  disabled,
  finish,
  setFinish,
  show,
  title,
  setTitle,
  isTitle,
  setIsTitle,
  presetFinish,
  setPresetFinish,
}) => {
  const aiMadeText = useSelector(state => state.makeStory.aiText);
  const charName = useSelector(state => state.presetStory.character);
  const bg = useSelector(state => state.presetStory.place);

  const dispatch = useDispatch();

  const onPressMainBtn = () => {
    if (pageType === 'mylibrary') {
      setPageType('character');
    } else if (bookInfo && bookInfo.isActive.character && pageType === 'character') {
      setPageType('place');
    } else if (bookInfo && bookInfo.isActive.place && pageType === 'place') {
      setPageType('length');
    } else if (bookInfo && bookInfo.isActive.length && pageType === 'length') {
      axios
        .post('http://52.79.115.87:3000/fairytale/preset', {
          userIdx: 1,
          characters: bookInfo.characters.map(character => character.name),
          bgPlace: bookInfo.place,
          length: bookInfo.length,
        })
        .then(response => {
          console.log(response.data.data);
          dispatch(getTicketIdx(response.data.data));
        })
        .catch(error => console.log(error));

      axios
        .post(
          'https://clovastudio.apigw.ntruss.com/testapp/v1/tasks/5s80qqmj/completions/LK-D',
          {
            topK: 4,
            includeProbs: false,
            includeTokens: false,
            restart: '',
            includeAiFilters: true,
            maxTokens: 300,
            temperature: 0.85,
            start: '',
            stopBefore: ['<|endoftext|>'],
            text: '인물:' + charName.map(character => character.name) + '배경:' + bg,
            repeatPenalty: 5.0,
            topP: 0.8,
          },
          {
            headers: {
              'Content-Type': 'application/json',
              'X-NCP-CLOVASTUDIO-API-KEY': `NTA0MjU2MWZlZTcxNDJiYzd8M2hRTH/NiK082823And3UOASW+DXQBDDOp+RjuZ6NRTFb7rENlqe8NRNt1N/3/5LE3j+hU42w7PldHnbAr5SZBhNJVQek38HrnjDxrdPUEc7iJQ7KrEp8SggQJVqc0l+hUKywMcZ8GrCWhNyh8thvGf2LXAIcLdv2NNgDwMmQvhsuOFARSVfkaxuc0LRjA==`,
              'X-NCP-APIGW-API-KEY': `bCvrbyYyvdUkLpiY9kpnSzrTNIZdEBQ1GQ4le0MC`,
              'X-NCP-CLOVASTUDIO-REQUEST-ID': `e51fb316a1574a598e1a577bb0f91e0b`,
            },
          },
        )
        .then(async response => {
          dispatch(getAIText(response.data.result.text));
          // requestDALLEAPI(requestPAPAGOAPI(response.data.result.text));
          // const translatedText = await requestPAPAGOAPI(response.data.result.text);
          // console.log(translatedText);
          // const madeImage = await requestDALLEAPI(await requestPAPAGOAPI(response.data.result.text));
          // console.log(madeImage);
        })
        .catch(error => console.log('[FAIL] makeFirstSentence ', error));
      setPresetFinish((presetFinish: boolean) => !presetFinish);
      setTimeout(() => {
        setPageType('makestory');
      }, 3000);
    } else if (pageType === 'makestory') {
      setPageType('ticketImage');
    } else if (ticketInfo.isActive.ticketImage && pageType === 'ticketImage') {
      console.log(pageType);
      setPageType('storyTitle');
    } else if (ticketInfo.isActive.storyTitle && pageType === 'storyTitle') {
      axios
        .post('http://52.79.115.87:3000/fairytale/createcover', {
          ticketIdx: 1,
          title: ticketInfo.storyTitle,
          coverImage: ticketInfo.ticketImage,
        })
        .then(response => {
          console.log(response.data);
        })
        .catch(error => console.log(error));

      setFinish((finish: boolean) => !finish);
      setTimeout(() => {
        setPageType('mylibrary');
      }, 1500);
      console.log('destroyed');
      dispatch(initText());
      dispatch(initPreset());
      setBookInfo(bookInfo => ({
        characters: [''],
        place: null,
        length: null,
        isActive: {
          character: false,
          place: false,
          length: false,
        },
      }));
    }
  };

  return (
    <HomeButtonContainer onPress={onPressMainBtn} size={size} disabled={disabled}>
      {pageType === 'character' ? (
        <ButtonContainer isActive={bookInfo.isActive.character} pageType={pageType}>
          <Icon source={next} />
        </ButtonContainer>
      ) : pageType === 'place' ? (
        <ButtonContainer isActive={bookInfo.isActive.place} pageType={pageType}>
          <Icon source={next} />
        </ButtonContainer>
      ) : pageType === 'length' ? (
        <ButtonContainer isActive={bookInfo.isActive.length} pageType={pageType}>
          <Icon source={check} />
        </ButtonContainer>
      ) : pageType === 'preRocket' ? (
        ''
      ) : pageType === 'mylibrary' ? (
        <ButtonContainer isActive={true}>
          <Icon source={plus} />
        </ButtonContainer>
      ) : pageType === 'ticketImage' && show ? (
        <ButtonContainer isActive={ticketInfo.isActive.ticketImage} pageType={pageType}>
          <Icon source={next} />
        </ButtonContainer>
      ) : pageType === 'ticketImage' && !show ? (
        ''
      ) : pageType === 'storyTitle' && !finish ? (
        <ButtonContainer isActive={ticketInfo.isActive.storyTitle} pageType={pageType} finish={finish} setFinish={setFinish}>
          <Icon source={check} />
        </ButtonContainer>
      ) : pageType === 'storyTitle' && finish ? (
        ''
      ) : (
        <ButtonContainer isActive={true}>
          <Icon source={home} />
        </ButtonContainer>
      )}
    </HomeButtonContainer>
  );
};

export default MainButton;
