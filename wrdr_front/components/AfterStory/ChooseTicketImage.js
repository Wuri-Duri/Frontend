import React from 'react';
import Styled from 'styled-components/native';
import { FlatList, View } from 'react-native';
import ImageItem from './ImageItem';
import TicketImageBox from './TicketImageBox';
import { useSelector } from 'react-redux';

const Container = Styled.View`
  width: 100%;
  height: 78%;
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
  font-family: jalnan;
`;

const ImageListContainer = Styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ChooseTicketImage = ({ ticketInfo, setTicketInfo, show, setShow }) => {
  const images = useSelector(state => state.makeStory.allImageList);

  React.useEffect(() => {
    if (!show) {
      setTimeout(() => {
        setShow(true);
      }, 2000);
    }
  }, [show, setShow]);

  return (
    <>
      {!show ? (
        <StoryFin>'우리가 만든 이야기가 완성됐어요!'</StoryFin>
      ) : (
        <Container>
          <TicketImageBox ticketInfo={ticketInfo} setTicketInfo={setTicketInfo} />
          <ScrollContainer>
            <ImageListContainer>
              {images.map((item, index) => (
                <View style={{ flexBasis: '33.33%', marginBottom: 5 }} key={index}>
                  <ImageItem id={item} imageUrl={item} ticketInfo={ticketInfo} setTicketInfo={setTicketInfo} />
                </View>
              ))}
              {images.length % 3 !== 0 && <View style={{ flexBasis: '33.33%' }} />}
            </ImageListContainer>
          </ScrollContainer>
        </Container>
      )}
    </>
  );
};

export default ChooseTicketImage;
