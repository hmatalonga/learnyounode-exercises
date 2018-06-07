#!/usr/bin/env node

const http = require('http');

const parseTime = date => ({
  hour: date.getHours(),
  minute: date.getMinutes(),
  second: date.getSeconds()
});

const unixTime = iso => ({
  unixtime: Date.parse(iso)
});

const listener = ({ url }, response) => {
  const data = require('url').parse(url, true);

  switch (data.pathname) {
    case '/api/parsetime':
      response.writeHead(200, { 'Content-Type': 'application/json' });
      response.write(JSON.stringify(parseTime(new Date(data.query.iso))));
      break;
    case '/api/unixtime':
      response.writeHead(200, { 'Content-Type': 'application/json' });
      response.write(JSON.stringify(unixTime(data.query.iso)));
      break;
    default:
      response.writeHead(404);
  }
  response.end();
};

http.createServer(listener).listen(Number(process.argv[2]));
