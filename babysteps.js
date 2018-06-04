#!/usr/bin/env node

let numbers = process.argv.slice(2).map(Number);
let sum = numbers.reduce((a, b) => a + b, 0);

console.log(sum);
