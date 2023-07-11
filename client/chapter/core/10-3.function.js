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
//                   rest parameter
let calcAllMoney = (a, b, ...args) => {
  // console.log(arguments); // 화살표 함수는 arguments를 내장하고 있지 않음. 사용불가. 대신 (...args) 를 사용 => rest parameter: 나머지 매개변수, 말그대로 나머지만 가져옴. (a, b, ...args) 이렇게도 사용가능, 다른 함수에서도 사용가능

  console.log(args);

  /*
  let total = 0;
  args.forEach((item) => {
    total += item;
  });
    return args.reduce((acc, item) => {
      return acc + item;
  }, 0);
  */

  return args.reduce((acc, item) => acc + item, 0);
};

const result = calcAllMoney(1000, 500, 200, 2000);
console.log(result);

// ------------화살표 함수와 this----------------
/* 
const a = document.querySelector('nav li:nth-child(1) button');
const nav = document.querySelectorAll('nav li button');

a.addEventListener('click', (e) => {
  e.currentTarget
  this.classList.add('is-active');
  console.log(this);
});
 */
/* 
nav.forEach((button)=>{
  button.addEventListener('click',()=>{
    this.classList.add('is-active');
    console.log(this);
})
 */

// 일반 함수: 나를 호출한 대상을 this로 바인딩한다.
// 화살표 함수: this를 바인딩하지 않는다. 찾아야 한다면 내 부모(실행 컨텍스트)를 가져온다.

// 함수를 선언하면 실행 컨텍스트가 생성이된다.

// 함수 선언문
function normalFunction() {
  console.log(this);
  // this=나를 호출한 대상
}

// 함수 표현식
const expressionFunction = function () {
  console.log(this);
  // this=나를 호출한 대상
};

// 화살표 함수식
// 위의 두 함수와 달리 생성자(ex. new String())를 갖지 않음
// 일반함수와 생성자는 앞에 대문자를 쓰는지에 차이가 있다.
const arrowFunction = () => {
  console.log(this);
  // this와 바인딩(연결)되지 않아 바로 위 부모의 this를 가져옴
  // 현재 부모는 window이기 때문에 this=window
};

// ------------ 객체 안에서 this-----------------

// 객체는 실행 컨텍스트를 형성하지 않는다.

// 객체의 매서드를 정의할 때는 화살표 함수보다 일반 함수가 더 좋다.
// 매서드 안에서 함수를 호출할 때는 화살표 함수가 더 좋다.

const user = {
  total: 0,
  name: 'tiger',
  age: 22,
  address: '서울시 중랑구 면목동',
  grades: [80, 90, 100],
  nomalTotalGrades: function () {
    console.log(this); // user
    console.log(this.grades); // [80, 90, 100]

    this.grades.forEach((item) => {
      this.total += item;
      console.log(this.total);
    });
  },
  arrowTotalGrades: () => {
    console.log(this); // window

    this.grades.forEach(function (item) {
      this.total += item;
      console.log(this.total); // error
    });
  },
};

/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// pow(numeric: number, powerCount: number): number;
let pow;

// repeat(text: string, repeatCount: number): string;
let repeat;
