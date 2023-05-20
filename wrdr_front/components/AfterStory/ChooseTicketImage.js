import React, { useState } from 'react';
import Styled from 'styled-components/native';
import { FlatList, View } from 'react-native';
import ImageItem from './ImageItem';
import TicketImageBox from './TicketImageBox';
import { useSelector } from 'react-redux';

const Container = Styled.View`
  width: 100%;
  height:78%;
  flex-direction: row;
  justify-content: center;
`;

const ScrollContainer = Styled.ScrollView`
  width: 50%;
  height: 78%;
  margin-right: 9%;
`;

const StoryFin = Styled.Text`
font-size: 28;
`;

const ChooseTicketImage = ({ id, ticketInfo, setTicketInfo, show, setShow, imageDalle, setImageDalle }) => {
  const images = useSelector(state => state.makeStory.allImageList);
  (function () {
    if (!show) {
      setTimeout(() => {
        setShow(!show);
      }, 2000);
    }
  })();

  return (
    <>
      {!show ? (
        <StoryFin>'우리가 만든 이야기가 완성됐어요!'</StoryFin>
      ) : (
        <Container>
          <TicketImageBox ticketInfo={ticketInfo} setTicketInfo={setTicketInfo} />
          <ScrollContainer>
            <FlatList
              data={images}
              renderItem={({ item }) => (
                <View style={{ flex: 1, flexDirection: 'column', margin: 1 }}>
                  <ImageItem id={item} imageUrl={item} ticketInfo={ticketInfo} setTicketInfo={setTicketInfo} />
                </View>
              )}
              numColumns={3}
              keyExtractor={(item, index) => index}
            />
          </ScrollContainer>
        </Container>
      )}
    </>
  );
};

export default ChooseTicketImage;
