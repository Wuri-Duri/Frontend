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

const TicketList = ({ tickets }) => {
  return (
    <Container>
      <ScrollContainer horizontal={true} centerContent={true} showsHorizontalScrollIndicator={false}>
        <InsideContainer>
          {tickets.map((ticket, index) => (
            <TicketItem key={ticket.id} number={index + 1} image={ticket.image} title={ticket.title} />
          ))}
          <LastTicketForAdd />
        </InsideContainer>
      </ScrollContainer>
    </Container>
  );
};

export default TicketList;

//https://reime005.medium.com/build-your-own-scroll-indicator-in-react-native-e61ca56a7c10
