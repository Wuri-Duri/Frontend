// import API from './api';
import axios from 'axios';
import config from '../../config';

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

export const requestPAPAGOAPI = async madeText => {
  try {
    const response = await axios.post(
      config.PAPAGO_URL,
      {
        source: 'ko',
        target: 'en',
        text: madeText,
      },
      {
        headers: {
          'Content-Type': `application/x-www-form-urlencoded; charset=UTF-8`,
          'X-Naver-Client-Id': config.PAPAGO_ID,
          'X-Naver-Client-Secret': config.PAPAGO_SECRET,
        },
      },
    );
    return response.data.message.result.translatedText;
  } catch (e) {
    console.error('PAPAGO API request fail: ', e);
  }
};
export const requestDALLEAPI = async engText => {
  try {
    const response = await axios.post(
      config.DALLE_URL,
      {
        prompt: engText + 'in oil painting, without any character',
        n: 1,
        size: '1024x1024',
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: config.DALLE_AUTHORIZATION,
        },
      },
    );
    return response.data.data[0].url;
  } catch (e) {
    console.error('Dalle API request fail: ', e);
  }
};
