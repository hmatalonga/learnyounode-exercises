#!/usr/bin/env node

const http = require('http');

const listener = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'application/json' });
};

http.createServer(listener).listen(Number(process.argv[2]));
