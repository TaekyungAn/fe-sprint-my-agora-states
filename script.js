// index.html을 열어서 agoraStatesDiscussions 배열 요소를 확인하세요.
console.log(agoraStatesDiscussions);

// convertToDiscussion은 아고라 스테이츠 데이터를 DOM으로 바꿔줍니다.
const convertToDiscussion = (obj) => {
  const li = document.createElement("li"); // li 요소 생성
  li.className = "discussion__container"; // 클래스 이름 지정

  const avatarWrapper = document.createElement("div");
  avatarWrapper.className = "discussion__avatar--wrapper";
  const discussionContent = document.createElement("div");
  discussionContent.className = "discussion__content";
  const discussionAnswered = document.createElement("div");
  discussionAnswered.className = "discussion__answered";

  // TODO: 객체 하나에 담긴 정보를 DOM에 적절히 넣어주세요.

  
  const avatarsImg= document.createElement('img');
    avatarsImg.src= obj.avatarUrl;
    avatarsImg.alt= 'avatar of'+ obj.author;
    avatarWrapper.append(avatarsImg);

  const Title= document.createElement('h2');
    const Title_2= document.createElement('a');
      Title_2.href= obj.url;
      Title_2.textContent= obj.title;
      Title.append(Title_2);
    discussionContent.append(Title);

  const Information= document.createElement('div');
    Information.className= 'discussion__information';
    Information.textContent= obj.id +' / '+ obj.createdAt;
    discussionContent.append(Information);

  const Answered= document.createElement('p');
    Answered.textContent= '☑';
    discussionAnswered.append(Answered);



  li.append(avatarWrapper, discussionContent, discussionAnswered);
  return li;
};

// agoraStatesDiscussions 배열의 모든 데이터를 화면에 렌더링하는 함수입니다.
const render = (element) => {
  for (let i = 0; i < agoraStatesDiscussions.length; i += 1) {
    element.append(convertToDiscussion(agoraStatesDiscussions[i]));
  }
  return;
};

// ul 요소에 agoraStatesDiscussions 배열의 모든 데이터를 화면에 렌더링합니다.
const ul = document.querySelector("ul.discussions__container");
render(ul);
