/* global gsap */

import {
  attr,
  tiger,
  delayP,
  insertLast,
  getNode as $,
  changeColor,
  renderUserCard,
  renderSpinner,
  renderEmptyCard,
  clearContents,
} from './lib/index.js';

const URL = 'https://jsonplaceholder.typicode.com/users';

/* fetch */
// const 응답 = fetch(URL);
// const 데이터 = await 응답;
// const 유저데이터 = await 데이터.json();

// 유저데이터.forEach((유저) => {
//   insertLast(document.body, `<div>${유저.name}</div>`);
// });
// console.log(유저데이터);

// [phase-1]
// 1. tiger 함수를 사용해 user 가져오기
// 2. 함수 안으로 넣기
// 3. 유저 데이터 랜더링
//     -html template 만들기
//     -유저 data 넘겨주기
//     - inserLast 사용하기
// 4. 함수 분리하기

// [phase-2]
// 1. 에러가 발생했을 때
// 2. empty sv를 생성하고 랜더링하기
// 3. 함수 분리

// [phase-3]
// json-server 구성
// data 설계
// get, delete 통신 localhost
// delete => 리랜더링(clear,render)

const userCardInner = $('.user-card-inner');

async function renderUserList() {
  renderSpinner(userCardInner);

  try {
    await delayP({ timeout: 2000 });

    gsap.to('.loadingSpinner', {
      opacity: 0,
      onComplete() {
        $('.loadingSpinner').remove();
      },
    });

    const response = await tiger.get('http://localhost:3000/users');

    const userData = response.data;

    userData.forEach((item) => renderUserCard(userCardInner, item));

    changeColor('.user-card');

    gsap.to('.user-card', {
      x: 0,
      opacity: 1,
      stagger: 0.1,
    });
  } catch (err) {
    renderEmptyCard(userCardInner);
  }
}

renderUserList();

// 버튼을 클릭했을 때 해당 article의 id 값 가져오기
//    - 이벤트 위임
//    - button 선택 -> closest
//    - attr() / dataset

function handleDelete(e) {
  let button = e.target.closest('button');
  let article = e.target.closest('article');
  if (!button || !article) return;

  const id = attr(article, 'data-index').slice(5);
  console.log(id);

  tiger.delete(`http://localhost:3000/users/${id}`).then(() => {
    // 컨텐츠 전체 항목 지우기
    clearContents(userCardInner);
    renderUserList();
  });
}

userCardInner.addEventListener('click', handleDelete);
