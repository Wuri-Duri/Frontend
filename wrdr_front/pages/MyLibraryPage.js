import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import Title from '../components/MyLibrary/Title';
import TicketList from '../components/MyLibrary/TicketList';

import axios from 'axios';

const TicketListContainer = styled.View`
  width: 100%;
  height: 80%;
  position: relative;
  display: flex;
`;

const MyLibraryPage = ({ pageType, setPageType }) => {
  //서버에서 받는 정보 형태랑 맞춰서 테스트 필요
  const [tickets, setTickets] = useState();

  const getMyTickets = async () => {
    try {
      const { data } = await axios.get('http://52.79.115.87:3000/fairytale/main/1');
      console.log('[success] getMyTickets ', data.data);
      setTickets(data.data);
    } catch (error) {
      console.log('[FAIL] getMyTickets ', error);
      throw error;
    }
  };

  useEffect(() => {
    getMyTickets();
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
