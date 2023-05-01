//Action
const GET_AI_TEXT = 'makeStory/GET_AI_TEXT';
const GET_USER_TEXT = 'makeStory/GET_USER_TEXT';

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
    value: userText,
  };
};

//initialize
const initState = {
  aiText: '',
  userText: '녹음 버튼을 눌러주세요!',
};

//Reducer
// const makeStory = handleActions(
//   {
//     [GET_AI_TEXT]: (state, { payload: aiText }) => ({
//       ...state,
//       aiText,
//     }),
//     [GET_USER_TEXT]: (state, { payload: userText }) => ({
//       ...state,
//       userText,
//     }),
//   },
//   initState,
// );

export default function makestoryReducer(state = initState, action) {
  switch (action.type) {
    case 'makestory/GET_AI_TEXT': //정의한 액션 부르면
      // console.log(state.value);
      return { ...state, value: action.value }; //이렇게 해라
    case 'makestory/GET_USER_TEXT':
      console.log(state.userText);
      return { ...state, userText: action.value };
    default:
      return state;
  }
}
