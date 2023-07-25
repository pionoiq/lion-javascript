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
