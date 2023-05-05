//Action
const GET_AI_TEXT = 'makeStory/GET_AI_TEXT';
const GET_USER_TEXT = 'makeStory/GET_USER_TEXT';
// const GET_STORY_TEXT = 'makeStory/GET_STORY_TEXT';

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

// export const getStoryText = storyText => {
//   return {
//     type: GET_STORY_TEXT,
//     storyText,
//   };
// };

//initialize
const initState = {
  aiText: '',
  userText: '녹음 버튼을 눌러주세요!',
};

//Reducer
export default function makestoryReducer(state = initState, action) {
  switch (action.type) {
    case 'makeStory/GET_AI_TEXT': //정의한 액션 부르면
      // console.log(state.aiText);
      return { ...state, aiText: action.aiText }; //이렇게 해라
    case 'makeStory/GET_USER_TEXT':
      console.log(state.userText);
      return { ...state, userText: action.userText };
    // case 'makeStory/GET_STORY_TEXT':
    //   return { ...state, userText: action.storyText, aiText: action.storyText };
    default:
      return state;
  }
}
