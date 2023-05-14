//Action
const GET_AI_TEXT = 'makeStory/GET_AI_TEXT';
const GET_USER_TEXT = 'makeStory/GET_USER_TEXT';
const GET_PAGE_NUM = 'makeStory/GET_PAGE_NUM';

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
    default:
      return state;
  }
}
