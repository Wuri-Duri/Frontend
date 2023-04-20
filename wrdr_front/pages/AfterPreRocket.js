import React from 'react';
import Styled from 'styled-components/native';

const Container = Styled.ImageBackground`
flex: 1;
width: 100%;
height: 100%;
`;

const AfterPreRocket = ({ setPageType }) => {
  setPageType = 'preRocket';

  return (
    <>
      <Container source={require('../assets/Preset/afterPreRocket.gif')} />
    </>
  );
};

export default AfterPreRocket;
