//Action
const GET_PRESET_BOOKINFO = 'wrdr/GET_PRESET_BOOKINFO';

//Action Creators
export const getPresetBookInfo = values => {
  return {
    type: GET_PRESET_BOOKINFO,
    values: [
      {
        characters: '',
        place: '',
        length: '',
      },
    ],
  };
};

//initialize
const initialBookInfo = {
  characters: [''],
  place: null,
  length: null,
  isActive: {
    characters: false,
    place: false,
    length: false,
  },
};

//Reducer
export default function reducer(state = initialBookInfo, action = {}) {
  switch (action.type) {
    case 'preset/GET_PRESET_BOOKINFO': //정의한 액션 부르면
      console.log(state.values);
      return { ...state, values: action.values }; //이렇게 해라
    default:
      return state;
  }
}
