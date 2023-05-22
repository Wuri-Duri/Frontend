import React, { useState } from 'react';
import styled from 'styled-components/native';
import NavBar from '../components/Preset/NavBar';
import Title from '../components/Preset/Title';
import SetCharacter from '../components/Preset/SetCharacter';
import SetBackground from '../components/Preset/SetBackground';
import SetLength from '../components/Preset/SetLength';
import CircleButton from '../components/common/CircleButton';

import { useSelector, useDispatch } from 'react-redux';
import { getPreCharInfo, getPreBgInfo, getPreLenInfo } from '../modules/presetStory';

const Container = styled.View`
  width: 100%;
  height: 20%;
  position: absolute;
  bottom: 0;
`;

const FinSplash = styled.ImageBackground`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const FinText = styled.Text`
  font-size: 47;
  font-weight: bold;
  text-align: center;
  color: #ffffff;
  font-family: jalnan;
`;

const PresetPage = ({ pageType, setPageType, bookInfo, setBookInfo }) => {
  const [presetFinish, setPresetFinish] = useState(false);
  const [rocketFinish, setRocketFinish] = useState(false);
  const [showTextFinish, setShowTextFinish] = useState(false);

  const dispatch = useDispatch();

  dispatch(getPreCharInfo(bookInfo.characters));
  dispatch(getPreBgInfo(bookInfo.place));
  dispatch(getPreLenInfo(bookInfo.length));

  return !presetFinish ? (
    <>
      <NavBar pageType={pageType} setPageType={setPageType} />
      <Title pageType={pageType} />
      {pageType === 'character' ? (
        <SetCharacter bookInfo={bookInfo} setBookInfo={setBookInfo} />
      ) : pageType === 'place' ? (
        <SetBackground bookInfo={bookInfo} setBookInfo={setBookInfo} />
      ) : pageType === 'length' ? (
        <SetLength bookInfo={bookInfo} setBookInfo={setBookInfo} presetFinish={presetFinish} setPresetFinish={setPresetFinish} />
      ) : null}
      <Container>
        <CircleButton
          pageType={pageType}
          setPageType={setPageType}
          bookInfo={bookInfo}
          presetFinish={presetFinish}
          setPresetFinish={setPresetFinish}
          rocketFinish={rocketFinish}
          setRocketFinish={setRocketFinish}
          showTextFinish={showTextFinish}
          setShowTextFinish={setShowTextFinish}
        />
      </Container>
    </>
  ) : presetFinish && !rocketFinish ? (
    <FinSplash source={require('../assets/flyRocket.gif')} />
  ) : presetFinish && rocketFinish ? (
    <FinText>
      준비가 끝났어요!{'\n'}
      {'\n'}새로운 이야기 행성으로 떠나볼까요?
    </FinText>
  ) : (
    ''
  );
};

export default PresetPage;
