#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

// check if argument is provided
if (process.argv < 3) return

const ext = `.${process.argv[3]}`

fs.readdir(process.argv[2], (err, files) => {
  if (err) throw err

  files.forEach(file => {
    if (path.extname(file) === ext) {
      console.log(file)
    }
  })
})
