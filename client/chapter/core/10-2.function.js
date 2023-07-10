/* ----------------------- */
/* Functions → Expression  */
/* ----------------------- */

function calcTotal(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

const resultX = calcTotal(10000, 8900, 1360, 2100);
const resultY = calcTotal(21500, 3200, 9800, 4700);
const resultZ = calcTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);

// 함수 선언 → 일반 함수 (표현)식
// calculateTotal();
let calculateTotal = function () {
  // arguments
  // 함수 안에서만 접근 가능한 인수들의 집합 객체로서 배열과 유사한 형태를 가지고 있다.
  // 여러 전달인자들을 집합으로 전달해주는 기능을 함.
  // console.log(arguments);

  // arguments 객체를 사용해 함수의 매개변수 없이 아이템의 총합을 구하기

  let total = 0;

  // 1. for 문
  /* 
  for (let i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
    total += arguments[i];
  }
*/

  // 2. for...of 문
  /* 
  for (const key of arguments) {
  console.log(key);
  total += key;
  }
 */

  // 3. 배열의 forEach 빌려쓰기
  /* 
  arguments.forEach((item) => {
    console.log(item);
  }); // arguments는 배열이기 때문에 직접 사용 불가
  
  Array.prototype.forEach.call(arguments, function (item) {
    console.log(item);
    total += item;
  });
  */

  // 4. slice를 빌려 유사 배열을 진짜 배열로 만들기
  /* 
  let realArray = Array.prototype.slice.call(arguments); // -> Instance Method
  console.log(realArray);
  realArray.forEach((item) => {
    total += item;
  });
  */

  // 5. Array.from() -> 배열로 만들어주는 메서드, Static Method
  /* 
  let realArray2 = Array.from(arguments); // -> ES6부터~
  console.log(realArray2);
  realArray2.forEach((item) => {
    total += item;
  });
  */

  // 6. spread syntax [...] -> 가장 최신
  /* 
  let realArray3 = [...arguments];
  console.log(realArray3);
  realArray3.forEach(function (item, index) {
    console.log(item);
    total += item;
  });
  */
  //  return total;

  // 7. Array.reduce -> item을 다 돌 때까지 누적
  let realArray4 = [...arguments];
  console.log(realArray4);
  return realArray4.reduce((acc, item) => {
    // acc-> 누적값, item -> 순회
    return acc + item;
  }, 0); // 0 -> 초기값

  // reduce와 forEach의 차이=> return이 있나 없나

  // 위와 동일
  // total= realArray4.reduce((acc, item) => acc + item);
  // return realArray4.reduce((acc, item) => acc + item);
};

const result = calculateTotal(2000, 500, 250, 600, 900);
console.log(result);

// 익명(이름이 없는) 함수 (표현)식
let anonymousFunctionExpression = function () {};

// 유명(이름을 가진) 함수 (표현)식
let namedFunctionExpression = function func() {};
// console.dir(namedFunctionExpression);
// namedFunctionExpression 함수라는 객체 내에name: "func" 가 생긴 것

// 콜백 함수 (표현)식
let callbackFunctionExpression = function (isActive, success, fail) {
  // const callback = function(){ console.log('콜백 함수 실행!');

  if (isActive) {
    // success();
    return;
  }

  // fail();
};

callbackFunctionExpression(
  true,
  function () {
    console.log('성공!!');
  },
  function () {
    console.log('실패!');
  }
);
// isActive가 참일 경우에만 success()가 실행됨.

/* const movePage = function (url, success, fail) {
  if (url.match(/http.+www/) && typeof url === 'string') {
    success(url);
  } else {
    fail();
  }
};

movePage(
  'www.naver.com',
  function (url) {
    console.log('성공 몇초 뒤 해당 페이지로 이동합니다.');

    setTimeout(() => {
      window.location.href = url;
    }, 3000);
  },
  function () {
    console.log('올바르지 않은 주소입니다.');
    // ????
  }
); */

// 함수 선언문 vs. 함수 (표현)식

// 즉시 실행 함수 (표현)식
// Immediately Invoked Function Expression
let IIFE;

// 변수의 보호를 위해 탄생
// var를 지역 변수로 만들기 위해 항상 함수로 감쌌음.
// 은닉화, incapsulation(캡슐화) => 현재는 모듈 프로그래밍('use static')이 해줌
// 클로저 closure에서 IIFE 패턴 재등장

const MASTER = (function (g) {
  console.log(g);
  // return '퉤';

  var x = 10;
  let uid = 'Ajttk753!@';

  return {
    getKey() {
      return uid;
    },
    setKey(value) {
      uid = value;
    },
  };
})(window);

// 위 () -> 선언부 , 아래 () -> 실행부

// console.log(x); //접근불가
// console.log(MASTER);
// console.log(MASTER.getKey());
console.log(MASTER.setKey('새로운 비밀번호'));

// import{css as c} from "css.js";
// c() => 이름을 변경하여 사용

// const MASTER2 = (function (g) {
// })(window);  //위와 동일한 원리
