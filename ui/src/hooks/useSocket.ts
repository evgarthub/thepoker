import io from 'socket.io-client';
import { Card } from '../interfaces';
import { PLAYER_REGISTRATION, ACTION, GAME_UPDATE } from 'thepoker-server';

export const useSocket = () => {
    const socket = io('http://localhost:4000');

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
