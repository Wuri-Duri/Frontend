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

const AfterStoryPage = ({ ticketInfo, setTicketInfo, pageType, setPageType, bookInfo, setBookInfo, imageDalle, setImageDalle, images, setImages }) => {

  const [title, setTitle] = useState('');

  const [finish, setFinish] = useState(false);
  const [show, setShow] = useState(false);

  return (
    <>
      <AfterStoryTitle pageType={pageType} setPageType={setPageType} show={show} setShow={setShow} />
      {pageType === 'ticketImage' ? (
        <ChooseTicketImage
          pageType={pageType}
          ticketInfo={ticketInfo}
          setTicketInfo={setTicketInfo}
          show={show}
          setShow={setShow}
          imageDalle={imageDalle}
          setImageDalle={setImageDalle}
          images={images}
          setImages={setImages}
        />
      ) : pageType === 'storyTitle' ? (
        <ChooseStoryTitle
          pageType={pageType}
          ticketInfo={ticketInfo}
          setTicketInfo={setTicketInfo}
          finish={finish}
          setFinish={setFinish}
          title={title}
          setTitle={setTitle}
          imageDalle={imageDalle}
          setImageDalle={setImageDalle}
          images={images}
          setImages={setImages}
        />
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
          title={title}
          setTitle={setTitle}
        />
      </Container>
    </>
  );
};

export default AfterStoryPage;
