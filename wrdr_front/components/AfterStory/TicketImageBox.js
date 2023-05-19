import React, { useState } from 'react';
import Styled from 'styled-components/native';
import { KeyboardAvoidingView, Keyboard, StyleSheet, Image, Platform } from 'react-native';

import { useSelector, useDispatch } from 'react-redux';
import { getTicketTitle } from '../../modules/ticket';

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

const TicketImageBox = ({ ticketInfo, pageType, setTicketInfo, title, setTitle }) => {
  // const [title, setTitle] = useState('');
  // const [hasKeyboard, setHasKeyboard] = useState(false);
  // const shownKeyboard = () => {
  //   //키보드가 보이면 ticketviewimage가 안보이게(사라지게) 키보드 사라지면 다시 보이게
  //   if (Keyboard.isVisible) {
  //     setHasKeyboard(true);
  //   } else {
  //     setHasKeyboard(false);
  //   }
  // };

  // const event = () => {
  //   setTicketInfo(ticketInfo => ({
  //     ...ticketInfo,
  //     storyTitle: null,
  //     isActive: {
  //       ...ticketInfo.isActive,
  //       storyTitle: null,
  //     },
  //   }));
  // };

  // console.log('ticketinfo ', ticketInfo.storyTitle);

  const dispatch = useDispatch();
  const storyTitle = useSelector(state => state.ticket.ticketImage);

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
          <Image style={styles.TicketViewImage} src={ticketInfo.ticketImage} />
        ) : (
          ''
        )}

        <TicketTitleView>
          {pageType === 'storyTitle' ? (
            <TitleInput
              // onPress={shownKeyboard}
              onChange={event => {
                //리덕스에 다 넣어라
                if (event.nativeEvent.text != null) {
                  setTitle(event.nativeEvent.text);
                  //제목을 다 지웠을때 감지어케해~~
                  setTicketInfo(ticketInfo => ({
                    ...ticketInfo,
                    storyTitle: title,
                    isActive: {
                      ...ticketInfo.isActive,
                      storyTitle: true,
                    },
                  }));
                }
                // //setticketinfo
                // setTicketInfo(ticketInfo => ({
                //   ...ticketInfo,
                //   storyTitle: title,
                //   isActive: {
                //     ...ticketInfo.isActive,
                //     storyTitle: true,
                //   },
                // }));
                dispatch(getTicketTitle(ticketInfo.storyTitle));
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
    marginLeft: 10,
    marginRight: 10,
    paddingBottom: 0,
    resizeMode: 'cover',
    // display:
  },
  container: {
    flex: 1,
  },
});

export default TicketImageBox;
