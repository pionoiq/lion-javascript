/* --------- */
/* Object    */
/* --------- */

//! Primitives vs. Object

// key:value 쌍으로 구성된 엔티티(entity) 데이터 구조

let htmlCode = /* html */ `
  <ul>
    <li class="box"></li>
    <li></li>
    <li></li>
  </ul>
`;

let cssCode = /* css */ `
  .dialog {
    position: fixed;
    z-index: 10000;
    top: 50%;
    left: 50%;
    width: 60vw;
    max-width: 800px;
    height: 40vh;
    min-height: 280px;
    transform: translate(-50%, -50%);
  }
`;

// 위 CSS 스타일 코드를 JavaScript 객체로 작성해봅니다.
let cssMap = {
  position: 'fixed',
  zIndex: 10000,
  top: '50%',
  left: '50%',
  width: '60vw',
  maxWidth: '800px',
  height: '40vh',
  minHeight: '280px',
  transform: 'translate(-50%, -50%)',
};

// 인증 사용자 정보를 객체로 구성해봅니다.
// 인증 사용자(authentication user)
// - 이름
// - 이메일
// - 로그인 여부
// - 유료 사용자 권한

let authUser = null;

// authorization: 권한
// authentication: 인증

authUser = {
  uId: `user-id-zQdriwk%1242`,
  name: 'dan',
  email: 'djWjrn@gmail.com',
  isSignIn: true,
  permission: 'paid', // free | paid
};

//! 점(.) 표기법
// authUser 객체의 프로퍼티에 접근해 Console에 출력해봅니다.

// console.log(authUser.uId);
// console.log(authUser.permission);
// console.log(authUser.email);

//! 대괄호([]) 표기법
// 유료 사용자 권한(paid User Rights) 이름으로 프로퍼티를 재정의하고
// 대괄호 표기법을 사용해 접근 Console에 출력해봅니다.

// console.log(authUser['uId']);
// console.log(authUser['permission']);
// console.log(authUser['email']);

//! 계산된 프로퍼티 (calcurate property)
let calculateProperty = 'phone'; // phone | tel

// class로 객체 만들기
class User {
  construtor(name, email) {
    this.name = name;
    this.email = email;
  }
}
const user3 = new User('동혁');

// 함수로 객체 만들기
function createUser(
  name,
  email,
  computedProp = 'phone',
  number = '010-0000-0000'
) {
  return {
    name: name,
    email: email,
    [computedProp]: number,
    // shorthand property (단축 프로퍼티)
  };
}

const user1 = createUser('dbwj', 'victory@naver.com', 'tel', '010-1234-4444');

//! 프로퍼티 포함 여부 확인
// key in user1

for (let key in user1) {
  if (Object.prototype.hasOwnProperty.call(user1, key)) {
    // console.log(key);
  }
}

/* 프로퍼티 나열 */
let keyArray = Object.keys(authUser);
// let valueArray = Object.values(authUser);

function getProp(object) {
  if (typeof object !== 'object') {
    throw new Error('getProp함수의 매개변수는 객체 타입이어야 합니다.');
  }
  return Object.keys(authUser);
}
// console.log(getProp(authUser));

function getP(object) {
  let result = [];

  for (let key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      console.log(key);
      result.push(key);
    }
  }
  return result;
}
// console.log(getP(authUser));

//          null          없앰
//! 프로퍼티 제거(remove) or 삭제(delete)
// authUser.name=null; // 제거
// delete authUser.uId; // 삭제

// null
function removeProperty(object, key) {
  if (key === 'all') {
    // for (const key of Object.keys(object)){} // 아래와 동일
    for (const key of getProp(object)) {
      object[key] = null;
      // 변수이기 때문에 []
    }
  }
  return object;
}

console.log(removeProperty(authUser, 'all'));

// delet
function deleteProperty(object, key) {
  if (isEmptyObject(object)) {
    return;
  }
  delete object[key];
  return object;
}
console.log(deleteProperty(authUser, 'name'));

//! 단축 프로퍼티
let name = '선범';
let email = 'seonbeom2@euid.dev';
let authorization = 'Lv. 99';
let isLogin = true;

const student = {
  name,
  email,
  authorization,
  isLogin,
};

console.log(student);

//! 프로퍼티 이름 제한
// 예약어: class, if, switch, for, while, ...

// 객체가 프로퍼티를 포함하는 지 유무를 반환하는 유틸리티 함수 isEmptyObject 작성
function isEmptyObject(object) {
  return getProp(object).length === 0 ? true : false;
}

console.log(isEmptyObject(authUser)); //false

/* ------------------------------------------- */
/* 배열 구조 분해 할당  destructuring assignments   */
/* ------------------------------------------- */

//! 배열의 구조분해할당: 순서가 정해져 있다. 변수 이름을 바꿀 수 있다.

let color = ['#ff0000', '#2b00ff', '#00ff2f'];

// let red=color[0]
// let blue=color[0]
// let green=color[0]

// let [red,blue,green]=color; // 구조분해할당

let [, , green] = color; // 생략가능

console.log(green);

/* 사용 예시 */
// for (let [key, value] of Object.entries(authUser)) {
// console.log(key);
// }

// const [a, b, c, d] = document.querySelectorAll('nav li button');
// a.addEventListener('click',()=>{})

/* -------------------------------------------- */
/* 객체 구조 분해 할당  destructuring assignments    */
/* --------------------------------------------- */
//! 객체의 구조분해할당: 순서가 정해져있지 않다. 변수의 이름을 바꿀 수 있다.

const salaries = {
  권혜미: 50,
  이수연: 400,
  강예나: 500,
  김태일: 700,
};

// const 권혜미=salaries.권혜미;
// const 이수연=salaries.이수연;

const {
  권혜미: 권 = 'mimi',
  이수연: 이 = 10,
  강예나: 강,
  김태일: 김,
} = salaries;

console.log(이);

function setElementCss(options) {
  // const obj=defaults;

  const { width: w, height: h, overflow, color, border: b = '1px' } = options;
  console.log(w, h, b);
}

const defaults = {
  overflow: false,
  height: 200,
  width: 100,
  color: 'orange',
};

setElementCss({
  height: 200,
  color: 'red',
  overflow: true,
  width: 50,
});
