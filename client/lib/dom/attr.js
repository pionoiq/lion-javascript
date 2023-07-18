// * 요소의 속성 값을 가져오는 함수
function getAttr(node, prop) {
  // 1. 넘어온 대상이 문자인지를 체크
  // 2. 체크 후 element node로 변경.

  // validation: 확장성이 좋아짐
  if (typeof node === 'string') {
    node = getNode(node);
  }

  return node.getAttribute(prop);
  // 값을 return 하지 않으면 undefined 반환
}
//* 요소에 속성과 값을 넣으면 셋팅해주는 함수
function setAttr(node, prop, value) {
  if (typeof node === 'string') {
    node = getNode(node);
  }
  if (typeof prop !== 'string') {
    // 에러메세지를 쓸 때는 에러가 난 함수의 이름 먼저 쓰기
    throw new ReferenceError(
      'setAttr 함수의 두 번째 인수는 문자 타입이어야 합니다.'
    );
  }
  if (!node[prop] && prop !== 'class' && prop !== 'title') {
    // prop이 비표준일 경우 커스텀 프로퍼티를 생성
    node.dataset[prop] = value;
    return; // 리턴이 없으면 함수가 종료되지 않고 아래의 코드까지 실행됨
  }
  node.setAttribute(prop, value);
  // set은 return이 필요 없음
}

//* getter와 setter를 한번에 실행하는 함수
// 작은 함수를 만들고 큰 함수로 연결
function attr(node, prop, value) {
  // value의 유무에 따라 getter와 setter 구분
  if (!value) {
    return getAttr(node, prop);
  } else {
    setAttr(node, prop, value);
  }
}

// attr('.first', 'class'); // getter
// attr('.first', 'class', 'second'); // setter

// 위와 동일한 역할
const arrowAttr = (node, prop, value) =>
  !value ? getAttr(node, prop) : setAttr(node, prop, value);
