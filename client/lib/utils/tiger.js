const URL = 'https://jsonplaceholder.typicode.com/users';

const defaultOptions = {
  method: 'GET',
  body: null,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
};

export const tiger = async (options) => {
  const { url, ...restOptions } = {
    ...defaultOptions,
    ...options,
    headers: {
      ...defaultOptions.headers,
      ...options.headers,
    },
  };

  const response = await fetch(url, restOptions);

  if (response.ok) {
    response.data = await response.json();
  }

  return response;
};

// 떨어지는 값이 promise 일 때만 await을 붙이기
const response = await tiger({
  url: URL,
});

const userData = response.data;

// console.log(userData);

// const response = await fetch('https://pokeapi.co/api/v2/pokemon/130');

// const data = await response.json();
// console.log(data);

tiger.get = (url, options) => {
  return tiger({
    url,
    ...options,
  });
};
tiger.post = (url, body, options) => {
  return tiger({
    method: 'POST',
    url,
    body: JSON.stringify(body),
    ...options,
  });
};
tiger.delete = (url, options) => {
  return tiger({
    method: 'DELETE',
    url,
    ...options,
  });
};
tiger.put = (url, body, options) => {
  return tiger({
    method: 'PUT',
    url,
    body: JSON.stringify(body),
    ...options,
  });
};

// const data = await tiger.get(URL);
// console.log(data);
