import React, { useState } from 'react';
import Styled from 'styled-components/native';
import { Keyboard, StyleSheet, Image } from 'react-native';
import ImageResizeMode from 'react-native/Libraries/Image/ImageResizeMode';

const Container = Styled.View`
  width: 50%;
  height: 78%;
  align-items: center;
  flex-direction: column;
  position: relative;
`;

const TicketViewText = Styled.Text`
  width: 57%;
  height: 75%;
  text-align: center;
  background-color: #000000;
  border-radius: 20;
  opacity: 0.6;
  margin-left: 10;
  margin-right: 10;
  paddingbottom: 0;
  color: #ffffff;
  font-size: 25;
  font-weight: bold;
  text-align: center;
`;

const TicketViewImage = Styled.ImageBackground`
  width: 57%;
  height: 75%;
  justify-content: center;
  align-items: center;
  background-color: #000000;
  border-radius: 20;
  opacity: 0.6;
  margin-left: 10;
  margin-right: 10;
  paddingbottom: 0;
  display: ${props => (props.isVisible ? 'none' : 'flex')};
`;

const Text = Styled.Text`
  color: #ffffff;
  font-size: 25;
  font-weight: bold;
  text-align: center;
  `;

const TicketTitleView = Styled.View`
    width: 57%;
    height: 25%;
    background-color: #ffffff;
    border-radius: 20;
    
`;
const TitleInput = Styled.TextInput`
  color: #000000;
  font-size: 30;
  font-weight: bold;
  margin-top: 8%;
  margin-left: 2%;
  margin-right: 2%;
  text-align: center;
  font-family:'Jalnan';
`;

const TicketImageBox = ({ ticketInfo, pageType, imageInfo }) => {
  console.log(ticketInfo.storyTitle);
  const [hasKeyboard, setHasKeyboard] = useState(false);
  const shownKeyboard = () => {
    //키보드가 보이면 ticketviewimage가 안보이게(사라지게) 키보드 사라지면 다시 보이게
    if (Keyboard.isVisible) {
      setHasKeyboard(true);
    } else {
      setHasKeyboard(false);
    }
  };

  return (
    <>
      <Container>
        {!ticketInfo.isActive.ticketImage ? (
          <TicketViewText>
            {'\n'}
            {'\n'}
            {'\n'}
            {'\n'}
            오른쪽에서{'\n'}
            {'\n'}그림을{'\n'}
            {'\n'}선택해주세요!
          </TicketViewText>
        ) : ticketInfo.isActive.ticketImage ? (
          <Image style={styles.TicketViewImage} source={imageInfo.imageSrc} isVisible={hasKeyboard} />
        ) : (
          ''
        )}
        <TicketTitleView>
          {pageType === 'storyTitle' ? (
            <TitleInput
              onClick={shownKeyboard}
              onChange={event => {
                ticketInfo.storyTitle = event.nativeEvent.text; //setticketinfo
              }}
              multiline
              placeholder="이곳을 클릭해 제목을 입력해주세요!"
              maxLength={20}
            />
          ) : (
            <TitleInput editable={false} />
          )}
        </TicketTitleView>
      </Container>
    </>
  );
};

const styles = StyleSheet.create({
  TicketViewImage: {
    width: '57%',
    height: '75%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
    borderRadius: 20,
    opacity: 0.6,
    marginLeft: 10,
    marginRight: 10,
    paddingBottom: 0,
    resizeMode: 'cover',
    // display: ${props => (props.isVisible ? 'none' : 'flex')},
  },
});

export default TicketImageBox;
