/* -------------------- */
/* Do While Loop        */
/* -------------------- */

/* 
let i = 0;
do {
  if (i === 0) {
    console.log('최초실행');
  } else {
    console.log(`${i}번째 실행`);
  }
  i++;
} while (i < 10);
 */

// do ~ while 문 (역순환)
// - prompt 창을 띄워 사용자로 하여금 순환 횟수를 요청
// - 사용자로부터 요청된 횟수 만큼 역방향으로 순환 출력
// - 사용자로부터 요청된 횟수가 0보다 작을 경우,
//   '최초 실행된 메시지입니다. 이 메시지는 조건이 거짓이어도 볼 수 있습니다.' 출력
// - 순환 중단
// let repeat = prompt('순환 횟수를 입력해주세요.', 5);
// do {
//   if (repeat <= 0) {
//     console.log(
//       '최초 실행된 메시지입니다. 이 메시지는 조건이 거짓이어도 볼 수 있습니다.'
//     );
//     break;
//   }
//   console.log(repeat);
//   repeat--;
// } while (repeat);

// do ~ while 문 (순환)
// - 위 do ~ while 문을 순방향으로 순환되도록 설정

// let repeat = prompt('순환 횟수를 입력해주세요.', 5);
// do {
//   if (repeat <= 0) {
//     console.log(
//       '최초 실행된 메시지입니다. 이 메시지는 조건이 거짓이어도 볼 수 있습니다.'
//     );
//     break;
//   }
//   console.log(repeat);
//   repeat--;
// } while (repeat > 0);

let first = document.querySelector('.first');
// let second = document.querySelector('.second');

// first = first.nextSibling.nextSibling.nextSibling.nextSibling;

// first의 다음 ELEMENT_NODE를 찾는 연산자
/* 
do {
  first = first.nextSibling;
  // first의 바로 다음 형제를 찾는다.
} while (first.nodeType !== document.ELEMENT_NODE);
// 그 형제의 노드타입과 내가 찾으려는 엘리먼트 노드를 비교한다.
// 맞으면 멈추고, 틀리면 다음 형제를 찾아 또 비교한다.
console.log(first);

*/

// 다음 요소를 찾는 함수

function next(node) {
  do {
    node = node.nextSibling;
  } while (node.nodeType !== 1); // document.ELEMENT_NODE==1
  return node;
}

const second = next(first);
console.log(second);

// 이전 요소를 찾는 함수
function prev(node) {
  do {
    node = node.previousSibling;
  } while (node.nodeType !== 1);
  return node;
}

console.log(prev(second));
