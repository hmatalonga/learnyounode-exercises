#!/usr/bin/env node

const fs = require('fs')

fs.readFile(process.argv[2], (err, data) => {
  if (err) throw err

  const newLines = data.toString().trim().split('\n').length - 1

  console.log(newLines)
})
