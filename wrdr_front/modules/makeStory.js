// import createRequestSaga from '../../api/createRequestSaga';
// import { createRequestActionTypes } from '../../api/createRequestSaga';
// import { createAction, handleActions } from 'redux-actions';
// import * as makeStoryAPI from '../../api/fairytale';
// import { takeLatest } from 'redux-saga/effects';

// Action
// const [GET_AI_TEXT, GET_AI_TEXT_SUCCESS, GET_AI_TEXT_FAILURE] = createRequestActionTypes('makeStory/GET_AI_TEXT');
const GET_AI_TEXT = 'makeStory/GET_AI_TEXT';
const GET_USER_TEXT = 'makeStory/GET_USER_TEXT';
const GET_PAGE_NUM = 'makeStory/GET_PAGE_NUM';
const INIT_TEXT = 'makeStory/INIT_TEXT';
const GET_STORY_IMAGE = 'makeStory/GET_STORY_IMAGE';
const GET_ALL_TEXT = 'makeStory/GET_ALL_TEXT';

//Action Creators
export const getAIText = aiText => {
  return {
    type: GET_AI_TEXT,
    aiText,
  };
};

export const getUserText = userText => {
  return {
    type: GET_USER_TEXT,
    userText,
  };
};

export const getAllText = allText => {
  return {
    type: GET_ALL_TEXT,
    allText,
  };
};

export const getPageNum = num => {
  return {
    type: GET_PAGE_NUM,
    num,
  };
};

export const getStoryImage = dalleUrl => {
  return {
    type: GET_STORY_IMAGE,
    dalleUrl,
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
  userText: '',
  num: 0,
  dalleUrl: '',
  allText: '',
  allImageList: [],
};

//Reducer
export default function makestoryReducer(state = initState, action) {
  switch (action.type) {
    case 'makeStory/GET_AI_TEXT': //정의한 액션 부르면
      return { ...state, aiText: action.aiText }; //이렇게 해라
    case 'makeStory/GET_USER_TEXT':
      return { ...state, userText: action.userText };
    case 'makeStory/GET_PAGE_NUM':
      return { ...state, num: state.num + 1 };
    case 'makeStory/GET_STORY_IMAGE':
      return { ...state, dalleUrl: action.dalleUrl, allImageList: [...state.allImageList, action.dalleUrl] };
    case 'makeStory/GET_ALL_TEXT':
      return { ...state, allText: action.allText };
    case 'makeStory/INIT_TEXT':
      return { aiText: initState.aiText, userText: initState.userText, num: initState.num, dalleUrl: initState.dalleUrl, allText: initState.allText, allImageList: initState.allImageList };
    default:
      return state;
  }
}
