import React from 'react';
import Styled from 'styled-components/native';
import { useState, useEffect } from 'react';
import { getFairyTale } from '../lib/api/fairytale';
import { useSelector } from 'react-redux';
import nextButton from '../assets/nextButton.png';
import finishButton from '../assets/finishButton.png';

const Container = Styled.ImageBackground`
  flex: 1;
  flex-direction: row;  
  justify-content: center;
`;

const Nothing = Styled.View`
  flex: 1;
`;

const TextView = Styled.View`
  flex: 1;
  justify-content: center;
  align-items: center; 
  background-color : rgba(0,0,0,0.53);
`;

const TextContainer = Styled.View`
  margin-left: 50;
  margin-right: 50;
  border-radius: 10;
  
  
`;

const StoryText = Styled.Text`
  margin: 32px;
  color: #ffffff;
  font-size: 35;
  font-weight: bold;
  padding: 0;
  margin: 0;
`;

const ButtonContainer = Styled.TouchableOpacity`
  position: absolute;
  padding-top: 650;
  justify-content: center;
 
`;

const ButtonImage = Styled.Image`
width: 90;
height: 90;
`;

const ReadStoryPage = ({ setPageType }) => {
  const idx = useSelector(state => state.ticket.ticketIdx);
  const [storyData, setStoryData] = useState(['']);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const fetchStory = async () => {
      try {
        const data = await getFairyTale(idx);
        setStoryData(data);
      } catch (error) {
        console.error('Error fetching tickets: ', error);
      }
    };
    fetchStory();
  }, []);

  const _goNextPage = () => {
    if (index < storyData.length) {
      setIndex(prevIndex => prevIndex + 1);
    }
  };

  const _goMyLibrary = () => {
    setPageType('mylibrary');
  };
  // <Container source={{ uri: storyData[index].img }}>
  //<Container source={require('../assets/seaBg.png')}>
  return (
    <>
      <Container source={{ uri: storyData[index].img }}>
        <TextView>
          <TextContainer>
            <StoryText multiline={true}>{storyData[index].text}</StoryText>
          </TextContainer>
        </TextView>
        <Nothing />
        {index < storyData.length - 1 ? (
          <ButtonContainer onPress={_goNextPage}>
            <ButtonImage source={nextButton} />
          </ButtonContainer>
        ) : (
          <ButtonContainer onPress={_goMyLibrary}>
            <ButtonImage source={finishButton} />
          </ButtonContainer>
        )}
      </Container>
    </>
  );
};

export default ReadStoryPage;
