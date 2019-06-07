const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

server.listen(3000);

io.on('connection', function(client) {
  console.log('Client connected...');

  client.on('join', function(data) {
    client.broadcast.emit('join', data.name);
  });

  client.on('message', function(message) {
    client.emit('message', message);
    client.broadcast.emit('message', message);
  });

  client.on('message-edited', function(message) {
    client.emit('message-edited', message);
    client.broadcast.emit('message-edited', message);
  });

  client.on('globalMessage', function(message) {
    client.emit('globalMessage', message);
    client.broadcast.emit('globalMessage', message);
  });
});
