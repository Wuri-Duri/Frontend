import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import Title from '../components/MyLibrary/Title';
import TicketList from '../components/MyLibrary/TicketList';
import AskBox from '../components/MyLibrary/AskBox';
import { getMyTickets } from '../lib/api/fairytale';

const PageContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const TicketListContainer = styled.View`
  width: 100%;
  height: 80%;
  position: relative;
  display: flex;
`;

const Container = styled.View`
  position: absolute;
  justify-content: center;
  align-items: center;
`;

const MyLibraryPage = ({ pageType, setPageType }) => {
  const [tickets, setTickets] = useState();
  const [pressTicket, setPressTicket] = useState(false);
  const [title, setTitle] = useState('');
  const [getIdx, setGetIdx] = useState('');

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const fetchedTickets = await getMyTickets();
        setTickets(fetchedTickets);
      } catch (error) {
        console.error('Error fetching tickets: ', error);
      }
    };
    fetchTickets();
  }, []);

  return (
    <PageContainer>
      <Title />
      <TicketListContainer>
        <TicketList setGetIdx={setGetIdx} tickets={tickets} setPressTicket={setPressTicket} setTitle={setTitle} pageType={pageType} setPageType={setPageType} />
      </TicketListContainer>
      {pressTicket ? (
        <Container>
          <AskBox getIdx={getIdx} setPressTicket={setPressTicket} title={title} setPageType={setPageType} />
        </Container>
      ) : (
        ''
      )}
    </PageContainer>
  );
};

export default MyLibraryPage;
