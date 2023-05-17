// import API from './api';
import axios from 'axios';

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
      'https://openapi.naver.com/v1/papago/n2mt',
      {
        source: 'ko',
        target: 'en',
        text: madeText,
      },
      {
        headers: {
          'Content-Type': `application/x-www-form-urlencoded; charset=UTF-8`,
          'X-Naver-Client-Id': `cilZfUeALghqIn3MKQEF`,
          'X-Naver-Client-Secret': `l70w3RgbKM`,
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
      'https://api.openai.com/v1/images/generations',
      {
        prompt: engText + 'in oil painting, without any character',
        n: 1,
        size: '1024x1024',
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer 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`,
        },
      },
    );
    return response.data.data[0].url;
  } catch (e) {
    console.error('Dalle API request fail: ', e);
  }
};

// export const makeFirstSentence = async () => {
//   try {
//     const response = await axios.post(
//       'https://clovastudio.apigw.ntruss.com/testapp/v1/tasks/5s80qqmj/completions/LK-D',
//       {
//         topK: 4,
//         includeProbs: false,
//         includeTokens: false,
//         restart: '',
//         includeAiFilters: true,
//         maxTokens: 300,
//         temperature: 0.85,
//         start: '',
//         stopBefore: ['<|endoftext|>'],
//         text: '인물:' + bookInfo.characters.map(character => character.name) + '배경:' + bookInfo.place,
//         repeatPenalty: 5.0,
//         topP: 0.8,
//       },
//       {
//         headers: {
//           'Content-Type': 'application/json',
//           'X-NCP-CLOVASTUDIO-API-KEY': `NTA0MjU2MWZlZTcxNDJiYzd8M2hRTH/NiK082823And3UOASW+DXQBDDOp+RjuZ6NRTFb7rENlqe8NRNt1N/3/5LE3j+hU42w7PldHnbAr5SZBhNJVQek38HrnjDxrdPUEc7iJQ7KrEp8SggQJVqc0l+hUKywMcZ8GrCWhNyh8thvGf2LXAIcLdv2NNgDwMmQvhsuOFARSVfkaxuc0LRjA==`,
//           'X-NCP-APIGW-API-KEY': `bCvrbyYyvdUkLpiY9kpnSzrTNIZdEBQ1GQ4le0MC`,
//           'X-NCP-CLOVASTUDIO-REQUEST-ID': `e51fb316a1574a598e1a577bb0f91e0b`,
//         },
//       },
//     );
//   } catch (e) {
//     console.log('[FAIL] makeFirstSentence: ', e);
//   }
// };
