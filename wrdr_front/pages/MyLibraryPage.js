import React, { useState } from 'react';
import styled from 'styled-components/native';
import Title from '../components/MyLibrary/Title';
import TicketList from '../components/MyLibrary/TicketList';

const TicketListContainer = styled.View`
  width: 100%;
  height: 62%;
  position: relative;
  display: flex;
`;

const MyLibraryPage = () => {
  //서버에서 받는 정보 형태랑 맞춰서 테스트 필요
  const [tickets, setTickets] = useState([
    { id: 1, image: '../../assets/MyLibrary/peterpan.jpg', title: '예시로 만들어 봤어요' },
    { id: 2, image: '../../assets/MyLibrary/peterpan.jpg', title: '제목 글자수 제한' },
    { id: 3, image: '../../assets/MyLibrary/peterpan.jpg', title: '있어야 될 것 같아요' },
    { id: 4, image: '../../assets/MyLibrary/peterpan.jpg', title: '아님 ... 쓰거나?' },
  ]);

  return (
    <>
      <Title />
      <TicketListContainer>
        <TicketList tickets={tickets} />
      </TicketListContainer>
    </>
  );
};

export default MyLibraryPage;
