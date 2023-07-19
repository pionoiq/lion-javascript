/* class---------------------------------------------- */

//! addClass
function addClass(node, className) {
  if (typeof node === 'string') node = getNode(node);

  if (typeof className !== 'string') {
    throw new TypeError(
      'addClass 함수의 두 번째 인수는 문자 타입 이어야 합니다.'
    );
  }

  node.classList.add(className);
}

//! removeClass
function removeClass(node, className) {
  if (typeof node === 'string') node = getNode(node);

  if (!className) {
    node.className = '';
    return;
  }

  if (typeof className !== 'string') {
    throw new TypeError(
      'removeClass 함수의 두 번째 인수는 문자 타입 이어야 합니다.'
    );
  }

  node.classList.remove(className);
}

//! toggleClass
const toggleClass = (node, className) => {
  if (typeof node === 'string') node = getNode(node);
  if (typeof className !== 'string') {
    throw new TypeError(
      'toggleClass 함수의 두 번째 인수는 문자 타입 이어야 합니다.'
    );
  }

  return node.classList.toggle(className);
};

/* css---------------------------------------------- */

// 객체의 속성에 접근할 때 . 표기법은 사용할 수 없다.
// computed property []

//! setCss
function setCss(node, prop, value) {
  if (typeof node === 'string') node = getNode(node);
  if (!prop in document.body.style) {
    throw new SyntaxError(
      'setCss 함수의 두 번째 인자인 prop은 유효한 css 속성이 아닙니다.'
    );
  }
  if (!value) {
    throw new SyntaxError('setCss 함수의 세 번째 인자는 필수값입니다.');
  }
  node.style[prop] = value;
}

// setCss('.first', 'color', 'green');

//! getCss

function getCss(node, prop) {
  if (typeof node === 'string') node = getNode(node);
  if (!prop in document.body.style) {
    throw new SyntaxError(
      'setCss 함수의 두 번째 인자인 prop은 유효한 css 속성이 아닙니다.'
    );
  }

  return getComputedStyle(node).getPropertyValue(prop);
}

// getCss('.first', 'color');

const css = (node, prop, value) => {
  return !value ? getCss(node, prop) : setCss(node, prop, value);
};

// css('.first', 'color', 'orange'); // setter
// css('.first', 'color'); // getter
