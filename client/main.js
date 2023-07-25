import {
  diceAnimation,
  attr,
  getNode,
  getNodes,
  insertLast,
  endScroll,
  clearContents,
  memo,
} from './lib/index.js';

// [phase-1] 주사위 굴리기
// 1. dice animation 불러오기
// 2. 주사위 굴리기 버튼을 클릭하면 diceAnimation 실행
//       - 주사위 굴리기 버튼을 가져온다.
//       - 이벤트 핸들러를 연결한다.
//       - 애니메이션 코드를 작성한다.
// 3. 애니메이션 토글 제어
// 4. 클로저 + IIFE를 사용한 변수 보호

// [phase-2] 레코드 리스트 control/view
// 1. 주사위가 멈추면 기록/ 초기화 버튼 활성화
// 2. hidden 속성 제어하기
//      - 기록 버튼 이벤트 바인딩
//      - hidden 속성 false 만들기
// 3. 주사위 값을 가져와 랜더링
// 4. 스크롤 위치 내리기
// 5. 함수 분리

// [phase-3] 초기화 시키기
// 1. 아이템 지우기

// 배열 구조 분해 할당 (순서 중요)
const [startButton, recordButton, resetButton] = getNodes(
  '.buttonGroup > button'
);
const recordListWrapper = getNode('.recordListWrapper');
// const tbody = getNode('.recordList tbody');
memo('@tbody', () => getNode('.recordList tbody')); // setter

// memo('@tbody'); //getter

const handleRollingDice = (() => {
  let isClicked = false;
  let stopAnimation;
  return () => {
    if (!isClicked) {
      stopAnimation = setInterval(diceAnimation, 100);
      recordButton.disabled = true;
      resetButton.disabled = true;
    } else {
      clearInterval(stopAnimation);
      recordButton.disabled = false;
      resetButton.disabled = false;
    }
    isClicked = !isClicked;
  };
})();

//  회차 늘어나게 하기
// diceValue 들어가게 하기
// total 값 나오게 하기

let count = 0;
let total = 0;

const createItem = (value) => {
  return /* html */ `
            <tr>
              <td>${++count}</td>
              <td>${value}</td>
              <td>${(total += value)}</td>
            </tr>
  `;
};

const renderRecordItem = () => {
  // 주사위 data-dice 값 가져오기
  const diseValue = +attr(memo('cube'), 'data-dice');

  // tbody 안에 createItem 뿌리기
  insertLast(memo('@tbody'), createItem(diseValue));

  endScroll(recordListWrapper);
};

const handleRecord = () => {
  recordListWrapper.hidden = false;

  renderRecordItem();
};

const handleReset = () => {
  recordListWrapper.hidden = true;
  recordButton.disabled = true;
  resetButton.disabled = true;

  clearContents(memo('@tbody'));

  count = 0;
  total = 0;
};

startButton.addEventListener('click', handleRollingDice);
recordButton.addEventListener('click', handleRecord);
resetButton.addEventListener('click', handleReset);

// 미니과제 2
// 함수만들기
// disableElement(node){
// node.disabled = true;
// }
// enableElement(node){
// node.disabled = false;
// }
// isDisableState(node)  => true / false

// visibleElement(node){
// node.hidden = false;
// }
// invisibleElement(node){
// node.hidden = true;
// }
// isVisibleState(node) => true / false
