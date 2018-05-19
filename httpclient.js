#!/usr/bin/env node

const http = require('http')

// check if argument is provided
if (process.argv < 3) return

http.get(process.argv[2], response => {
  response.setEncoding('utf8')
  response.on('data', console.log)
  response.on('error', console.error)
}).on('error', console.error)
