/* ------------------ */
/* Global This        */
/* ------------------ */

var objectVariable = '전역 객체의 변수';
let declarativeVariable = '전역 변수';

// globalThis를 통해 접근 가능한 변수와 그렇지 않은 변수는?
console.log(globalThis);
console.log(globalThis.objectVariable);
console.log(globalThis.declarativeVariable);

// 전역 객체는 이전 버전과의 호환성으로 인해 JavaScript가 제거할 수 없는 실수로 간주됩니다.
// 성능에 부정적인 영향을 미치며 일반적으로 혼란스럽습니다. 전역 객체를 사용한 변수 사용은
// 문제를 발생시킬 소지가 있고, 테스트가 어려우니 가급적 사용하지 않는 것이 좋습니다.

// console.log(this, self, window, globalThis);
// 모두 전역 객체window를 가리킴
// 엄격모드에서 아무것도 가리키지 않는 this를 사용하면 오류

// var gVar = 5;
// alert(window.gVar);
// 금지
