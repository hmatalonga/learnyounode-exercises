#!/usr/bin/env node

const http = require('http');
const map = require('through2-map');

const listener = (request, response) => {
  if (request.method !== 'POST') {
    return request.end('Not a POST request\n');
  }
  request.pipe(map(chunk => chunk.toString().toUpperCase())).pipe(response);
};

http.createServer(listener).listen(Number(process.argv[2]));
