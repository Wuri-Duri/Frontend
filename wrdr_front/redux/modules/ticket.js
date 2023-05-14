//Action
const GET_TICKET_IMAGE = 'ticket/GET_TICKET_IMAGE';
const GET_TICKET_TITLE = 'ticket/GET_TICKET_TITLE';

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

//initialize
const initState = {
  ticketImage: [''],
  storyTitle: '',
};

//Reducer
export default function ticketReducer(state = initState, action) {
  switch (action.type) {
    case 'ticket/GET_TICKET_IMAGE':
      console.log('redux: ', state.ticketImage);
      return { ...state, ticketImage: action.ticketImage };
    case 'ticket/GET_TICKET_TITLE':
      console.log('redux: ', state.storyTitle);
      return { ...state, storyTitle: action.storyTitle };
    default:
      return state;
  }
}
