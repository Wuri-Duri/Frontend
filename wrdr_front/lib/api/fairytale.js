// import API from './api';
import axios from 'axios';
import config from '../../config';

export const getMyTickets = async () => {
  try {
    const response = (await axios.get(config.BASE_URL + '/fairytale/main/1')).data.data;
    console.log('[success] getMyTickets ', response);
    return response;
  } catch (error) {
    console.log('[FAIL} getMyTickets ', error);
    throw error;
  }
};

export const getFairyTale = async ticketIdx => {
  try {
    const response = await axios.get(config.BASE_URL + '/fairytale/book/' + ticketIdx);
    return response.data.data;
  } catch (error) {
    console.log('[FAIL} getFairyTale ', error);
    throw error;
  }
};

export const requestPAPAGOAPI = async madeText => {
  console.log('papago api input ', madeText);
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
        size: '512x512',
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

export const postPresetInfo = async (characters, bgPlace, length) => {
  try {
    const postData = {
      userIdx: 1,
      characters: characters,
      bgPlace: bgPlace,
      length: length,
    };
    const response = await axios.post(config.BASE_URL + '/fairytale/preset', postData);
    console.log('success preset: ', response.data);
    return response.data.data;
  } catch (e) {
    console.error('PostPresetInfo fail: ', e);
  }
};

export const postTicketCover = async (ticketId, ticketTitle, ticketImage) => {
  try {
    const postData = {
      ticketIdx: ticketId,
      title: ticketTitle,
      coverImage: ticketImage,
    };
    const response = await axios.post(config.BASE_URL + '/fairytale/cover', postData);
    console.log('success ticket: ', response.data);
  } catch (e) {
    console.error('PostTicketCover fail: ', e);
  }
};

export const requestFirstSentence = async (charName, bgPlace) => {
  try {
    const response = await axios.post(
      config.CLOVASTUDIO_URL,
      {
        topK: 4,
        includeProbs: false,
        includeTokens: false,
        restart: '',
        includeAiFilters: true,
        maxTokens: 300,
        temperature: 0.85,
        start: '',
        stopBefore: ['<|endoftext|>'],
        text: '인물:' + charName + '배경:' + bgPlace,
        repeatPenalty: 5.0,
        topP: 0.8,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'X-NCP-CLOVASTUDIO-API-KEY': config.CLOVASTUDIO_API_KEY,
          'X-NCP-APIGW-API-KEY': config.APIGW_API_KEY,
          'X-NCP-CLOVASTUDIO-REQUEST-ID': config.CLOVASTUDIO_REQUEST_ID,
        },
      },
    );

    return response.data.result.text;
  } catch (error) {
    console.error('HYPERCLOVA FIRST API request fail: ', error);
    throw error;
  }
};

