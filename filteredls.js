#!/usr/bin/env node

const fs = require('fs')

// check if argument is provided
if (process.argv < 3) return

const ext = `.${process.argv[3]}`

fs.readdir(process.argv[2], (err, files) => {
  if (err) throw err

  files.filter(f => f.endsWith(ext))

  for (let i = 0, len = files.length; i < len; i++) {
    console.log(files[i])
  }
})
