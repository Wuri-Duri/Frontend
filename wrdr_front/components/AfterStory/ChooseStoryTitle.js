import React from 'react';
import Styled from 'styled-components';
import TicketImageBox from './TicketImageBox';

const Container = Styled.View`
  width: 100%;
  height:78%;
  flex-direction: row;
  justify-content: center;
`;

const ChooseStoryTitle = ({ pageType, setPageType }) => {
  return (
    <>
      <Container>
        <TicketImageBox pageType={pageType} />
      </Container>
    </>
  );
};

export default ChooseStoryTitle;
