// import API from './api';

// const getMyTickets = async () => {
//   try {
//     const { data } = await API.get('/fairytale/main/1');
//     console.log('[success] getMyTickets ', data);
//     return data;
//   } catch (error) {
//     console.log('[FAIL] getMyTickets ', error);
//     throw error;
//   }
// };

// const postPreset = async preset => {
//   const { characters, bgPlace, length } = preset;
//   const requestBody = {
//     characters,
//     bgPlace,
//     length,
//   };

//   try {
//     const { data, status } = await API.post('/fairytale/preset', requestBody);
//     console.log('[SUCCESS] postPreset', data);
//     return { data, status, error: null };
//   } catch (error) {
//     console.log('[FAIL] postPreset ', error);
//   }
// };

// const postTicketInfo = async ticket => {
//   const { ticketIdx, title, coverImage } = ticket;
//   const requestBody = {
//     ticketIdx,
//     title,
//     coverImage,
//   };

//   try {
//     const { data, status } = await API.post('/fairytale/createcover', requestBody);
//     console.log('[SUCCESS] postTicketInfo', data);
//     return { data, status, error: null };
//   } catch (error) {
//     console.log('[FAIL] postTicketInfo', error);
//   }
// };

// export { getMyTickets, postPreset, postTicketInfo };
