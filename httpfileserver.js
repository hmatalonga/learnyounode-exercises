#!/usr/bin/env node

const fs = require('fs')
const http = require('http')

const listener = (request, response) => {
  response.writeHead(200, { 'content-type': 'text/plain' })
  fs.createReadStream(process.argv[3])
    .pipe(response)
}

http.createServer(listener)
    .listen(Number(process.argv[2]))