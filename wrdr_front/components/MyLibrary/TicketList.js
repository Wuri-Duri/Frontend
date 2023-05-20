import React from 'react';
import styled from 'styled-components/native';
import { ScrollView } from 'react-native';
import TicketItem from './TicketItem';
import LastTicketForAdd from './LastTicketForAdd';

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

const TicketList = ({ tickets, pageType, setPageType }) => {
  return (
    <Container>
      <ScrollContainer horizontal={true} centerContent={true} showsHorizontalScrollIndicator={false}>
        <InsideContainer>
          {tickets &&
            tickets.map((ticket, index) => (
              <TicketItem key={ticket.id} idx={ticket.idx} number={index + 1} image={ticket.coverImage} title={ticket.title} pageType={pageType} setPageType={setPageType} />
            ))}
          <LastTicketForAdd pageType={pageType} setPageType={setPageType} />
        </InsideContainer>
      </ScrollContainer>
    </Container>
  );
};
//TicketItem 안에다 넣어 - id 받아와서 하는거
export default TicketList;
