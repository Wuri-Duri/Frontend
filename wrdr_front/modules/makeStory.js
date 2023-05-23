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
const GET_RANDOM_NUM = 'makeStory/GET_RANDOM_NUM';
const GET_SELECT_TEXT1 = 'makeStory/GET_SELECT_TEXT1';
const GET_SELECT_TEXT2 = 'makeStory/GET_SELECT_TEXT2';
const GET_SELECTED_TEXT = 'makeStory/GET_SELECTED_TEXT';
const GET_GRAMMAR_CORRECT = 'makeStory/GET_GRAMMAR_CORRECT';
const GET_RECORD_VOICE = 'makeStory/GET_RECORD_VOICE';
const GET_QUESTION = 'makeStory/GET_QUESTION';
const GET_TYPING_TEXT = 'makeStory/GET_TYPING_TEXT';
const GET_TYPED_TEXT = 'makeStory/GET_TYPED_TEXT';

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

export const getRandomNum = randomNum => {
  return {
    type: GET_RANDOM_NUM,
    randomNum,
  };
};

export const getSelectText1 = selectText1 => {
  return {
    type: GET_SELECT_TEXT1,
    selectText1,
  };
};

export const getSelectText2 = selectText2 => {
  return {
    type: GET_SELECT_TEXT2,
    selectText2,
  };
};

export const getSelectedText = selectedText => {
  return {
    type: GET_SELECTED_TEXT,
    selectedText,
  };
};

export const getGrammarCorrect = correctedText => {
  return {
    type: GET_GRAMMAR_CORRECT,
    correctedText,
  };
};

export const getRecordVoice = recordVoice => {
  return {
    type: GET_RECORD_VOICE,
    recordVoice,
  };
};

export const getQuestion = question => {
  return {
    type: GET_QUESTION,
    question,
  };
};

export const getTypingText = typingText => {
  return {
    type: GET_TYPING_TEXT,
    typingText,
  };
};

export const getTypedText = typedText => {
  return {
    type: GET_TYPING_TEXT,
    typedText,
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
  randomNum: 0,
  selectText1: '',
  selectText2: '',
  selectedText: '',
  correctedText: '',
  recordVoice: '',
  question: '',
  typingText: '',
  typedText: '',
};

//Reducer
export default function makestoryReducer(state = initState, action) {
  switch (action.type) {
    case 'makeStory/GET_AI_TEXT': //정의한 액션 부르면
      return { ...state, aiText: action.aiText }; //이렇게 해라
    case 'makeStory/GET_USER_TEXT':
      console.log('getUserText ', action.userText);
      return { ...state, userText: action.userText };
    case 'makeStory/GET_PAGE_NUM':
      return { ...state, num: state.num + 1 };
    case 'makeStory/GET_STORY_IMAGE':
      return { ...state, dalleUrl: action.dalleUrl, allImageList: [...state.allImageList, action.dalleUrl] };
    case 'makeStory/GET_ALL_TEXT':
      return { ...state, allText: action.allText };
    case 'makeStory/GET_RANDOM_NUM':
      return { ...state, randomNum: action.randomNum };
    case 'makeStory/GET_SELECT_TEXT1':
      return { ...state, selectText1: action.selectText1 };
    case 'makeStory/GET_SELECT_TEXT2':
      return { ...state, selectText2: action.selectText2 };
    case 'makeStory/GET_SELECTED_TEXT':
      return { ...state, selectedText: action.selectedText };
    case 'makeStory/GET_GRAMMAR_CORRECT':
      console.log('grammar ', action.correctedText);
      return { ...state, correctedText: action.correctedText };
    case 'makeStory/GET_RECORD_VOICE':
      return { ...state, recordVoice: action.recordVoice };
    case 'makeStory/GET_QUESTION':
      return { ...state, question: action.question };
    case 'makeStory/GET_TYPING_TEXT':
      console.log('수정할 문장: ', action.typingText);
      return { ...state, typingText: action.typingText };
    case 'makeStory/GET_TYPED_TEXT':
      console.log('수정된 문장: ', action.typedText);
      return { ...state, typedText: action.typedText };
    case 'makeStory/INIT_TEXT':
      return {
        aiText: initState.aiText,
        userText: initState.userText,
        num: initState.num,
        dalleUrl: initState.dalleUrl,
        allText: initState.allText,
        allImageList: initState.allImageList,
        randomNum: initState.randomNum,
        selectText1: initState.selectText1,
        selectText2: initState.selectText2,
        selectedText: initState.selectedText,
        correctedText: initState.correctedText,
        recordVoice: initState.recordVoice,
        question: initState.question,
        typingText: initState.typingText,
        typedText: initState.typedText,
      };
    default:
      return state;
  }
}
