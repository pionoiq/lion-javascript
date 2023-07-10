/* ---------------------------- */
/* Nullish Coalescing Operator  */
/* ---------------------------- */

let emailAddress;
let receivedEmailAddress;

if (emailAddress === undefined || emailAddress === null) {
  receivedEmailAddress = 'user@company.io';
} else {
  receivedEmailAddress = emailAddress;
}

// 3항 연산자 (ternary) 를 사용한 식으로 변경합니다.

receivedEmailAddress =
  emailAddress === undefined || emailAddress === null
    ? 'user@company.io'
    : emailAddress;

// 위 조건 처리문을 nullish 병합 연산자를 사용한 식으로 변경합니다.

receivedEmailAddress = emailAddress ?? 'user@company.io';
receivedEmailAddress = emailAddress || 'user@company.io';
// console.log(receivedEmailAddress);

/* ?? vs. || ----------------------------------------------------------- */
// || → 첫번째 Truthy 값을 반환
// ?? → 첫번째 정의된(defined) 값을 반환

const WIDTH = '10px';
const INIT = 0;
const boolean = false;
const button = document.querySelector('button');

button.style.height = `${INIT ?? parsInt(WIDTH)}px`;

console.log(null || WIDTH);
console.log(null ?? WIDTH);

console.log(undefined || WIDTH);
console.log(undefined ?? WIDTH);

console.log(boolean || WIDTH);
console.log(boolean ?? WIDTH);

console.log('' || WIDTH);
console.log('' ?? WIDTH);

//Logical Assignment Operations

let x;
let y;

x ||= y; // x가 false일 때 y 값을 x에 할당. x= x || y
x &&= y; // x가 true일 때 y 값을 x에 할당. x= x && y
x ??= y; // x가 undefined, null일 때 y 값을 x에 할당. x= x ?? y
