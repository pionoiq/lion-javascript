/* ---------------------- */
/* Functions → Arrow      */
/* ---------------------- */

const calculateTotal = function (moneyA, moneyB, moneyC, moneyD) {
  // console.log(arguments); // arguments를 내장
  return moneyA + moneyB + moneyC + moneyD;
};

let resultX = calculateTotal(10000, 8900, 1360, 2100);
let resultY = calculateTotal(21500, 3200, 9800, 4700);
let resultZ = calculateTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);

// 함수 선언 → 화살표 함수 (표현)식
let calcAllMoney = (...args) => {
  // console.log(arguments); // 화살표 함수는 arguments를 내장하고 있지 않음. 대신 (...args) 를 사용 => rest parameter 나머지 매개변수, 말그대로 나머지만 가져옴. (a, b, ...args) 이렇게도 사용가능
  console.log(args);

  let to; /* tal = 0;
  args.forEach((item) => {
    total += item;
  });
  return total;
  */

  /* return args.reduce(function (acc, item) {
    return acc + item;
  }, 0); */

  return args.reduce((acc, item) => acc + item, 0);
};

const result = calcAllMoney(1000, 500, 200, 2000);
console.log(result);

// 화살표 함수와 this
// 함수를 선언하면 실행 컨텍스트가 생성이된다.

// 함수 선언문
function normalFunction() {}
console.log(this);
// this=window
// window.normalFunction()

// 함수 표현식
const expressionFunction = function () {};
// this=window
console.log(this);
// window.expressionFunction

// 화살표 함수식
// 위의 두 함수와 달리 생성자(ex. new String())를 갖지 않음
// this와 바인딩(연결)되지 않아 바로 위 부모의 this를 가져옴
// 아래 코드의 부모는 window이기 때문에 this=window
const arrowFunction = () => {};
console.log(this);

/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// pow(numeric: number, powerCount: number): number;
let pow;

// repeat(text: string, repeatCount: number): string;
let repeat;
