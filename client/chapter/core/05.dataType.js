/* ------------------------ */
/* Data Types               */
/* ------------------------ */

/* ECMAScript의 8가지 데이터 타입 -------------------------------------------- */

// 1. 존재하지 않는(nothing) 값 / 비어있는(empty) 값 / 알 수 없는(unknown) 값

const empty = null;
// console.log(null);

// 2. 값이 할당되지 않은 상태

let unknown; // 임의로 undefined를 주는 것은 금지
// console.log(unknown);

// 3. 따옴표를 사용해 묶은 텍스트(큰", 작은', 역`)

const hi = new String('hello'); // 문자 생성기, 잘 사용하지 않음
//객체처럼 생긴 문자, 함수로 가면 구분되여 사용됨

const double = '"hello"'; // 문자 리터럴
const single = 'hello';
const backtick = `hello`;
const backtick2 = `hello ${1 + 2}`;

// 4. 정수, 부동 소수점 숫자(길이 제약)

const number = new Number(123); // 숫자 생성자, 잘 사용하지 않음

const integer = 123;
const floatingPointNumber = 10.45;

// 5. 길이에 제약이 없는 정수(예: 암호 관련 작업에서 사용)

// const bigInteger = BigInt(123); // 큰숫자 생성자
const bigInteger = 123n;

// 6. 참(true, yes) 또는 거짓(false, no)

const bool = true;

// 7. 데이터 컬렉션(collection) 또는 복잡한 엔티티(entity)

const Obj = new Object({});
const obj = {};
console.log(Obj);

// 8. 고유한 식별자(unique identifier)

const unique = Symbol('uid'); // Symbol과 BigInt는 앞에 new를 붙이지 않는다. (비교적 최근에 만들어져서...)

/* typeof 연산자의 2가지 사용법 ---------------------------------------------- */

// 1) 연산자 typeof
// 2) 함수 typeof()

console.log(typeof 1 + 2); // number2
console.log(typeof (1 + 2)); // number

// 언어 상, 오류

// Object

const user = {
  name: 'tiger',
  age: 28,
  sayHi: function () {
    console.log('hello~');
  },
  alert1: function () {
    //normal function
  },
  alert2() {
    // consise method
  },
  alert3: () => {
    //arrow function
  },
};
// console.log(user.sayHi()); // 함수 값이 없으므로 undefinde 출력

// Array

// const newArray = new Array(); // 함수 생성자, 얘도 잘 안씀
const arr = [19, 200, 3000, 1, 2, 4];

console.log(arr[3]);

// function

function 붕어빵틀(재료) {
  return 재료 + `맛 붕어빵`;
}
const 붕어빵 = 붕어빵틀('슈크림');

console.log(붕어빵);

// this
