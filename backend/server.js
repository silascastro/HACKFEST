const http = require('http');
const app = require('./src/app');

const server = http.createServer(app);
const io = require('socket.io')(server);

io.on('connection', socket => {
    console.log('socket conectado!');
    socket.on('sendMessage', data => {
        console.log(data);
    })
})


server.listen('3000');
console.log("servidor rodando na porta 3000");




