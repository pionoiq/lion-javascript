/* ---------------------------------------------------------------------- */
/* String Type                                                            */
/* ---------------------------------------------------------------------- */

let message = 'Less is more.';

//! length 프로퍼티
let stringTotalLength = message.length;
console.log('stringTotalLength: ', stringTotalLength);

//! 특정 인덱스의 글자 추출
let extractCharacter = message[1];
console.log('extractCharacter: ', extractCharacter);

//! 문자열 중간 글자를 바꾸는 건 불가능
// (기존 문자 변경 대신, 새로운 문자를 생성해야 함)
let immutableChangeCharacter;

//! 부분 문자열 추출
// slice([begin[, end]]) => [, end] 생략을 의미
let slice = message.slice(4); // 4번부터 끝까지
console.log('slice: ', slice);
let slice2 = message.slice(4, -5); // 4번부터 끝에서 5번째
console.log('slice2: ', slice2);

let subString = message.slice(1, 3);
console.log('subString: ', subString);

let subStr = message.slice(1, 3); // 이제 안 쓰임
console.log('subStr: ', subStr);

//! 문자열 포함 여부 확인
let indexOf = message.indexOf('p');
console.log('indexOf: ', indexOf);

let lastIndexOf = message.lastIndexOf('e'); // 뒤에서부터 탐색.
console.log('lastIndexOf: ', lastIndexOf);

let includes = message.includes('less');
console.log('includes: ', includes);

let startsWith = message.startsWith('Less'); // 해당 문자부터 시작하는지 묻는 메서드
console.log('startsWith: ', startsWith);

let endsWith = message.endsWith('more.'); // 해당 문자로 끝나는지 묻는 메서드
console.log('endsWith: ', endsWith);

//! 공백 잘라내기
let trimStart = message.trimStart();
let trimRight;
// Left/Right가 언어에 따라 가로로 기술하는 언어는 문제가 없지만
// 아랍어처럼 세로로 기술하는 언어는 왼쪽 오른쪽이라는 개념이 맞지 않기 때문에 접근성 관련해서 방향보다 시작,종료로 구분하는 형태로 변경됨

let str = ' a  bc  de   adfe';

let trim = str.trim(); // 문자 양쪽의 공백만 제거, 문자 사이의 공백 X
console.log('trim: ', trim);

//! 문자사이 공백 제거
let splitJoin = str.split(' ').join('');
let replace = str.replace(/\s*/g, '');
/* 
 replace의 argument 1(대체될 문자)은 아래와 같고
/(정규표현식으로) \s(스페이스를) * /g (전체에서 찾는다.)
replace의 argument 2(대체할 문자)는 아래와 같다
,'' (빈문자)
*/

//! 텍스트 반복
let repeat = message.repeat(3);

//! 대소문자 변환
let toLowerCase = message.toLowerCase();
let toUpperCase = message.toUpperCase();

//! 텍스트 이름 변환 유틸리티 함수
function toCamelCase(string) {
  return string.replace(/(\s|-|_)+./g, ($1) =>
    $1
      .trim()
      .replace(/(-|_)+/, '')
      .toUpperCase()
  );
}

function toPascalCase(string) {
  let name = toCamelCase(string);
  return name[0].toUpperCase() + name.slice(1);
}
