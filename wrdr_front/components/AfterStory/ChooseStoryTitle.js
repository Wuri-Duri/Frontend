import React from 'react';
import Styled from 'styled-components';
import TicketImageBox from './TicketImageBox';
import { KeyboardAvoidingView, StyleSheet, Platform } from 'react-native';

const FinSplash = Styled.ImageBackground`
  position: absolute;
  width: 100%;
  height: 100%;

`;

const ChooseStoryTitle = ({ pageType, ticketInfo, setTicketInfo, finish, title, setTitle }) => {
  return (
    <>
      <KeyboardAvoidingView style={styles.rootContainer} keyboardVerticalOffset={-60} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <TicketImageBox pageType={pageType} ticketInfo={ticketInfo} setTicketInfo={setTicketInfo} title={title} setTitle={setTitle} />
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
