#!/usr/bin/env node

const http = require('http')
const bl = require('bl')

http.get(process.argv[2], response => {
  response.pipe(bl((err, data) => {
    if (err) throw err
    data = data.toString()
    console.log(data.length)
    console.log(data)
  }))
}).on('error', console.error)
