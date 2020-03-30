import React from 'react';
import { Card as Component } from '../Card';
import { Card } from '../../interfaces';
import { useSocket } from '../../hooks';

interface CardSenderProps extends Card {
    onClick?: (card: Card) => void;
}

export const CardSender = ({ value, shape, joker, onClick }: CardSenderProps) => {
    const handleClick = () => {
        onClick && onClick({ shape, value, joker });
    };

    return (
        <Component value={value} shape={shape} onClick={handleClick} />
    );
}
