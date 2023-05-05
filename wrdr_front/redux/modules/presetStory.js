//Action
const GET_PRESET_CHARACTER_INFO = 'presetStory/GET_PRESET_CHARACTER_INFO';
const GET_PRESET_BACKGROUND_INFO = 'presetStory/GET_PRESET_BACKGROUND_INFO';
const GET_PRESET_LENGTH_INFO = 'presetStory/GET_PRESET_LENGTH_INFO';

//Action Creators
export const getPreCharInfo = character => {
  return {
    type: GET_PRESET_CHARACTER_INFO,
    character,
  };
};

export const getPreBgInfo = place => {
  return {
    type: GET_PRESET_BACKGROUND_INFO,
    place,
  };
};

export const getPreLenInfo = length => {
  return {
    type: GET_PRESET_LENGTH_INFO,
    length,
  };
};

//initialize
const initState = {
  character: [''],
  place: '',
  length: '',
};

//Reducer
export default function presetstoryReducer(state = initState, action) {
  switch (action.type) {
    case 'presetStory/GET_PRESET_CHARACTER_INFO':
      // console.log(state.character);
      return { ...state, character: action.character };
    case 'presetStory/GET_PRESET_BACKGROUND_INFO':
      // console.log('sdkfj' + state.place);
      return { ...state, place: action.place };
    case 'presetStory/GET_PRESET_LENGTH_INFO':
      console.log(state.length);
      return { ...state, length: action.length };
    default:
      return state;
  }
}
