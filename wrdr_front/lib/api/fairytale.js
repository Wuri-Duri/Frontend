// import API from './api';
import axios from 'axios';
import config from '../../config';

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
        prompt: engText + ', bright, colorful, cute, digital art, concept art',
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

export const postStoryText = async (idx, text, image) => {
  try {
    const postData = {
      ticketIdx: idx,
      text: text,
      img: image,
    };
    const response = await axios.post(config.BASE_URL + '/fairytale/page', postData);
    console.log('success: ', response.data);
  } catch (e) {
    console.error('PostStoryText fail: ', e);
  }
};

const middleTextTest =
  '동화의 다음 문장을 생성하시오.\n\n동화: 한 바닷가 마을에서 살던 작은 소녀인 릴리는 바닷가에서 자주 피터팬을 만났습니다. 피터팬은 바닷가를 사랑하고, 항상 멋진 모험 이야기를 들려주었기 때문에 릴리는 그를 좋아하게 되었습니다. 그러던 어느 날, 릴리는 피터팬과 함께 바닷가를 탐험하던 중에, 바다 속으로 빠져버렸어요.\n피터팬은 릴리를 구하기 위해 바다에 뛰어들었지만 바닷속이 너무 어두워서 아무것도 볼 수 없었어요.\n###\n동화: 깊고 깊은 바닷속 인어공주에게는 다섯 명의 언니들이 있었어요. 언니들은 막내 인어공주에게 바다 위 세상에 대한 이야기를 매일매일 해주었죠. 바다 위 세상에 대한 이야기를 들을 때마다 인어공주의 가슴은 두근두근 뛰었답니다. 그리고 드디어 공주의 열다섯 번째 생일날 열다섯 살이 된 인어공주는 바다 위로 힘차게 헤엄쳤어요. 그때 흥겨운 음악 소리와 함께 배 한 척이 다가왔어요. 인어공주는 배 갑판에 서 있는 왕자님을 본 순간 숨을 쉴 수가 없었어요.\n왕자님에게 한 눈에 반해버리고 만 인어공주는 그 이후로 왕자님을 볼 수 없게 되자 시름시름 앓았답니다.\n###\n동화: 옛날 마을에 어느 가난한 나무꾼이 살았어요. 그 나무꾼은 너무 가난한 나머지 호랑이한테 잡아먹히겠다며 산을 넘어가는데, 도중에 진짜 호랑이를 만났어요. 막상 호랑이를 만나 겁이 난 나무꾼은 위기를 모면하기 위해 호랑이에게 이렇게 말했어요.“아이고 형님! 어머니께서 말씀하시길 저에게 형이 하나 있는데 죽어서 호랑이가 되었다고 하더니 바로 그 형님이시군요!” 그러면서 어머님이 형님을 그리워하니 당장 뵈러 가자고 하였답니다.\n그러자 호랑이는 나무꾼의 말을 믿고 화들짝 놀라며 그를 따라 마을로 내려갔어요.\n###\n동화: 옛날 숲속에 신데렐라와 피터팬이 살았어요. 둘은 서로 친구였죠. 그러던 어느 날 신데렐라는 숲 속으로 놀러 갔다가 길을 잃고 말았어요. 한참을 헤매던 신데렐라는 그만 발을 헛디뎌서 연못에 빠지고 말았어요. 그때 마침 그곳을 지나던 피터팬이 물에 빠진 신데렐라를 구해주었어요.\n신데렐라는 마치 물에 빠진 생쥐 같았어요.\n###\n동화:';

