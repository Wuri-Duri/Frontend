import React, { useState } from 'react';
import styled from 'styled-components/native';
import NavBar from '../components/Preset/NavBar';
import Title from '../components/Preset/Title';
import SetCharacter from '../components/Preset/SetCharacter';
import SetBackground from '../components/Preset/SetBackground';
import SetLength from '../components/Preset/SetLength';
import MainButton from '../components/common/MainButton';

const Container = styled.View`
  width: 100%;
  height: 20%;
  position: absolute;
  bottom: 0;
`;

//isActived도 컨트롤해야함

const PresetPage = () => {
  const [pageType, setPageType] = useState('character');
  return (
    <>
      <NavBar pageType={pageType} setPageType={setPageType} />
      <Title pageType={pageType} />
      {pageType === 'character' ? <SetCharacter /> : pageType === 'place' ? <SetBackground /> : pageType === 'length' ? <SetLength /> : null}
      <Container>
        <MainButton isActived={false} pageType={pageType} />
      </Container>
    </>
  );
};

export default PresetPage;
