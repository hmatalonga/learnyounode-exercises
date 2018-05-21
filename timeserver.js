#!/usr/bin/env node

const net = require('net')

const opts = {
  year: 'numeric',
  month: '2-digit', 
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit'
}

const listener = socket => {
  socket.end(`${new Date().toLocaleDateString('pt-PT', opts)}\n`)
}

const server = net.createServer(listener)

server.listen(Number(process.argv[2]))
