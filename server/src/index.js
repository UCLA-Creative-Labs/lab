const http = require('http');
const cors = require('cors');
const express = require('express');
const socketIo = require('socket.io');
const logger = require('./logger');

const app = express();
app.use(cors({
  'origin': 'http://localhost:8080'
}));
const server = http.createServer(app);
const io = socketIo(server);

io.on('connection', (socket) => {
  socket.emit('handshake', 'Recieved connection.');
});

const port = 3000;
server.listen(port, () => logger.info(`Listening on port ${port}`));

