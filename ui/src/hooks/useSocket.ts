import openSocket from 'socket.io-client';
import { Card } from '../interfaces';
import { ACTION, PLAYER_REGISTRATION, GAME_UPDATE } from '../interfaces/actions';

export const useSocket = () => {
    const socket = openSocket('http://localhost:4000');

    const emit = (type: string, payload: any) => socket.emit(type, payload);

    const sendAction = ({ shape, value, joker }: Card) => {
        emit(ACTION, { value, shape, joker });
    };

    const registerPlayer = (name: string) => {
        emit(PLAYER_REGISTRATION, { name });
    };

    socket.on(GAME_UPDATE, (data: any) => {
        console.log(GAME_UPDATE, data);
    });

    return {
        sendAction,
        registerPlayer,
    };
};
