import React, { useState } from 'react';
import Styled from 'styled-components/native';
import AfterStoryTitle from '../components/AfterStory/AfterStoryTitle';
import ChooseStoryTitle from '../components/AfterStory/ChooseStoryTitle';
import ChooseTicketImage from '../components/AfterStory/ChooseTicketImage';
import CircleButton from '../components/common/CircleButton';

const Container = Styled.View`
  width: 100%;
  height: 20%;
  position: absolute;
  bottom: 0;
`;

const AfterStoryPage = ({ pageType, setPageType }) => {
  const [ticketInfo, setTicketInfo] = useState({
    ticketImage: [''],
    storyTitle: null,
    isActive: {
      ticketImage: false,
      storyTitle: false,
    },
  });
  const [imageInfo, setImageInfo] = useState({
    imageSrc: null,
  });

  const [finish, setFinish] = useState(false);

  return (
    <>
      <AfterStoryTitle pageType={pageType} setPageType={setPageType} />
      {pageType === 'ticketImage' ? (
        <ChooseTicketImage pageType={pageType} ticketInfo={ticketInfo} setTicketInfo={setTicketInfo} imageInfo={imageInfo} setImageInfo={setImageInfo} />
      ) : pageType === 'storyTitle' ? (
        <ChooseStoryTitle pageType={pageType} ticketInfo={ticketInfo} setTicketInfo={setTicketInfo} imageInfo={imageInfo} setImageInfo={setImageInfo} finish={finish} setFinish={setFinish} />
      ) : null}
      <Container>
        <CircleButton pageType={pageType} setPageType={setPageType} ticketInfo={ticketInfo} finish={finish} setFinish={setFinish} />
      </Container>
    </>
  );
};

export default AfterStoryPage;
