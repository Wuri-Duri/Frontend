import React from 'react';
import styled from 'styled-components/native';
import plus from '../../assets/BottomBar/BottomBar_button_plus.png';
import next from '../../assets/BottomBar/BottomBar_button_next.png';
import check from '../../assets/BottomBar/BottomBar_button_check.png';
import home from '../../assets/BottomBar/BottomBar_button_home.png';

import { useSelector, useDispatch } from 'react-redux';
import { initText, getAIText, getStoryImage, getAllText } from '../../modules/makeStory';
import { initPreset } from '../../modules/presetStory';
import { getTicketIdx } from '../../modules/ticket';
import { requestFirstSentence2, requestFirstSentence, requestPAPAGOAPI, requestDALLEAPI, postPresetInfo, postTicketCover } from '../../lib/api/fairytale';

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

const MainButton = ({ pageType, setPageType, bookInfo, setBookInfo, setTicketInfo, ticketInfo, size, disabled, finish, setFinish, show, setPresetFinish, rocketFinish, setRocketFinish }) => {
  const charName = useSelector(state => state.presetStory.character);
  const bg = useSelector(state => state.presetStory.place);
  const ticketId = useSelector(state => state.ticket.ticketIdx);
  const ticketTitle = useSelector(state => state.ticket.storyTitle);

  const dispatch = useDispatch();

  const initBookInfo = () => {
    setBookInfo({
      characters: [],
      place: null,
      length: null,
      isActive: {
        character: false,
        place: false,
        length: false,
      },
    });
  };

  const initTicketInfo = () => {
    setTicketInfo({
      ticketImage: null,
      fairyTaleTitle: null,
      isActive: {
        ticketImage: false,
        fairyTaleTitle: false,
      },
    });
  };

  const onPressMainBtn = async () => {
    if (pageType === 'mylibrary') {
      setPageType('character');
    } else if (bookInfo && bookInfo.isActive.character && pageType === 'character') {
      setPageType('place');
    } else if (bookInfo && bookInfo.isActive.place && pageType === 'place') {
      setPageType('length');
    } else if (bookInfo && bookInfo.isActive.length && pageType === 'length') {
      const ticketIdx = await postPresetInfo(
        bookInfo.characters.map(character => character.name),
        bookInfo.place,
        bookInfo.length,
      );
      setPresetFinish((presetFinish: boolean) => !presetFinish);

      setTimeout(() => {
        setRocketFinish(!rocketFinish);
        setTimeout(() => {
          setPageType('makestory');
        }, 4000);
      }, 3000);

      dispatch(getTicketIdx(ticketIdx));

      let firstSentence;
      if (bookInfo.characters.length === 1) {
        firstSentence = await requestFirstSentence(
          charName.map(character => character.name),
          bg,
        );
      } else {
        firstSentence = await requestFirstSentence2(
          charName.map(character => character.name),
          bg,
        );
      }

      dispatch(getAIText(firstSentence));
      dispatch(getAllText(firstSentence));

      const madeImage = await requestDALLEAPI(await requestPAPAGOAPI(firstSentence));

      dispatch(getStoryImage(madeImage));
    } else if (pageType === 'makestory') {
      setPageType('ticketImage');
    } else if (ticketInfo.isActive.ticketImage && pageType === 'ticketImage') {
      setPageType('storyTitle');
    } else if (ticketInfo.isActive.fairyTaleTitle && pageType === 'storyTitle') {
      postTicketCover(ticketId, ticketTitle, ticketInfo.ticketImage);

      setFinish((finish: boolean) => !finish);

      setTimeout(() => {
        setPageType('mylibrary');

        dispatch(initText());
        dispatch(initPreset());

        setTimeout(() => {
          initBookInfo();
          initTicketInfo();
          console.log('ticketInfo ', ticketInfo, ' bookInfo ', bookInfo);
        }, 0);
      }, 1500);

      console.log('ticketInfo ', ticketInfo, ' bookInfo ', bookInfo);
    }
  };

  return (
    <HomeButtonContainer onPress={onPressMainBtn} size={size} disabled={disabled}>
      {pageType === 'character' ? (
        <ButtonContainer isActive={bookInfo.isActive.character} pageType={pageType}>
          <Icon source={next} />
        </ButtonContainer>
      ) : pageType === 'place' ? (
        <ButtonContainer isActive={bookInfo.isActive.character && bookInfo.isActive.place} pageType={pageType}>
          <Icon source={next} />
        </ButtonContainer>
      ) : pageType === 'length' ? (
        <ButtonContainer isActive={bookInfo.isActive.character && bookInfo.isActive.place && bookInfo.isActive.length} pageType={pageType}>
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
        <ButtonContainer isActive={ticketInfo.isActive.fairyTaleTitle} pageType={pageType} finish={finish} setFinish={setFinish}>
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
