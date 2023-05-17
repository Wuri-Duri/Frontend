//Action
const GET_PRESET_CHARACTER_INFO = 'presetStory/GET_PRESET_CHARACTER_INFO';
const GET_PRESET_BACKGROUND_INFO = 'presetStory/GET_PRESET_BACKGROUND_INFO';
const GET_PRESET_LENGTH_INFO = 'presetStory/GET_PRESET_LENGTH_INFO';
const INIT_PRESET = 'presetStory/INIT_PRESET';

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

export function initPreset() {
  return {
    type: INIT_PRESET,
  };
}

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
      // console.log('인러니러ㅣㄴ: ', state.character);
      return { ...state, character: action.character };
    case 'presetStory/GET_PRESET_BACKGROUND_INFO':
      // console.log('sdkfj' + state.place);
      return { ...state, place: action.place };
    case 'presetStory/GET_PRESET_LENGTH_INFO':
      // console.log('presetStory:', state);
      return { ...state, length: action.length };
    case 'presetStory/INIT_PRESET':
      return { character: initState.character, place: initState.place, length: initState.length };
    default:
      return state;
  }
}
