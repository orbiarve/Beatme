
const io = require('socket.io')();



io.on('connection', (client) => {
  client.on('userOn', () => {
      console.log('sent');
    client.emit('user', 'hello');
  });
  client.on('message', (message) => {
      console.log(message);
      io.sockets.emit('sendMessage', message);

  });
});

  const port = 8000;
io.listen(port);
console.log('listening on port ', port);