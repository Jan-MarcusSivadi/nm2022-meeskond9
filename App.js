const express = require('express');
const app = express();

const path = require('path');
require('dotenv').config();
const port = process.env.PORT;
// use socket.io
const http = require("http")
const server = http.createServer(app)
var io = require("socket.io")(server, {
    transports: ['polling', 'websocket']
});

// io.on("connection", (socket) => {
//     console.log('Client connection opened.');

//     // wait for client connection..
//     socket.on('chatbot_connect', (sessionId) => {
//         // send response to client
//         socket.join(sessionId)
//         socket.emit('chatbot_connected', 'Hello from chatbot!')
//     })

//     socket.on("disconnect", () => {
//         console.log('Client connection closed.');
//     })
// });

// Use public folder, view engine
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

// Require router
app.use(require("./routes/routes"));

// Listen on port
server.listen(port, () => {
    console.log(`Server up at http://localhost:${port}`);
});