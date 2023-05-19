import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import plus from '../../assets/BottomBar/BottomBar_button_plus.png';
import next from '../../assets/BottomBar/BottomBar_button_next.png';
import check from '../../assets/BottomBar/BottomBar_button_check.png';
import home from '../../assets/BottomBar/BottomBar_button_home.png';

import { useSelector, useDispatch } from 'react-redux';
import { initText, getAIText, getStoryImage, getPageNum, getAllText } from '../../modules/makeStory';
import { initPreset } from '../../modules/presetStory';
import { getTicketIdx } from '../../modules/ticket';
import { requestPAPAGOAPI, requestDALLEAPI } from '../../lib/api/fairytale';

import config from '../../config';

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

  size,
  disabled,
  finish,
  setFinish,
  show,

  setPresetFinish,
  rocketFinish,
  setRocketFinish,
}) => {
  const charName = useSelector(state => state.presetStory.character);
  const bg = useSelector(state => state.presetStory.place);
  const num = useSelector(state => state.makeStory.num);
  const ticketId = useSelector(state => state.ticket.ticketIdx);
  const ticketTitle = useSelector(state => state.ticket.storyTitle);

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
        .post(config.BASE_URL + '/fairytale/preset', {
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
          config.CLOVASTUDIO_URL,
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
              'X-NCP-CLOVASTUDIO-API-KEY': config.CLOVASTUDIO_API_KEY,
              'X-NCP-APIGW-API-KEY': config.APIGW_API_KEY,
              'X-NCP-CLOVASTUDIO-REQUEST-ID': config.CLOVASTUDIO_REQUEST_ID,
            },
          },
        )
        .then(async response => {
          dispatch(getAIText(response.data.result.text));
          dispatch(getAllText(response.data.result.text));

          const madeImage = await requestDALLEAPI(await requestPAPAGOAPI(response.data.result.text));
          console.log(madeImage);
          dispatch(getStoryImage(madeImage));
        })
        .catch(error => console.log('[FAIL] makeFirstSentence ', error));

      setPresetFinish((presetFinish: boolean) => !presetFinish);

      setTimeout(() => {
        setRocketFinish(!rocketFinish); //3초 뒤에 실행하라
        setTimeout(() => {
          setPageType('makestory');
        }, 7000);
      }, 3000);
    } else if (pageType === 'makestory') {
      setPageType('ticketImage');
    } else if (ticketInfo.isActive.ticketImage && pageType === 'ticketImage') {
      console.log(pageType);
      setPageType('storyTitle');
    } else if (ticketInfo.isActive.storyTitle && pageType === 'storyTitle') {
      console.log('야이자식아', ticketId, ticketTitle, ticketInfo.ticketImage);
      axios
        .post(config.BASE_URL + '/fairytale/cover', {
          ticketIdx: ticketId,
          title: ticketTitle,
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
