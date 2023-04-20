import React from 'react';
import Styled from 'styled-components/native';

const Container = Styled.ImageBackground`
flex: 1;
width: 100%;
height: 100%;
`;

const AfterFinRocket = ({ setPageType }) => {
  setPageType = 'finRocket';

  return <Container source={require('../assets/AfterStory/finRocket.gif')} />;
};

export default AfterFinRocket;
