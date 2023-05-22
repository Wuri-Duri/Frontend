import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import Title from '../components/MyLibrary/Title';
import TicketList from '../components/MyLibrary/TicketList';
import { getMyTickets } from '../lib/api/fairytale';

const TicketListContainer = styled.View`
  width: 100%;
  height: 80%;
  position: relative;
  display: flex;
`;

const MyLibraryPage = ({ pageType, setPageType }) => {
  const [tickets, setTickets] = useState();

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
    <>
      <Title />
      <TicketListContainer>
        <TicketList tickets={tickets} pageType={pageType} setPageType={setPageType} />
      </TicketListContainer>
    </>
  );
};

export default MyLibraryPage;
