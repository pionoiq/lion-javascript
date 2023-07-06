/* --------------- */
/* While Loop      */
/* --------------- */
/* 
let repeat = 0;

while (repeat < 10) {
  console.log(repeat);
  repeat++; // 자동으로 break를 걸어주는 증가함수. 없으면 무한루프에 빠지니 주의
}
 */
const frontEndDev = [
  'HTML',
  'CSS',
  'SVG',
  'JavaScript',
  'jQuery',
  'React',
  'Redux',
];

/* 프론트엔드 개발 집합 항목 출력 ---------------------------------------------- */

// console.log(frontEndDev[0]);
// console.log(frontEndDev[1]);
// console.log(frontEndDev[2]);
// console.log(frontEndDev[3]);
// console.log(frontEndDev[4]);
// console.log(frontEndDev[5]);
// console.log(frontEndDev[6]);

/* 프론트엔드 개발 집합을 순환해서 각 아이템을 Console 패널에 출력 -------------------- */

// ----------while 문 (순환 : 순방향)----------

// 변수에 담아 값을 호출할 경우와 그냥 console.log로 보는 것은 성능적인 면에서 차이가 있다.

// let z1 = performance.now();
/* 
let i = 0;

while (i < frontEndDev.length) {
  let value = frontEndDev[i];
  console.log(value);
  i++;
}
 */
// let z2 = performance.now();

// console.log(z2 - z1);

// ---------while 문 (역순환 : 역방향)-----------

/* 
let l = frontEndDev.length - 1; // 6번부터 시작

while (l >= 0) {
  let value = frontEndDev[l];
  console.log(value);
  --l;
}
*/

let l = frontEndDev.length; // 6번부터 시작

while (l > 0) {
  let value = frontEndDev[l--];
  console.log(value);
}

// 모든 배열 복사 -> 깊은 복사
// let copyArray = frontEndDev.slice(); // old
let copyArray = [...frontEndDev]; // new

// 기존 배열에 shift(), pop()을 쓸 경우 원본 파괴
while (copyArray.length) {
  console.log(copyArray.shift()); // 순방향
  // console.log(copyArray.pop()); // 역방향
}

// --------성능 진단 : 순환 vs. 역순환--------

// 역순환이 더 빠르다
// 다만 10만줄 가까이 돌릴게 아니면 큰 차이 없다

/* 
let z1 = performance.now();

{
  코드
}

let z2 = performance.now();

console.log(z2 - z1);
*/
