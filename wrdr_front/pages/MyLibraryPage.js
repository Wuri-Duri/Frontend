import React, {useState} from 'react';
import styled from 'styled-components/native';
import Title from '../components/MyLibrary/Title';
import TicketList from '../components/MyLibrary/TicketList';

const TicketListContainer = styled.View`
  width: 100%;
  height: 62%;
  position: relative;
  display: flex;
`

const MyLibraryPage = () => {

  //서버에서 받는 정보 형태랑 맞춰서 테스트 필요 - 이미지도 넣어야됨!
  //우선 여기다가 임시로 데이터 적어둘게용
  const [tickets, setTickets] = useState([
    { id: 1, title: '예시로 만들어 봤어요' },
    { id: 2, title: '제목 글자수 제한' },
    { id: 3, title: '있어야 될 것 같아요' },
    { id: 4, title: '아님 ... 쓰거나?' }
  ]);

  return (
    <>
      <Title/>
      <TicketListContainer>
        <TicketList tickets = {tickets}/>
      </TicketListContainer>
    </>
  );
};

export default MyLibraryPage;
