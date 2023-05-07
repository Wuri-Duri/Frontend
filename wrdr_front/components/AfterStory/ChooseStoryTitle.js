import React from 'react';
import Styled from 'styled-components';
import TicketImageBox from './TicketImageBox';
import { KeyboardAvoidingView, Keyboard, StyleSheet, Platform } from 'react-native';

const Container = Styled.View`
  width: 100%;
  height:78%;
  flex-direction: row;
  justify-content: center;
`;

const FinSplash = Styled.ImageBackground`
  position: absolute;
  width: 100%;
  height: 100%;

`;

const ChooseStoryTitle = ({ pageType, setPageType, ticketInfo, setTicketInfo, imageInfo, setImageInfo, finish, setFinish }) => {
  return (
    <>
      <KeyboardAvoidingView style={styles.rootContainer} keyboardVerticalOffset={-60} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <TicketImageBox pageType={pageType} ticketInfo={ticketInfo} setTicketInfo={setTicketInfo} imageInfo={imageInfo} setImageInfo={setImageInfo} />
      </KeyboardAvoidingView>
      {finish ? <FinSplash source={require('../../assets/finishStory.gif')} /> : ''}
    </>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    height: '80%',
  },
});

export default ChooseStoryTitle;
