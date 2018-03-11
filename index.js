const express = require('express');
const app = express();
const { SocketServer } = require('ember-present');

app.get('/', (req, res) => res.send('Hello World!'));

let socketServer = new SocketServer(app, { socketServerPort: 5300 });
socketServer.start();

app.listen(3000, () => console.log('Example app listening on port 3000!'));
