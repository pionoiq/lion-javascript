const liveServer = require('live-server');

const params = {
  post: 5500,
  host: 'localhost',
  root: './client',
  open: false,
};

liveServer.start(params);

// 라이브서버를 여는 또 다른 방식
