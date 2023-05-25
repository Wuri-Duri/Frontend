import React, { useState } from 'react';
import styled from 'styled-components/native';
import TicketItem from './TicketItem';
import LastTicketForAdd from './LastTicketForAdd';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Container = styled.View`
  position: relative;
  width: 100%;
  height: 75%;
`;

const ScrollContainer = styled.ScrollView`
  width: 100%;
  margin: 0 auto;
`;

const InsideContainer = styled.View`
  width: 100%;
  flex-direction: row;
  margin-left: 25;
  margin-right: 50;
`;

const TicketList = ({ setGetIdx, setTitle, tickets, pageType, setPageType, setPressTicket }) => {
  const _onPressTicket = (title, getIdx) => {
    setPressTicket(true);
    console.log(title);
    setTitle(title);
    setGetIdx(getIdx);
  };

  return (
    <Container>
      <ScrollContainer horizontal={true} centerContent={true} showsHorizontalScrollIndicator={false}>
        <InsideContainer>
          {tickets &&
            tickets.map((ticket, index) => (
              <TouchableOpacity onPress={() => _onPressTicket(ticket.title, ticket.idx)}>
                <TicketItem key={ticket.id} idx={ticket.idx} number={index + 1} image={ticket.coverImage} title={ticket.title} pageType={pageType} setPageType={setPageType} />
              </TouchableOpacity>
            ))}
          <LastTicketForAdd pageType={pageType} setPageType={setPageType} />
        </InsideContainer>
      </ScrollContainer>
    </Container>
  );
};
//TicketItem 안에다 넣어 - id 받아와서 하는거
export default TicketList;
