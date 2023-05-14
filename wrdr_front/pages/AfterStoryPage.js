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

const AfterStoryPage = ({ pageType, setPageType, bookInfo, setBookInfo }) => {
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
  const [show, setShow] = useState(false);

  return (
    <>
      <AfterStoryTitle pageType={pageType} setPageType={setPageType} show={show} setShow={setShow} />
      {pageType === 'ticketImage' ? (
        <ChooseTicketImage pageType={pageType} ticketInfo={ticketInfo} setTicketInfo={setTicketInfo} imageInfo={imageInfo} setImageInfo={setImageInfo} show={show} setShow={setShow} />
      ) : pageType === 'storyTitle' ? (
        <ChooseStoryTitle pageType={pageType} ticketInfo={ticketInfo} setTicketInfo={setTicketInfo} imageInfo={imageInfo} setImageInfo={setImageInfo} finish={finish} setFinish={setFinish} />
      ) : null}
      <Container>
        <CircleButton
          pageType={pageType}
          setPageType={setPageType}
          bookInfo={bookInfo}
          setBookInfo={setBookInfo}
          ticketInfo={ticketInfo}
          finish={finish}
          setFinish={setFinish}
          show={show}
          setShow={setShow}
        />
      </Container>
    </>
  );
};

export default AfterStoryPage;
