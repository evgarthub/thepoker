import express,  { static as loadStatic } from 'express';
import socket, { Server as SocketServer } from 'socket.io';
import { PLAYER_REGISTRATION, ACTION, GAME_UPDATE, CONNECTION } from './actions';
import { Server } from 'http';
import path from 'path';

export const runServer = () => {
    const staticFiles = path.join(__dirname, 'public');
    var app = express();
    app.use(loadStatic(staticFiles));

    var server: Server = app.listen(4000);

    app.get('*', (req, res) => {
        res.sendFile(path.join(staticFiles + '/index.html'));
    });

    var io: SocketServer = socket(server);

    io.on(CONNECTION, (socket) => {

        console.log('made socket connection', socket.id);

        socket.on(ACTION, (payload) => {
            // io.sockets.emit(GAME_UPDATE, payload);
            socket.broadcast.emit(GAME_UPDATE, payload); 
        });

        socket.on(PLAYER_REGISTRATION, (payload) => {
            console.log('player registered: ', payload.name);
            
        });


    });
};

runServer();
