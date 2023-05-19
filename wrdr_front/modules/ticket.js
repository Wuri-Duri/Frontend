//Action
const GET_TICKET_IMAGE = 'ticket/GET_TICKET_IMAGE';
const GET_TICKET_TITLE = 'ticket/GET_TICKET_TITLE';
const GET_TICKET_IDX = 'ticket/GET_TICKET_IDX';

//Action Creators
export const getTicketImage = ticketImage => {
  return {
    type: GET_TICKET_IMAGE,
    ticketImage,
  };
};

export const getTicketTitle = storyTitle => {
  return {
    type: GET_TICKET_TITLE,
    storyTitle,
  };
};

export const getTicketIdx = ticketIdx => {
  return {
    type: GET_TICKET_IDX,
    ticketIdx,
  };
};

//initialize
const initState = {
  ticketImage: [''],
  storyTitle: '',
  ticketIdx: 0,
};

//Reducer
export default function ticketReducer(state = initState, action) {
  switch (action.type) {
    case 'ticket/GET_TICKET_IMAGE':
      console.log('이미지여기야: ', action.ticketImage);
      return { ...state, ticketImage: action.ticketImage };
    case 'ticket/GET_TICKET_TITLE':
      console.log('제목: ', action.storyTitle);
      return { ...state, storyTitle: action.storyTitle };
    case 'ticket/GET_TICKET_IDX':
      console.log("여기야 ", action.ticketIdx);
      return { ...state, ticketIdx: action.ticketIdx };
    default:
      return state;
  }
}
