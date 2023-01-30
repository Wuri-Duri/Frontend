import React from 'react';
import styled from 'styled-components/native';
import {ScrollView} from 'react-native';
import TicketItem from './TicketItem';
import LastTicketForAdd from './LastTicketForAdd';

const Container = styled.View`
  position : relative;
  width : 100%;
  height : 100%;
`

//임시로 자리만 잡아둡니당
const ScrollBar = styled.View`
  width: 88%;
  height : 1%;
  margin : 0 auto;
  background-color: #e6e6e6;
  margin-bottom : 55;
`

const ScrollContainer = styled.ScrollView`
  width: 88%;
  margin : 0 auto;
`

const TicketList = ({tickets}) => {
  return (
    <Container>
      <ScrollBar/>
      <ScrollContainer horizontal={true}>
        {tickets.map((ticket, index) => (
          <TicketItem key={ticket.id} number={index+1} title ={ticket.title}/>
        ))}
        <LastTicketForAdd/>
      </ScrollContainer>
    </Container>
  );
};

export default TicketList;