export const requestMiddleSentence = async currentText => {
  try {
    const response = await axios.post(
      config.CLOVASTUDIO_MIDDLE_URL,
      {
        topK: 0,
        includeProbs: false,
        includeTokens: true,
        restart: '',
        includeAiFilters: true,
        maxTokens: 80,
        temperature: 0.8,
        start: '',
        stopBefore: ['###'],
        text: middleTextTest + currentText,
        topP: 0.7,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'X-NCP-APIGW-API-KEY': config.APIGW_MIDDLE_API_KEY,
          'X-NCP-CLOVASTUDIO-API-KEY': config.CLOVASTUDIO_MIDDLE_API_KEY,
          'X-NCP-CLOVASTUDIO-REQUEST-ID': config.CLOVASTUDIO_MIDDLE_REQUEST_ID,
        },
      },
    );

    const result = response.data.result.outputText;
    const splitedText = result.split(/[!,?,.]/);
    const middleSentence = splitedText[0] + splitedText[1];
    console.log('Middle Sentence:', middleSentence);
    return middleSentence;
  } catch (error) {
    console.error('HYPERCLOVA MIDDLE API request fail: ', error);
    throw error;
  }
};
// return new Promise((resolve, reject) => {
//   axios
//     .post(
//       config.CLOVASTUDIO_MIDDLE_URL,
//       {
//         topK: 0,
//         includeProbs: false,
//         includeTokens: true,
//         restart: '',
//         includeAiFilters: true,
//         maxTokens: 32,
//         temperature: 0.8,
//         start: '',
//         stopBefore: ['###'],
//         text: middleTextTest + currentText,
//         topP: 0.7,
//       },
//       {
//         headers: {
//           'Content-Type': 'application/json',
//           'X-NCP-APIGW-API-KEY': config.APIGW_MIDDLE_API_KEY,
//           'X-NCP-CLOVASTUDIO-API-KEY': config.CLOVASTUDIO_MIDDLE_API_KEY,
//           'X-NCP-CLOVASTUDIO-REQUEST-ID': config.CLOVASTUDIO_MIDDLE_REQUEST_ID,
//         },
//       },
//     )
//     .then(response => {
//       const result = response.data.result.outputText;
//       const splitedText = result.split(/[!,?,.]/);
//       console.log(splitedText[0] + splitedText[1]);
//       resolve(splitedText[0] + splitedText[1]);
//     })
//     .catch(error => {
//       console.error('HYPERCLOVA MIDDLE API request fail: ', error);
//       reject(error);
//     });
// });

const grammarTest =
  '입력한 문장의 틀린 문법을 올바른 문장으로 자연스럽게 변환합니다. 문장부호가 필요하면 추가합니다.\n###\n문장: 너랑 걔네들은 다르잖아. 너대로 하면되\n너랑 걔네들은 다르잖아. 너대로 하면 돼\n###\n문장: 이런식으로 행동하면 어떻게?\n이런 식으로 행동하면 어떡해?\n###\n문장: 이제 됬어요?\n이제 됐어요?\n###\n문장: 않돼 그러지마\n안 돼 그러지 마\n###\n문장: 신데렐라가 말를 했어요. 우리 꽃을 따러 가자요.\n신데렐라가 말했어요. "우리 꽃을 따러 가요!"\n###\n문장: 그때 피터팬이가 큰 소리로 물었어요. 여기로 가려면 어떻게 가요.\n그때 피터팬이 큰 소리로 물었어요. "여기로 가려면 어떻게 가야 해요?"\n###\n문장: 이거는 빨간색이고 저거는 파란색이야. 그러니까 두 색깔은 틀려.\n이거는 빨간색이고, 저거는 파란색이야. 그러니까 두 색깔은 달라.\n###\n문장: 여자 역활과 남자 역활이 있는거야.\n여자 역할과 남자 역할이 있는 거야.\n###\n문장: 다람쥐는 항상 걱정이 많았어요. 내가 잘 때 누군가 도토리를 가져가면 어떡하지\n다람쥐는 항상 걱정이 많았어요. "내가 잘 때 누가 도토리를 가져가면 어떡하지?"\n###\n문장: 새 도시에 도착하니 설레임이 느껴졌다.\n새 도시에 도착하니 설렘이 느껴졌다.\n###\n문장: 이런 나쁜 방법은 지향하는게 좋겠죠.\n이런 나쁜 방법은 지양하는 게 좋겠죠.\n###\n문장:';

export const grammarCorrect = async text => {
  try {
    const response = await axios.post(
      config.CLOVASTUDIO_GRAMMAR_URL,
      {
        topK: 0,
        includeProbs: false,
        includeTokens: true,
        restart: '',
        includeAiFilters: true,
        maxTokens: 54,
        temperature: 0.1,
        start: '',
        stopBefore: ['###'],
        text: grammarTest + text + '.',
        repeatPenalty: 3.0,
        topP: 0.7,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'X-NCP-APIGW-API-KEY': config.APIGW_GRAMMAR_API_KEY,
          'X-NCP-CLOVASTUDIO-API-KEY': config.CLOVASTUDIO_GRAMMAR_API_KEY,
          'X-NCP-CLOVASTUDIO-REQUEST-ID': config.CLOVASTUDIO_GRAMMAR_REQUEST_ID,
        },
      },
    );
    console.log('grammar response:   ', response.data.result.outputText);
    return response.data.result.outputText;
  } catch (e) {
    console.error('HYPERCLOVA GRAMMAR API request fail: ', e);
  }
};