const middleTextTest =
  '동화의 다음 문장을 생성하시오.\n\n동화: 한 바닷가 마을에서 살던 작은 소녀인 릴리는 바닷가에서 자주 피터팬을 만났습니다. 피터팬은 바닷가를 사랑하고, 항상 멋진 모험 이야기를 들려주었기 때문에 릴리는 그를 좋아하게 되었습니다. 그러던 어느 날, 릴리는 피터팬과 함께 바닷가를 탐험하던 중에, 바다 속으로 빠져버렸어요.\n결과: 피터팬은 릴리를 구하기 위해 바다에 뛰어들었지만 바닷속이 너무 어두워서 아무것도 볼 수 없었어요.\n###\n동화: 깊고 깊은 바닷속 인어공주에게는 다섯 명의 언니들이 있었어요. 언니들은 막내 인어공주에게 바다 위 세상에 대한 이야기를 매일매일 해주었죠. 바다 위 세상에 대한 이야기를 들을 때마다 인어공주의 가슴은 두근두근 뛰었답니다. 그리고 드디어 공주의 열다섯 번째 생일날 열다섯 살이 된 인어공주는 바다 위로 힘차게 헤엄쳤어요. 그때 흥겨운 음악 소리와 함께 배 한 척이 다가왔어요. 인어공주는 배 갑판에 서 있는 왕자님을 본 순간 숨을 쉴 수가 없었어요.\n결과: 왕자님에게 한 눈에 반해버리고 만 인어공주는 그 이후로 왕자님을 볼 수 없게 되자 시름시름 앓았답니다.\n###\n동화: 옛날 마을에 어느 가난한 나무꾼이 살았어요. 그 나무꾼은 너무 가난한 나머지 호랑이한테 잡아먹히겠다며 산을 넘어가는데, 도중에 진짜 호랑이를 만났어요. 막상 호랑이를 만나 겁이 난 나무꾼은 위기를 모면하기 위해 호랑이에게 이렇게 말했어요.“아이고 형님! 어머니께서 말씀하시길 저에게 형이 하나 있는데 죽어서 호랑이가 되었다고 하더니 바로 그 형님이시군요!” 그러면서 어머님이 형님을 그리워하니 당장 뵈러 가자고 하였답니다.\n결과: 그러자 호랑이는 나무꾼의 말을 믿고 화들짝 놀라며 그를 따라 마을로 내려갔어요.\n###\n동화: 옛날 숲속에 신데렐라와 피터팬이 살았어요. 둘은 서로 친구였죠. 그러던 어느 날 신데렐라는 숲 속으로 놀러 갔다가 길을 잃고 말았어요. 한참을 헤매던 신데렐라는 그만 발을 헛디뎌서 연못에 빠지고 말았어요. 그때 마침 그곳을 지나던 피터팬이 물에 빠진 신데렐라를 구해주었어요.\n결과: 하지만 신데렐라는 계속해서 깨어나지 않았어요.\n###\n동화:';
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
        text: middleTextTest + currentText + '/n결과:',
        repeatPenalty: 5.0,
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
    const pattern = /([^.!?]+[.!?]+["']?)\s*/g;
    const sentences = result.match(pattern).filter(sentence => sentence.trim() !== '');
    console.log(sentences);
    return sentences[0];
  } catch (error) {
    console.error('HYPERCLOVA MIDDLE API request fail: ', error);
    throw error;
  }
};

const middleTextTest2 =
  '동화의 다음 문장을 생성하시오.\n\n동화: 한 바닷가 마을에서 살던 작은 소녀인 릴리는 바닷가에서 자주 피터팬을 만났습니다. 피터팬은 바닷가를 사랑하고, 항상 멋진 모험 이야기를 들려주었기 때문에 릴리는 그를 좋아하게 되었습니다. 그러던 어느 날, 릴리는 피터팬과 함께 바닷가를 탐험하던 중에, 바다 속으로 빠져버렸어요.\n결과: 피터팬은 릴리를 구하기 위해 바다에 뛰어들었지만 바닷속이 너무 어두워서 아무것도 볼 수 없었어요.\n###\n동화: 깊고 깊은 바닷속 인어공주에게는 다섯 명의 언니들이 있었어요. 언니들은 막내 인어공주에게 바다 위 세상에 대한 이야기를 매일매일 해주었죠. 바다 위 세상에 대한 이야기를 들을 때마다 인어공주의 가슴은 두근두근 뛰었답니다. 그리고 드디어 공주의 열다섯 번째 생일날 열다섯 살이 된 인어공주는 바다 위로 힘차게 헤엄쳤어요. 그때 흥겨운 음악 소리와 함께 배 한 척이 다가왔어요. 인어공주는 배 갑판에 서 있는 왕자님을 본 순간 숨을 쉴 수가 없었어요.\n결과: 왕자님에게 한 눈에 반해버리고 만 인어공주는 그 이후로 왕자님을 볼 수 없게 되자 시름시름 앓았답니다.\n###\n동화: 옛날 마을에 어느 가난한 나무꾼이 살았어요. 그 나무꾼은 너무 가난한 나머지 호랑이한테 잡아먹히겠다며 산을 넘어가는데, 도중에 진짜 호랑이를 만났어요. 막상 호랑이를 만나 겁이 난 나무꾼은 위기를 모면하기 위해 호랑이에게 이렇게 말했어요.“아이고 형님! 어머니께서 말씀하시길 저에게 형이 하나 있는데 죽어서 호랑이가 되었다고 하더니 바로 그 형님이시군요!” 그러면서 어머님이 형님을 그리워하니 당장 뵈러 가자고 하였답니다.\n결과: 그러자 호랑이는 나무꾼의 말을 믿고 화들짝 놀라며 그를 따라 마을로 내려갔어요.\n###\n동화: 옛날 숲속에 신데렐라와 피터팬이 살았어요. 둘은 서로 친구였죠. 그러던 어느 날 신데렐라는 숲 속으로 놀러 갔다가 길을 잃고 말았어요. 한참을 헤매던 신데렐라는 그만 발을 헛디뎌서 연못에 빠지고 말았어요. 그때 마침 그곳을 지나던 피터팬이 물에 빠진 신데렐라를 구해주었어요.\n결과: 하지만 신데렐라는 계속해서 깨어나지 않았어요.\n###\n동화:';
