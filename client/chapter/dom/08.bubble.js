/* ---------------------------- */
/* Event bubbling & capturing   */
/* ---------------------------- */

/* 버블링 ----------------------------------------------------------------- */

const section = getNode('section');
const article = getNode('article');
const p = getNode('p');

// section.addEventListener('click', () => {
//   console.log('%c section', 'color:orange');
//   // '%c~','color:~' => 주석 색깔 변경
// });

// article.addEventListener('click', (e) => {
//   e.stopPropagation();
//   console.log('%c article', 'color:dodgerblue');
// });

// p.addEventListener('click', (e) => {
//   e.stopPropagation();
//   console.log('%c p', 'color:hotpink');
// });
/* 캡처링 ----------------------------------------------------------------- */
section.addEventListener(
  'click',
  () => {
    console.log('%c section', 'color:orange');
    // '%c~','color:~' => 주석 색깔 변경
  },
  true
);

article.addEventListener(
  'click',
  (e) => {
    console.log('%c article', 'color:dodgerblue');
  },
  true
);

p.addEventListener(
  'click',
  (e) => {
    console.log('%c p', 'color:hotpink');
  },
  true
);
