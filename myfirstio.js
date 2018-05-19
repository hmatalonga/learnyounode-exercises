#!/usr/bin/env node

const fs = require('fs')

const buffer = fs.readFileSync(process.argv[2])
const newLines = buffer.toString().trim().split('\n').length - 1

console.log(newLines)
