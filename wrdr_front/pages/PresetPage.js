import React, { useState } from 'react';
import styled from 'styled-components/native';
import NavBar from '../components/Preset/NavBar';
import Title from '../components/Preset/Title';
import SetCharacter from '../components/Preset/SetCharacter';
import SetBackground from '../components/Preset/SetBackground';
import SetLength from '../components/Preset/SetLength';
import CircleButton from '../components/common/CircleButton';

const Container = styled.View`
  width: 100%;
  height: 20%;
  position: absolute;
  bottom: 0;
`;

const PresetPage = ({ pageType, setPageType }) => {
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
    <>
      <NavBar pageType={pageType} setPageType={setPageType} />
      <Title pageType={pageType} />
      {pageType === 'character' ? (
        <SetCharacter bookInfo={bookInfo} setBookInfo={setBookInfo} />
      ) : pageType === 'place' ? (
        <SetBackground bookInfo={bookInfo} setBookInfo={setBookInfo} />
      ) : pageType === 'length' ? (
        <SetLength bookInfo={bookInfo} setBookInfo={setBookInfo} />
      ) : null}
      <Container>
        <CircleButton pageType={pageType} setPageType={setPageType} bookInfo={bookInfo} />
      </Container>
    </>
  );
};

export default PresetPage;
