/* --------------------------------- */
/* DOM traversal                     */
/* --------------------------------- */

/* 모든 노드에서 사용 */
// - parentNode
// - childNodes
// - firstChild
// - lastChild
// - previousSibling
// - nextSibling

/* 요소 노드에서만 사용 가능 */
// - parentElement
// - children
// - firstElementChild
// - lastElementChild
// - previousElementSibling
// - nextElementSibling

/* 문서 대상 찾기 */
// - getElementById
// - getElementsByTagName
// - getElementsByClassName

// 레거시 코드
// const message = document.getElementById('message');
// const message = document.getElementsByClassName('first');

// const first = getNode('.first'); // <span class="first"></span>

// - querySelector
// const first = document.querySelector('.first');

// - querySelectorAll
const [firstSpan, secondSpan] = document.querySelectorAll('span');

// console.log(first);
console.log(firstSpan);
console.log(secondSpan);

// - closest
// 내 부모와 가장 인접한 ('h1')요소를 찾기
console.log(firstSpan.closest('h1')); // event delegation

// - matches
/* 문서 대상 확인 */

//  선택자 안에 class | id 를 가지고 있는 대상이 있어?
console.log(firstSpan.matches('#message'));

// - contains
// 선택자의 자식들 중에 해당 element가 있어?
console.log(firstSpan.contains(secondSpan));

// 클래스를 포함하고 있어?
// node.classList.contains();
