/* ------------------------------ */
/* DOM Node Class                 */
/* ------------------------------ */

// Object
//   ↓
// EventTarget
// - 이벤트 관련 기능을 제공
//   ↓
// Node
// - 공통 DOM 노드 프로퍼티를 제공
//   | —————————————————————————————————————————
//   ↓                    ↓                    ↓
// Element              Text                Comment
// - 요소 노드 메서드를 제공
//   | ————————————————————
//   ↓                    ↓
// HTMLElement       SVGElement
// - HTML 요소 메서드와 getter, setter를 제공
//   | —————————————————————————————————————————
//   ↓                    ↓                    ↓
// HTMLBodyElement  HTMLDivElement     HTMLButtonElement

/* 노드 정보 ------------------------------------------------------------- */

const first = getNode('.first');

// - nodeType
console.log(first.nodeType === document.ELEMENT_NODE);
console.log(first.nodeType === 1);

// - nodeName (vs. tagName)
console.log(first.nodeName === 'SPAN'); // 요소, 텍스트, 주석 등 모든 노드타입들 확인
console.log(first.tagName === 'SPAN'); // 태그만 확인

/* 노드 콘텐츠 읽기/쓰기 ---------------------------------------------------- */

// - innerHTML

// * 기존 내용 삭제
// first.innerHTML = '';
// * 기존 내용과 새로운 내용을 합친 새로운 내용을 씀
// first.innerHTML += '<div>안녕!</div>';

// - textContent
// * 요소 내의 텍스트에 접근
// * 태그는 제외하고 오로지 텍스트만 추출
console.log((first.textContent = '50% 파격세일'));

// - innerHTML vs. textContent
// * innerHTML은 보안이 취약하기 때문에 사용 지양
// Element.innerHTML는 이름 그대로 HTML을 반환합니다. 간혹 innerHTML을 사용해 요소의 텍스트를 가져오거나 쓰는 경우가 있지만, HTML로 분석할 필요가 없다는 점에서 textContent의 성능이 더 좋습니다.

/* hidden -------------------------------------------------------------- */

// - hidden
// * hidden은 HTML 속성으로, DOM 프로퍼티로 사용 가능
// * hidden 프로퍼티는 기술적으로 style="display:none"와 동일

const h1 = getNode('h1');

h1.hidden = true; // 인라인 방식보다 우선순위 아래

/* 깜빡이 효과 */

// let toggle = false;

// setInterval(() => {
//   h1.hidden = toggle ? false : true;
//   toggle = !toggle;
// }, 500);
