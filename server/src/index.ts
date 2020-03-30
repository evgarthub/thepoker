import express from 'express';
import socket from 'socket.io';
import { PLAYER_REGISTRATION, ACTION, GAME_UPDATE, CONNECTION } from './actions';

var app = express();
app.use(express.static('../ui/build'));

var server = app.listen(4000);

var io = socket(server);

io.on(CONNECTION, (socket) => {

    console.log('made socket connection', socket.id);

    socket.on(ACTION, (payload) => {
        io.sockets.emit(GAME_UPDATE, payload);
        console.log(ACTION, payload.shape, payload.value);
    });

    socket.on(PLAYER_REGISTRATION, (payload) => {
        console.log('player registered: ', payload.name);
        
    });

    // socket.broadcast.emit('typing', data);

});
