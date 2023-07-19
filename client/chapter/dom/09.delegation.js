/* ------------------------ */
/* Event delegation         */
/* ------------------------ */

/* 클래스를 사용한 위임 ---------------- */

const container = getNode('.container');

function handleDelegation(e) {
  let target = e.target;

  let li = target.closest('li'); // 가장 가까운 부모 요소를 찾는 메서드

  if (!li) return;

  let className = attr(li, 'class');
  let dataName = attr(li, 'data-name');

  console.log(className, dataName);

  if (className === 'home') {
    console.log('홈 실행!');
  }
}

container.addEventListener('click', handleDelegation);

/* 속성을 사용한 위임 ------------------ */

/* 노드를 사용한 위임 ------------------ */