export const requestMiddleSentence2 = async currentText => {
  console.log('API2 들어옴: ', currentText);
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
        text: middleTextTest2 + currentText + '/n결과:',
        repeatPenalty: 5.0,
        topP: 0.7,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'X-NCP-APIGW-API-KEY': config.APIGW_MIDDLE_API_KEY,
          'X-NCP-CLOVASTUDIO-API-KEY': config.CLOVASTUDIO_MIDDLE2_API_KEY,
          'X-NCP-CLOVASTUDIO-REQUEST-ID': config.CLOVASTUDIO_MIDDLE_REQUEST_ID2,
        },
      },
    );

    const result = response.data.result.outputText;
    const pattern = /([^.!?]+[.!?]+["']?)\s*/g;
    const sentences = result.match(pattern).filter(sentence => sentence.trim() !== '');
    console.log(sentences);
    return sentences[0];
  } catch (error) {
    console.error('HYPERCLOVA MIDDLE API request fail: ', error);
    throw error;
  }
};

const lastText =
  '동화의 마지막 결말 부분을 생성하시오.\n\n동화: 옛날 어느 시골에 아름다운 공주님이 살고 있었습니다. 그녀의 피부는 눈처럼 희고 머리카락은 검은 진주 같았습니다. 그래서 그녀의 이름은 백설공주였습니다. 그녀의 어머니인 여왕은 백설공주를 무척 사랑하였지만 어느 날 여왕이 돌아가시게 되자, 그녀의 아버지인 왕은 새로운 왕비를 맞이하였습니다. 하지만 새 왕비는 신비로운 거울을 소유하고 있었는데, 매일매일 거울에게 물어봤습니다. "거울아, 세상에서 가장 아름다운 사람은 누구인가?" 처음에는 왕비가 가장 아름답다는 대답을 듣곤 했지만, 어느 날 거울은 "여왕님, 세상에서 가장 아름다운 사람은 이제는 백설공주가 아닙니다. 숲 속에 사는 사나이와 그의 일곱 난쟁이가 더 아름다워요." 라고 대답하였습니다. 이에 신경을 놓친 왕비는 백설공주를 시기와 질투로 가득 찬 마음을 품고 그녀를 죽이려고 시도하였습니다. 하지만 백설공주는 사나이와 일곱 난쟁이에게 구해져 숲 속의 작은 집에서 생활하게 되었습니다. 그리고 그녀는 난쟁이들과 함께 행복한 시간을 보내며, 자신의 아버지인 왕과 새 왕비의 악행을 피해 다니게 되었습니다. 하지만 왕비는 백설공주를 찾아가 그녀에게 독사과를 먹이며 다시 죽이려고 합니다. 백설공주는 독사과에 중독되어 죽어버리고, 난쟁이들은 그녀를 유리관 안에 놓고 안타까움에 눈물을 흘립니다. 그런데 어느 날, 왕자가 그 유리관을 발견하고 그녀에게 입맞춤을 건냅니다.\n결말: 그러나 그 입맞춤으로 백설공주가 살아났습니다. 왕자와 백설공주는 사랑에 빠져 결혼하였고, 그녀는 다시 살아나 일곱 난쟁이와 함께 영원히 행복한 나날을 보냈답니다.\n###\n동화: 옛날 옛적, 가난해서 장가를 못간 나무꾼이 있었습니다.하루는 나무를 하러 산에 갔다가 사냥꾼에게 쫓기는 노루를 발견하고 노루를 숨겨주었습니다.\n노루는 보은의 의미로 선녀탕을 알려주고, 옷을 숨기면 혼인을 할 수 있다고 알려주고 아이 셋을 낳기전엔 날개옷을 절대로 주면 안된다고 신신당부 하는 것도 잊지 않았습니다. 나무꾼은 노루가 알려준 대로 선녀탕을 찾아가 옷을 숨기고 막내선녀와 결혼을 하게 되었고, 아이 둘을 낳고 행복하게 잘 살았습니다. 하지만 하늘이 그리웠던 선녀는 나무꾼에게 날개옷을 한 번만 보여달라며 사정을 하고 결국 나무꾼은 날개옷을 보여주었습니다. 그러자 선녀는 날개옷을 입고 아이 둘을 데리고 하늘 나라로 날아가 버렸습니다.\n나무꾼은 노루를 다시 찾아가 선녀를 만날 수 있는 방법을 물었고, 노루는 선녀들이 선녀탕에 내려오지 않고 두레박으로 물을 길어 목욕한다는 사실을 알려주었습니다. 나무꾼은 두레박이 내려올때까지 기다렸다가 두레박을 타고 하늘나라로 가서 선녀와 아이들을 만나 행복하게 살았습니다. 그러나 심성이 착한 나무꾼은 땅에 홀로 두고 온 어머니가 마음에 걸려 모두가 잠든 밤에 몰래 하늘나라 말을 타고 지상으로 내려갔습니다. 오랜만에 아들과 재회한 어머니는 직접 지은 팥죽을 한 그릇만 먹고 가라며 건네주었지만 나무꾼이 말 등에 팥죽을 쏟아 말이 놀라 하늘로 올라가버리고 말았습니다.\n결말: 말에서 떨어진 나무꾼은 선녀와 아이들을 더 이상 보지 못하게 되었고, 하늘만 바라보다 죽은 나무꾼은 닭으로 환생하여 새벽녘만 되면 하늘을 보고 꼬끼오 하고 울었다고 합니다.\n###\n동화: 신데렐라와 피터팬은 작은 배를 이용해 여행을 시작했습니다. 그들은 깊은 바다에서 인어들을 만나고, 해적선과 싸움을 벌이며, 숨겨진 보물을 찾아나섰습니다. 이 모든 모험들은 신데렐라와 피터팬이 함께 극복하며, 그들은 서로의 존경과 우정을 다짐하며 함께 더욱 강해지게 되었습니다. 하지만 그들의 모험은 갑작스러운 사건으로 인해 어둠으로 둘러싸이게 됩니다. 그들은 큰 폭풍우를 맞이하게 되었는데, 피터팬이 구조 작전을 계획하던 중에 그녀는 파도에 휩쓸려 떨어졌습니다. 피터팬은 신데렐라를 찾으려 애를 썼지만, 그녀를 찾지 못하고 자신도 파도에 휩쓸려 바다에 떠내려졌습니다. 그러나 그들은 희망을 버리지 않았습니다. 피터팬은 그녀를 찾기 위해 끊임없이 바다를 탐험하고, 신데렐라는 그가 다시 돌아올 것을 믿으며 바다 위를 지켜보았습니다. 결국, 피터팬은 그녀를 발견하고 구조하였습니다. \n결말: 결국 마을로 무사히 돌아온 피터팬과 신데렐라는 더욱 친한 친구가 되었고, 서로와 의지하며 행복하게 살았답니다.\n###\n동화:깊은 바다의 한 구석에 아름다운 인어공주가 살고 있었습니다. 그녀는 아름다운 물고기들과 함께 평화롭게 생활하며 바다 속에서 자유롭게 헤엄치고 있었습니다. 어느 날, 인어공주는 바다 깊은 곳에 신비로운 궁전을 발견했습니다. 신비로운 궁전은 투명한 크리스탈로 이루어져 있었고, 빛이 아름답게 반사되는 모습이었습니다. 인어공주는 호기심에 사로잡혀 궁전으로 향하게 되었습니다. 그리고 궁전에 도착하자마자, 인어공주는 그 안에 어떤 비밀이 숨겨져 있는지 알아내기로 결심했습니다. 궁전 안은 마법과 신비로 가득한 곳이었습니다. 각각의 방마다 다른 해양 생물들과 함께 놀 수 있는 장치들과 아름다운 보물들이 있었습니다.\n결말: 아름다운 보물을 한가득 얻은 인어공주는 일상으로 돌아와 친구들과 나누며 즐겁게 나날을 보냈다고 합니다.\n###\n동화:';

