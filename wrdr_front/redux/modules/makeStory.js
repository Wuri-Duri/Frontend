import createRequestSaga from '../../api/createRequestSaga';
import { createRequestActionTypes } from '../../api/createRequestSaga';
import { createAction, handleActions } from 'redux-actions';
import * as makeStoryAPI from '../../api/fairytale';
import { takeLatest } from 'redux-saga/effects';

//Action
const [GET_AI_TEXT, GET_AI_TEXT_SUCCESS, GET_AI_TEXT_FAILURE] = createRequestActionTypes('makeStory/GET_AI_TEXT');
const GET_USER_TEXT = 'makeStory/GET_USER_TEXT';
const GET_PAGE_NUM = 'makeStory/GET_PAGE_NUM';
const INIT_TEXT = 'makeStory/INIT_TEXT';

//Action Creators
export const getAIText = aiText => {
  return {
    type: GET_AI_TEXT,
    value: aiText,
  };
};

export const getUserText = userText => {
  return {
    type: GET_USER_TEXT,
    userText,
  };
};

export const getPageNum = num => {
  return {
    type: GET_PAGE_NUM,
    num,
  };
};

export function initText() {
  return {
    type: INIT_TEXT,
  };
}

//initialize
const initState = {
  aiText: '',
  userText: '녹음 버튼을 눌러주세요!',
  num: 0,
};

//Reducer
export default function makestoryReducer(state = initState, action) {
  switch (action.type) {
    case 'makeStory/GET_AI_TEXT': //정의한 액션 부르면
      // console.log(state.aiText);
      return { ...state, aiText: action.aiText }; //이렇게 해라
    case 'makeStory/GET_USER_TEXT':
      console.log('reducer: ', state.userText);
      return { ...state, userText: action.userText };
    case 'makeStory/GET_PAGE_NUM':
      console.log('reducer: ', state.num);
      return { ...state, num: state.num + 1 };
    case 'makeStory/INIT_TEXT':
      return { aiText: initState.aiText, userText: initState.userText, num: initState.num };
    default:
      return state;
  }
}
