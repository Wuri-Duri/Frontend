import React, { useState } from 'react';
import Styled from 'styled-components/native';
import { ScrollView, FlatList, View, TouchableOpacity } from 'react-native';
import ImageItem from './ImageItem';
import TicketImageBox from './TicketImageBox';
import next from '../../assets//BottomBar/BottomBar_button_next.png';

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

const ChooseTicketImage = ({ id, ticketInfo, setTicketInfo, setPageType }) => {
  const images = [
    { id: 0, image: require('../../assets/AfterStory/TicketImage/ticketImage1.png') },
    { id: 1, image: require('../../assets/AfterStory/TicketImage/ticketImage2.png') },
    { id: 2, image: require('../../assets/AfterStory/TicketImage/ticketImage1.png') },
    { id: 3, image: require('../../assets/AfterStory/TicketImage/ticketImage2.png') },
    { id: 4, image: require('../../assets/AfterStory/TicketImage/ticketImage1.png') },
    { id: 5, image: require('../../assets/AfterStory/TicketImage/ticketImage2.png') },
    { id: 6, image: require('../../assets/AfterStory/TicketImage/ticketImage1.png') },
    { id: 7, image: require('../../assets/AfterStory/TicketImage/ticketImage2.png') },
    { id: 8, image: require('../../assets/AfterStory/TicketImage/ticketImage1.png') },
    { id: 9, image: require('../../assets/AfterStory/TicketImage/ticketImage2.png') },
    { id: 10, image: require('../../assets/AfterStory/TicketImage/ticketImage1.png') },
    { id: 11, image: require('../../assets/AfterStory/TicketImage/ticketImage2.png') },
  ];

  return (
    <Container>
      <TicketImageBox ticketInfo={ticketInfo} setTicketInfo={setTicketInfo} />
      <ScrollContainer>
        <FlatList
          data={images}
          renderItem={({ item }) => (
            <View style={{ flex: 1, flexDirection: 'column', margin: 1 }}>
              <ImageItem id={item.id} imageUri={item.image} ticketInfo={ticketInfo} setTicketInfo={setTicketInfo} />
            </View>
          )}
          numColumns={3}
          keyExtractor={(item, index) => index}
        />
      </ScrollContainer>
    </Container>
  );
};

export default ChooseTicketImage;
