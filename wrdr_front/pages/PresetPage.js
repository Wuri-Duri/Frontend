import React, { useState } from 'react';
import styled from 'styled-components/native';
import PresetMenu from '../components/Preset/NavBar';
import Title from '../components/Preset/Title';
import BookLen from '../components/Preset/BookLen';
import NextButton from '../components/common/mainButton';

const Container = styled.View`
  width: 100%;
  height: 20%;
  position: absolute;
  bottom: 0;
`;

//NextButton props 값에 따라서 색상, opacity, 아이콘 이미지 바뀌도록 common의 homeButton.js 수정 필요

const PresetPage = () => {
  return (
    <>
      <PresetMenu />
      <Title />
      <BookLen />
      <Container>
        <NextButton />
      </Container>
    </>
  );
};

export default PresetPage;
