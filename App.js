const express = require('express');
const app = express();

const path = require('path');
require('dotenv').config();
const port = process.env.PORT;
// use socket.io
// const http = require("http")
// const server = http.createServer(app)
// var io = require("socket.io")(server, {
//     transports: ['polling', 'websocket']
// });

// Use public folder, view engine
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

// Require router
// app.use(require("./routes/routes"));

app.get('*', (req, res) => {
    console.log("*", path.join(__dirname, 'public', 'index.html'))
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

// Listen on port
app.listen(port, () => {
    console.log(`Server up at http://localhost:${port}`);
});