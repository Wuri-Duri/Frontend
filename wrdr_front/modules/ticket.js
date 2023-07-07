//Action
const GET_TICKET_IMAGE = 'ticket/GET_TICKET_IMAGE';
const GET_TICKET_TITLE = 'ticket/GET_TICKET_TITLE';
const GET_TICKET_IDX = 'ticket/GET_TICKET_IDX';
const INIT_TICKET = 'ticket/INIT_TICKET';

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

export function initTicket() {
  return {
    type: INIT_TICKET,
  };
}

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
      return { ...state, ticketImage: action.ticketImage };
    case 'ticket/GET_TICKET_TITLE':
      return { ...state, storyTitle: action.storyTitle };
    case 'ticket/GET_TICKET_IDX':
      return { ...state, ticketIdx: action.ticketIdx };
    case 'ticket/INIT_TICKET':
      return { ...initState };
    default:
      return state;
  }
}
