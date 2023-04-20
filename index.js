const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);
const io = require('socket.io')(server);

app.use(express.static('./public'))

app.get('/', (req, res) => {
  console.log("index.html")
})

server.listen(3000, () => { console.log(`Running on port: ${3000}`)})