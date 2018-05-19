#!/usr/bin/env node

const http = require('http')
const bl = require('bl')

const get = url => {
  return new Promise((resolve, reject) => {
    http.get(url, response => {
      response.pipe(bl((err, data) => {
        if (err) reject(err)
        resolve(data.toString())
      }))
    }).on('error', reject)
  })
}

const run = async () => {
  for (let i = 0; i < 3; i++) {
    console.log(await get(process.argv[2 + i]))
  }
}

run()
