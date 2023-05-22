import React from 'react';
import Styled from 'styled-components/native';
import { StyleSheet, Image, KeyboardAvoidingView } from 'react-native';

import { useDispatch } from 'react-redux';
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
  font-family: jalnan;
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
  
  const dispatch = useDispatch();

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
              onChange={event => {
                const text = event.nativeEvent.text;
                setTitle(text);
                setTicketInfo(ticketInfo => ({
                  ...ticketInfo,
                  storyTitle: text,
                  isActive: {
                    ...ticketInfo.isActive,
                    storyTitle: true,
                  },
                }));
                dispatch(getTicketTitle(text));
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
  },
  container: {
    flex: 1,
  },
});

export default TicketImageBox;