const lastText =
  '동화의 다음 문장을 생성하시오\n\n동화: 한 바닷가 마을에서 살던 작은 소녀인 릴리는 바닷가에서 자주 피터팬을 만났습니다. 피터팬은 바닷가를 사랑하고, 항상 멋진 모험 이야기를 들려주었기 때문에 릴리는 그를 좋아하게 되었습니다. 그러던 어느 날, 릴리는 피터팬과 함께 바닷가를 탐험하던 중에, 바다 속으로 빠져버렸어요.\n다음 문장: 피터팬은 릴리를 구하기 위해 바다에 뛰어들었지만 바닷속이 너무 어두워서 아무것도 볼 수 없었어요.\n###\n동화: 깊고 깊은 바닷속 인어공주에게는 다섯 명의 언니들이 있었어요. 언니들은 막내 인어공주에게 바다 위 세상에 대한 이야기를 매일매일 해주었죠. 바다 위 세상에 대한 이야기를 들을 때마다 인어공주의 가슴은 두근두근 뛰었답니다. 그리고 드디어 공주의 열다섯 번째 생일날 열다섯 살이 된 인어공주는 바다 위로 힘차게 헤엄쳤어요. 그때 흥겨운 음악 소리와 함께 배 한 척이 다가왔어요. 인어공주는 배 갑판에 서 있는 왕자님을 본 순간 숨을 쉴 수가 없었어요.\n다음 문장: 왕자님에게 한 눈에 반해버리고 만 인어공주는 그 이후로 왕자님을 볼 수 없게 되자 시름시름 앓았답니다.\n###\n동화: 옛날 마을에 어느 가난한 나무꾼이 살았어요. 그 나무꾼은 너무 가난한 나머지 호랑이한테 잡아먹히겠다며 산을 넘어가는데, 도중에 진짜 호랑이를 만났어요. 막상 호랑이를 만나 겁이 난 나무꾼은 위기를 모면하기 위해 호랑이에게 이렇게 말했어요.“아이고 형님! 어머니께서 말씀하시길 저에게 형이 하나 있는데 죽어서 호랑이가 되었다고 하더니 바로 그 형님이시군요!” 그러면서 어머님이 형님을 그리워하니 당장 뵈러 가자고 하였답니다.\n다음 문장: 그러자 호랑이는 나무꾼의 말을 믿고 화들짝 놀라며 그를 따라 마을로 내려갔어요.\n###\n동화: 옛날 숲속에 신데렐라와 피터팬이 살았어요. 둘은 서로 친구였죠. 그러던 어느 날 신데렐라는 숲 속으로 놀러 갔다가 길을 잃고 말았어요. 한참을 헤매던 신데렐라는 그만 발을 헛디뎌서 연못에 빠지고 말았어요. 그때 마침 그곳을 지나던 피터팬이 물에 빠진 신데렐라를 구해주었어요.\n다음 문장:';

export const requestLastSentence = currentText => {
  return new Promise((resolve, reject) => {
    axios
      .post(
        config.CLOVASTUDIO_MIDDLE_URL,
        {
          topK: 4,
          includeProbs: false,
          includeTokens: true,
          restart: '',
          includeAiFilters: true,
          maxTokens: 300,
          temperature: 0.85,
          start: '',
          stopBefore: ['<|endoftext|>'],
          text: lastText + currentText,
          repeatPenalty: 5.0,
          topP: 0.8,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'X-NCP-APIGW-API-KEY': config.APIGW_LAST_API_KEY,
            'X-NCP-CLOVASTUDIO-API-KEY': config.CLOVASTUDIO_LAST_API_KEY,
            'X-NCP-CLOVASTUDIO-REQUEST-ID': config.CLOVASTUDIO_LAST_REQUEST_ID,
          },
        },
      )
      .then(response => {
        const result = response.data.result.outputText;
        console.log(result);
        // const splitedText = result.split(/[!,?,.,:]/);
        // console.log(splitedText[0] + splitedText[1]);
        // resolve(splitedText[0] + splitedText[1]);
        resolve(result);
      })
      .catch(error => {
        console.error('HYPERCLOVA LAST API request fail: ', error);
        reject(error);
      });
  });
};
