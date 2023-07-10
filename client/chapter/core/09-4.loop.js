/* ---------------- */
/* For In Loop      */
/* ---------------- */

const javaScript = {
  creator: 'Brendan Eich',
  createAt: '1995.05',
  standardName: 'ECMAScript',
  currentVersion: 2023,
  // hasOwnProperty() {
  //   return '이게 된다고..?';
  // },
};

// in 문 : 객체 안에 내가 원하는 값(property)이(가) 있어?
const key = 'creator';

// 객체의 속성(property) 포함 여부 확인 방법
// - 모든 객체가 사용 가능하도록 속성이 확장되었을 때 포함 여부 결과는?

// 닉네임이라는 프로토타입을 찐객체에 직접 추가하는 방법(찐객체에 덮어쓰기가 되기 때문에 금지)
Object.prototype.nickName = 'tiger';

// 객체 자신의 속성인지 확인하는 방법
// - "자신의 속성을 가지고있는지 확인 방법"이 덮어쓰여질 수 있는 위험에 대처하는 안전한 방법은?

// 보안이슈가 있으니 사용금지
// console.log(javaScript.hasOwnProperty(key));

// 찐객체에 접근해 능력을 빌려오는 방법(안전)
// console.log(Object.prototype.hasOwnProperty.call(javaScript, key));

for (let key in javaScript) {
  // if (Object.prototype.hasOwnProperty.call(javaScript, key)) {
  //   console.log(key);
  // }
  if ({}.hasOwnProperty.call(javaScript, key)) {
    console.log(key);
  } // 위와 동일
}

// for ~ in 문
// - 객체 자신의 속성만 순환하려면?

//일관된 순서로 구현되지 않기 때문에 순서가 중요할 경우 권장하지 않음(Array.prototype.forEach(), for...of 권장)
const tens = [10, 100, 1000, 10000];

for (let key in tens) {
  console.log(tens[key]);
}

// - 배열 객체 순환에 사용할 경우?
