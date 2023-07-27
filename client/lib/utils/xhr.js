import { refError } from '../error/refError.js';
/* 

[readystate]

0: uninitialized 
1: loading
2: loaded
3: interacive 
4: complete

*/

/* callback ------------------------------------- */

// 객체 구조 분해 할당

export function xhr({
  method = 'GET',
  url = '',
  onSuccess = null,
  onFail = null,
  body = null,
  headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
} = {}) {
  const xhr = new XMLHttpRequest();

  xhr.open(method, url);
  Object.entries(headers).forEach(([key, value]) => {
    xhr.setRequestHeader(key, value);
  });

  xhr.addEventListener('readystatechange', () => {
    const { status, readyState, response } = xhr;
    if (status >= 200 && status < 400) {
      if (readyState === 4) {
        onSuccess(JSON.parse(response));
      }
    } else {
      onFail('실패');
    }
  });
  xhr.send(JSON.stringify(body));
}

/**
 *
 * @param {string} url 서버와 통신할 주소
 * @param {function} onSuccess 서버와 통신 성공시 실행될 콜백 함수
 * @param {function} onFail 서버와의 통신 실패시 실행될 콜백 함수
 * @retrun server data
 */

xhr.get = (url, onSuccess, onFail) => {
  xhr({ url, onSuccess, onFail });
};

xhr.post = (url, body, onSuccess, onFail) => {
  xhr({ method: 'POST', url, body, onSuccess, onFail });
};

xhr.put = (url, body, onSuccess, onFail) => {
  xhr({ method: 'PUT', url, body, onSuccess, onFail });
};

xhr.delete = (url, onSuccess, onFail) => {
  xhr({ method: 'DELETE', url, onSuccess, onFail });
};

// function xhr(method, url, onSuccess, onFail, body, headers) {

// const {
//   method: m = 'GET',
//   url = '',
//   onSuccess = null,
//   onFail = null,
//   body = null,
//   headers = {
//     'Content-Type': 'application/json',
//     'Access-Control-Allow-Origin': '*',
//   },
// } = options;

//   const xhr = new XMLHttpRequest();

//   xhr.open(method, url);
//   Object.entries(headers).forEach(([key, value]) => {
//     xhr.setRequestHeader(key, value);
//   });

//   xhr.addEventListener('readystatechange', () => {
//     const { status, readyState, response } = xhr;
//     if (status >= 200 && status < 400) {
//       if (readyState === 4) {
//         onSuccess(JSON.parse(response));
//       }
//     } else {
//       onFail('실패');
//     }
//   });
//   xhr.send(JSON.stringify(body));
// }

// 순서 중요
// xhr(
//   'POST',
//   'https://jsonplaceholder.typicode.com/users',
//   (result) => {
//     console.log(result);
//   },
//   (err) => {
//     console.log(err);
//   },
//   {
//     name: 'tiger',
//   },
//   {
//     'Content-Type': 'application/json',
//     'Access-Control-Allow-Origin': '*',
//   }
// );

// 순서 안중요  => const {} = options;
// method, url, onSuccess, onFail, body, headers
// xhr({
//   url: 'https://jsonplaceholder.typicode.com/users',
//   onSuccess: () => {},
//   onFail: () => {},
//   body: {
//     name: 'tiger',
//   },
// });

/* promise---------------------------------------- */

const defaultOptions = {
  method: 'GET',
  url: '',
  body: null,
  errorMessage: '서버와의 통신이 원활하지 않습니다.',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
};

export function xhrPromise(options) {
  //mixin
  // const config = { ...defaultOptions, ...options };
  //  위와 동일    Object.assign: 빈 객체 필수
  // let config = Object.assign({}, defaultOptions, options);
  const { method, url, body, errorMessage, headers } = Object.assign(
    {},
    defaultOptions,
    options
  );

  if (!url) refError('서버와 통신할 url은 필수값입니다.');

  const xhr = new XMLHttpRequest();

  xhr.open(method, url);

  Object.entries(headers).forEach(([key, value]) => {
    xhr.setRequestHeader(key, value);
  });

  xhr.send(JSON.stringify(body));

  return new Promise((resolve, reject) => {
    xhr.addEventListener('readystatechange', () => {
      if (xhr.readyState === 4) {
        if (xhr.status >= 200 && xhr.status < 400) {
          resolve(JSON.parse(xhr.response));
        } else {
          reject({ message: errorMessage });
        }
      }
    });
  });
}

// xhrPromise({
//   url: 'https://jsonplaceholder.typicode.com/users',
//   errorMessage: '알 수 없는 오류',
// }).then((res) => {
//   console.log(res);
// });

// xhrPromise({
//   url: 'https://jsonplaceholder.typicode.com/users',
// }).then((res) => {
//   res.forEach((item) => {
//     console.log(item);
//   });
// });

xhrPromise.get = (url) => {
  return xhrPromise({ url });
};

// console.log(xhrPromise.get('https://jsonplaceholder.typicode.com/users'));

xhrPromise.post = (url, body) => {
  return xhrPromise({ method: 'POST', url, body });
};

xhrPromise.put = (url, body) => {
  return xhrPromise({ method: 'PUT', url, body });
};

xhr.delete = (url) => {
  return xhr({ method: 'DELETE', url });
};
