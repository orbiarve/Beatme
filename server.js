
const io = require('socket.io')();
// new connection means new tab
// client.emit on top name 
// sockets.emit on tab name
// client.emit on big number displayed
// sockets.emit on the count



io.on('connection', (client) => {
  client.on('userOn', () => {
      console.log('sent');
    client.emit('user', 'hello');
  });
  client.on('message', (message) => {
      console.log(message);
      io.sockets.emit('sendMessage', message);
  });
  client.on('nameChange', (name) => {
    io.sockets.emit('name', name);
  })
});

  const port = 8000;
io.listen(port);
console.log('listening on port ', port);