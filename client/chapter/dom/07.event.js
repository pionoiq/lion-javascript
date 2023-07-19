/* --------------------- */
/* Event Handling        */
/* --------------------- */

/* 이벤트 핸들링 3가지 방법 --------------------------------------------------- */

// 1. HTML 속성 : onclick="handler()"
// 2. DOM 프로퍼티 : element.onclick = handler
// 3. 메서드 : element.addEventListener(event, handler[, phase])

// HTML 속성과 DOM 프로퍼티 공통점 : 함수를 하나만 실행가능하다
// HTML 속성과 DOM 프로퍼티 차이점 : HTML은 실행연산자가 있고, DOM은 없다.

/* 이벤트 추가/제거 --------------------------------------------------------- */

// 다른 함수보다 이벤트 함수가 가장 성능 부하에 영향을 미치기 때문에
// 이벤트 제거를 같이 만드는 걸 지향

// - addEventListener
// - removeEventListener

// 브라우저를 실행할 때 가장 처음 실행되도록 하는 이벤트
// window.addEventListener('DOMContentLoaded', () => {
//   const first = document.querySelector('.first');

//   console.log(first);
// });

// const first = getNode('.first');

// function handler() {
// console.log('HTML 속성에서 이벤트를 실행합니다.');
// console.log('DOM 프로퍼티에서 이벤트를 실행합니다.');
// }

// first.onclick = handler; // DOM 프로퍼티: 함수를 하나만 쓸 수 있다.
// onclick은 더이상 쓰지 않는 이벤트

// click, mousemove, mouseover, mouseout, mousedown, mouseup

// first.addEventListener('click', handlerClick);

// setTimeout(() => {
//   // first.removeEventListener('click', handlerClick);
//   remove();
// }, 3000);

// const remove = bindEvent('.first', 'click', handler);

/* ---------------------------------------------- */

// 이벤트 객체 (event object)
// 이벤트가 발생하면 브라우저는 이벤트 객체라는 것을 만듭니다.
// 객체에 이벤트에 관한 상세한 정보를 넣고, 핸드러의 인수로 형태를 전달한다.

const ground = getNode('.ground');
const ball = getNode('#ball');

function handleClick(e) {
  let x = e.offsetX;
  let y = e.offsetY;

  ball.style.transform = `translate(${x - ball.offsetWidth / 2}px,${
    y - ball.offsetHeight / 2
  }px)`;
  // 공 정중앙 맞추기:(-offsetHeight /2) => ball 크기의 절반 빼기
}

function debounce(callback, limit = 100) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      callback.apply(this, args);
    }, limit);
  };
}

function throttle(callback, limit = 100) {
  let waiting = false;
  return function () {
    if (!waiting) {
      callback.apply(this, arguments);
      waiting = true;
      setTimeout(() => {
        waiting = false;
      }, limit);
    }
  };
}

ground.addEventListener('click', handleClick);

// throttle debounce

ground.addEventListener(
  'mousemove',
  debounce((e) => {
    let x = e.offsetX;
    let y = e.offsetY;

    let template = `
    <div class="emotion" style="top:${y}px;left:${x}px">😍</div>
  `;

    insertLast(ground, template);
  })
);
