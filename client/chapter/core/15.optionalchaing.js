/* ---------------------------------------------------------------------- */
/* Optional Chaining                                                      */
/* ---------------------------------------------------------------------- */
//! 객체의 메서드 포함 유무를 조건에 따라 처리하는 옵셔널 체이닝

const portableFan = {
  maker: 'fromB',
  brand: 'FD221',
  type: 'neckband',
  photo: {
    static: 'https://bit.ly/3OS50UD',
    animate: 'https://bit.ly/3P8646q',
  },
  getFullName() {
    return `${this.brand}, ${this.maker}`;
  },
};

// 아래 코드는 문제가 있어 런타임 중 오류가 발생합니다.
console.log(portableFan.photos?.image);
// 객체는 없는 대상에 접근을 해도 에러가 아님 (json (JavaScript Object Notation)과 유사). 객체의 하위에 접근할 때만 에러 발생

// 오류를 발생시키지 않으려면 아래와 같이 작성해야 합니다.
// if ('photos' in portableFan) {
//   if ('animate' in portableFan.photos) {
//     console.log(portableFan.photos.animate);
//   }
// }
if (portableFan.photos === 'undefined') {
  throw new Error('에러!');
}

// 위 구문을 논리곱 연산자를 사용한 방식으로 변경해봅니다.

// 위 구문을 옵셔널 체이닝을 사용한 구문으로 변경해봅니다.

// 메서드 사용 시, 옵셔널 체이닝을 사용해봅니다.

// 객체의 프로퍼티 접근 시, 옵셔널 체이닝을 사용해봅니다.

const button = document.querySelector('button');

console.log(button);

button.addEventListener('click', function () {
  this.style.backgroundColor = 'orange';
});

/* -------------------------------------- */

//! sync 동기    vs    defer, async 비동기

// 비동기 코드: 순서를 무시하는 코드

//! setTimeout
// 일정시간 이후 실행되는 메서드
// console.log('첫 번째 실행');
const timer = setTimeout(() => {
  // console.log('두 번째 실행');
  const button = /* html */ `
  <button type="button">clickMe</button>
  `;
  document.body.insertAdjacentHTML('beforeend', button);
}, 3000);
// console.log('세 번째 실행');
clearTimeout(timer); // 중단

//! setInterval
// 코드를 특정 시간마다 반복실행하는 메서드
let count = 0;
const interval = setInterval(() => {
  // console.log(++count);
  document.querySelector(
    '.first'
  ).style.transform = `translateY(${count}px) rotate(${count}deg)`;

  clearInterval(interval);
}, 1000);

// requestAnimationFrame() // 재귀
// 개인 모니터에 최적화된 애니메이션 메서드
