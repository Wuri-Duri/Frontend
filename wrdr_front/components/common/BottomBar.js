import React from 'react';
import styled from 'styled-components/native';
import CircleButton from './CircleButton';
import BackgroundBar from './BackgroundBar';

const Container = styled.View`
  width: 100%;
  height: 20%;
  position: absolute;
  bottom: 0;
`;

const BottomBar = ({ pageType, setPageType, setTicketInfo, setBookInfo, bookInfo, ticketInfo }) => {
  return (
    <Container>
      <CircleButton pageType={pageType} setPageType={setPageType} setTicketInfo={setTicketInfo} ticketInfo={ticketInfo} setBookInfo={setBookInfo} bookInfo={bookInfo} />
      <BackgroundBar />
    </Container>
  );
};

export default BottomBar;
