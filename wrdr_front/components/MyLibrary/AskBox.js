import React from 'react';
import styled from 'styled-components/native';
import noButton from '../../assets/noButton.png';
import finishButton from '../../assets/finishButton.png';
import { TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { getTicketIdx } from '../../modules/ticket';

const Container = styled.View`
  background-color: #ffffff;
  justify-content: center;
  align-items: center;
  width: 700;
  height: 350;
  border-radius: 10;
`;

const AskText = styled.Text`
  font-color: #000000;
  font-size: 35;
  text-align: center;
  font-weight: bold;
  margin-bottom: 30;
  margin-top: 30;
`;

const ButtonContainer = styled.View`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 45%;
`;

const Button = styled.Image``;

const AskBox = ({ getIdx, title, setPressTicket, setPageType }) => {
  const dispatch = useDispatch();

  function checkName(name) {
    //name의 마지막 음절의 유니코드(UTF-16)
    const charCode = name.charCodeAt(name.length - 1);

    //유니코드의 한글 범위 내에서 해당 코드의 받침 확인
    const consonantCode = (charCode - 44032) % 28;

    if (consonantCode === 0) {
      //0이면 받침 없음 -> 를
      return `를`;
    }
    //1이상이면 받침 있음 -> 을
    return `을`;
  }

  const _onPressNoButton = () => {
    setPressTicket(false);
  };

  const _onPressYesButton = () => {
    setPageType('readstory');
    dispatch(getTicketIdx(getIdx));
  };

  return (
    <Container>
      <AskText>
        '{title}'{checkName(title)}
        {'\n'}감상해 볼까요?
      </AskText>
      <ButtonContainer>
        <TouchableOpacity onPress={_onPressNoButton}>
          <Button source={noButton} />
        </TouchableOpacity>
        <TouchableOpacity onPress={_onPressYesButton}>
          <Button source={finishButton} />
        </TouchableOpacity>
      </ButtonContainer>
    </Container>
  );
};

export default AskBox;
