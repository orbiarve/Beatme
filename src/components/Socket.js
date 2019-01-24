import openSocket from 'socket.io-client';
const  socket = openSocket('http://localhost:8000');
function subscribeToTimer(cb) {
  socket.on('user', (message) => cb(null, message));
  socket.emit('userOn');
}
export { subscribeToTimer };