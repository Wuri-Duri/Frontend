//Action
//const GET_AI_TEXT = 'wrdr/GET_AI_TEXT';
const GET_USER_TEXT = 'wrdr/GET_USER_TEXT';

//Action Creators
/*
export const getAIText = values => {
  return {
    type: GET_AI_TEXT,
    values,
  };
};*/

export const getUserText = values => {
  return {
    type: GET_USER_TEXT,
    values: [{ voiceLabel: '' }],
  };
};

//initialize
const initialUserText = {
  voiceLabel: ['녹음 버튼을 눌러주세요!'],
};

//Reducer
export default function makestoryReducer(state = initialUserText, action = {}) {
  switch (action.type) {
    case 'makestory/GET_AI_TEXT': //정의한 액션 부르면
      console.log(state.values);
      return { ...state, values: state.values }; //이렇게 해라
    case 'makestory/GET_USER_TEXT':
      console.log(state.values);
      return { ...state, values: state.values };
    default:
      return state;
  }
}