export const requestLastSentence = currentText => {
  return new Promise((resolve, reject) => {
    axios
      .post(
        config.CLOVASTUDIO_MIDDLE_URL,
        {
          topK: 0,
          includeProbs: false,
          includeTokens: true,
          restart: '',
          includeAiFilters: true,
          maxTokens: 50,
          temperature: 0.2,
          start: '',
          stopBefore: ['###'],
          text: lastText + currentText + '\n결말:',
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
        const pattern = /([^.!?]+[.!?]+["']?)\s*/g;
        const sentences = result.match(pattern).filter(sentence => sentence.trim() !== '');
        console.log(sentences);

        resolve(sentences[0]);
      })
      .catch(error => {
        console.error('HYPERCLOVA LAST API request fail: ', error);
        reject(error);
      });
  });
};

const questionText =
  '동화 다음 내용에 이어지도록 질문을 제시하시오.\n\n동화: 앨리스는 들판에 앉아 아무것도 하지 않는 일상이 너무 지루했어요. 언니는 옆에서 책만 읽고 있었지요. 그 때, 하얀 토끼 한마리가 앨리스를 지나쳐 뛰어가며 말했어요. "에구구! 이러다 너무 늦겠네!" 앨리스는 호기심에 불타올라 토끼를 쫓아 들판을 가로질러 달리기 시작했어요.\n질문: 토끼는 어디로 갔을까요?\n###\n동화: 눈이 몹시 내리는 추운 겨울 날, 마을에서 성냥팔이소녀가 외롭게 성냥을 팔고 있었어요. 소녀는 다 떨어진 옷에 신발도 신지 않은 맨발이었어요. 하루종일 성냥을 하나도 팔지 못한 소녀는 너무 배가 고파 눈 위에 털썩 주저 앉았어요. 갑자기 소녀 앞에 누군가 나타났어요.\n질문: 소녀 앞에 나타난 사람은 누구일까요?\n###\n동화: 옛날 숲속에 신데렐라와 피터팬이 살았어요. 둘은 서로 친구였죠. 그러던 어느 날 신데렐라는 숲 속으로 놀러 갔다가 길을 잃고 말았어요. 한참을 헤매던 신데렐라는 그만 발을 헛디뎌서 연못에 빠지고 말았어요. \n질문: 물에 빠진 신데렐라는 어떻게 되었을까요?\n###\n동화: 어느 한 왕국에 임금님이 살고 있었어요. 궁전이 너무 재미없었던 임금님은 신하들 몰래 마을로 나가 시장을 구경하곤 했답니다. 임금님은 옷을 무척 좋아해서 시장에서 새 옷을 많이 샀어요. 어느 날, 궁전에 낯선 사나이 두 명이 임금님을 찾아왔어요.\n질문: 이 사나이들은 왜 임금님을 찾아왔을까요?\n###\n동화: 피터펜과 신데렐라는 바다 위에서 항상 새로운 모험을 겪었어요. 그들은 함께 바다를 항해하며 먼 섬을 찾아갔어요. 그곳에는 마법의 동굴이 있었고, 그곳에서 만난 마법사가 그들에게 고마운 마음으로 두 사람에게 각각 하나씩 소원을 들어주기로 했어요.\n질문:피터팬과 신데렐라는 무슨 소원을 빌었을까요?\n###\n동화:';
export const requestQuestion = currentText => {
  console.log('질문api');
  return new Promise((resolve, reject) => {
    axios
      .post(
        config.CLOVASTUDIO_MIDDLE_URL,
        {
          topK: 0,
          includeProbs: false,
          includeTokens: true,
          restart: '',
          includeAiFilters: true,
          maxTokens: 32,
          temperature: 0.5,
          start: '',
          stopBefore: ['###'],
          text: questionText + currentText + '\n질문:',
          repeatPenalty: 5.0,
          topP: 0.8,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'X-NCP-APIGW-API-KEY': config.APIGW_QUESTION_API_KEY,
            'X-NCP-CLOVASTUDIO-API-KEY': config.CLOVASTUDIO_QUESTION_API_KEY,
            'X-NCP-CLOVASTUDIO-REQUEST-ID': config.CLOVASTUDIO_QUESTION_REQUEST_ID,
          },
        },
      )
      .then(response => {
        const result = response.data.result.outputText;

        resolve(result);
      })
      .catch(error => {
        console.error('HYPERCLOVA LAST API request fail: ', error);
        reject(error);
      });
  });
};

const grammarTest =
  '비속어를 삭제합니다. 입력한 문장의 틀린 문법을 올바른 문장으로 자연스럽게 변환합니다. 문장부호가 필요하면 추가합니다.\n\n문장: 너랑 걔네들은 다르잖아. 새꺄 너대로 하면되\n결과: 너랑 걔네들은 다르잖아. 너대로 하면 돼\n###\n문장: 시발년아 이런식으로 행동하면 어떻게?\n결과: 이런 식으로 행동하면 어떡해?\n###\n문장: 이제 됬어요?\n결과: 이제 됐어요?\n###\n문장: 않돼 개새꺄 그러지마\n결과: 안 돼 그러지 마\n###\n문장: 신데렐라가 말를 했어요. 우리 꽃을 따러 가자요.\n결과: 신데렐라가 말했어요. "우리 꽃을 따러 가요!"\n###\n문장: 그때 피터팬이가 큰 소리로 물었어요. 여기로 가려면 어떻게 가요.\n결과: 그때 피터팬이 큰 소리로 물었어요. "여기로 가려면 어떻게 가야 해요?"\n###\n문장: 이거는 빨간색이고 저거는 파란색이야. 그러니까 두 색깔은 틀려.\n결과: 이거는 빨간색이고, 저거는 파란색이야. 그러니까 두 색깔은 달라.\n###\n문장: 여자 역활과 남자 역활이 있는거야.\n결과: 여자 역할과 남자 역할이 있는 거야.\n###\n문장: 다람쥐는 항상 걱정이 많았어요. 내가 잘 때 누군가 도토리를 가져가면 어떡하지\n결과: 다람쥐는 항상 걱정이 많았어요. "내가 잘 때 누가 도토리를 가져가면 어떡하지?"\n###\n문장: 새 도시에 도착하니 설레임이 느껴졌다.\n결과: 새 도시에 도착하니 설렘이 느껴졌다.\n###\n문장: 이런 나쁜 방법은 지향하는게 좋겠죠.\n결과: 이런 나쁜 방법은 지양하는 게 좋겠죠.\n###\n문장: 그때 공지가 개구리에게 말했어요. "부엌에 가서 일해!"\n결과: 그때 콩쥐가 개구리에게 말했어요. "부엌에 가서 일해!"\n###\n문장: 흥분은 제비를 너무 불쌍하다고 생각했지요.\n결과: 흥부는 제비를 너무 불쌍하다고 생각했지요.\n###\n문장: 신청인은 어리둥절하며 용왕님께 물었어요. "연꽃을 타고 올라가면 되는건가요?"\n결과: 심청이는 어리둥절하며 용왕님께 물었어요. "연꽃을 타고 올라가면 되는건가요?"\n###\n문장: 씨발 진짜 어의없네\n결과: 진짜 어이없네\n###\n문장: 피터팬은 존나 웃으면서 사과를 먹었어요.\n결과: 피터팬은 웃으면서 사과를 먹었어요.\n###\n문장: 아씨발 개짜증나게 하지말고 저리 가새요.\n결과: 짜증나게 하지말고 저리 가세요.\n###\n문장: 인생은 존나 마이웨이로 살아야되\n결과: 인생은 마이웨이로 살아야 돼.\n###\n문장: 어느 날 흥분은 말했어요. 씨발 넌 필요없어.\n결과: 어느 날 흥부는 말했어요. "넌 필요없어!"\n###\n문장: 피터팬은 병신이라서 그냥 꽃을 꺾어갔어요.\n결과: 피터팬은 그냥 꽃을 꺾어갔어요.\n###\n문장:';
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
        text: grammarTest + text + '.' + '\n결과:',
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
    var result = response.data.result.outputText;
    result = result.replace(/\n$/, '');
    result = result.trimLeft();
    return result;
  } catch (e) {
    console.error('HYPERCLOVA GRAMMAR API request fail: ', e);
  }
};
