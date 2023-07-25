// import { getNode } from '../dom/getNode.js';

// 객체 안에 key:value로 저장

export const memo = (() => {
  const cache = {};

  return (key, callback) => {
    if (!callback) return cache[key];
    if (cache[key]) {
      console.warn(`${key}는 이미 캐시된 값이 존재합니다.`);
      return cache[key];
    }

    cache[key] = callback();

    // console.log(cache);
  };
})();
// memo('cube', () => getNode('#cube'));
// memo('cube', () => 123);

// console.log(memo('cube'));

//
