/* --------------------- */
/* Type Conversion       */
/* --------------------- */

/* 데이터 → 문자 ----------------------------------------------------------- */

// number

const YEAR = 2023;
console.log(typeof String(YEAR)); //명시적 형 변환
console.log(YEAR + ' '); // 암시적 형 변환

// undefined, null

let days = null;
console.log(typeof String(null)); // 명시적 형 변환
console.log(null + ' '); // 암시적 형 변환

let undef = undefined;
console.log(typeof String(undefined)); // 명시적 형 변환
console.log(undefined + ' '); // 암시적 형 변환

// boolean

let isClicked = true;
console.log(typeof String(isClicked)); // 명시적 형 변환
console.log(isClicked + ' '); // 암시적 형 변환

/* 데이터 → 숫자 ----------------------------------------------------------- */

// undefined

let friend;
console.log(Number(friend)); // 명시적 형 변환

// null

let bankbook = null;
console.log(Number(bankbook)); // 명시적 형 변환

// boolean

// let cutie = false;
let cutie = true;
console.log(Number(cutie)); // 명시적 형 변환

// string
let num = '250';
console.log(Number(num)); // 명시적 형 변환
console.log(+num); // 암시적 형 변환
console.log(num * 1); // 암시적 형 변환
console.log(num / 1); // 암시적 형 변환

// numeric string

let width = '105.3px';
let 지수 = '51e10';

console.log(Number(width)); // NaN

let f = parseFloat(width, 10);
// 진수까지 넣어주기
console.log(f); // 105.3
let i = parseInt(width, 10);
console.log(i); // 105
// 숫자 중간에 문자를 만나면 뒤를 버림. ex)let 지수='51e10'

/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, ''
// 위에 나열한 것 이외의 것들

console.log(Boolean(friend));
console.log(Boolean(bankbook));
console.log(Boolean(0));
console.log(Boolean(NaN));
console.log(Boolean(''));
console.log(Boolean(0));
console.log(Boolean(1));
console.log('암시적 형 변환: ' + !false);
console.log('암시적 형 변환: ' + !!false);

/* 형변환 + 표현식 ---------------------------------------------------------- */

/* 
'' + 1 + 0; // 10
'' - 1 + 0; // -1
true + false; // 1
6 / '3'; //2
'2' * '3'; // 6
4 + 5 + 'px'; // '9px'
'$' + 4 + 5; // '$45'
'4' - 2; // 2
'4px' - 2; //NaN
7 / 0; // Infinity
'  -9  ' + 5; // '  -9  5'
'  -9  ' - 5; // -14
null + 1; // 1
undefined + 1; // NaN
' \t \n' - 2; // -2, \는 줄바꿈=0이기 때문
 */
