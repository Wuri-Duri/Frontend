import React, { useState } from 'react';
import styled from 'styled-components/native';
import NavBar from '../components/Preset/NavBar';
import Title from '../components/Preset/Title';
import AddChar from '../components/Preset/AddChar';
import SelectPlace from '../components/Preset/SelectPlace';
import BookLen from '../components/Preset/BookLen';
import NextButton from '../components/common/mainButton';

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
      {pageType === 'character' ? <AddChar /> : pageType === 'place' ? <SelectPlace /> : pageType === 'length' ? <BookLen /> : null}
      <Container>
        <NextButton isActived={false} pageType={pageType} />
      </Container>
    </>
  );
};

export default PresetPage;
