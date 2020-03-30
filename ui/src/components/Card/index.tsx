import React from 'react';
import { Card as CardType, Shape } from '../../interfaces';
import './style.scss';
import { ClubsIcon, DiamondIcon, HeartsIcon, SpadesIcon } from '../../icons';

interface CardProps extends CardType {
    onClick?: () => void;
    className?: string;
}

export const Card = (props: CardProps) => {
    let icon;

    switch (props.shape) {
        case Shape.CLUBS:
            icon = ClubsIcon;
            break;
        
        case Shape.DIAMONDS:
            icon = DiamondIcon;
            break;
        
        case Shape.HEARTS:
            icon = HeartsIcon;
            break;
        
        case Shape.SPADES:
            icon = SpadesIcon;
            break;
    }
    
    return (
        <section className={`card card--${props.shape}`} onClick={props.onClick}>
            <div className='card__container'>
                <Sign icon={icon} value={props.value} />
                <span className='card__main'>{icon}</span>
                <Sign className='card__sign--reverse' icon={icon} value={props.value} />
            </div>
        </section>
    );
};

interface SignProps {
    value: string;
    icon: React.ReactElement;
    className?: string;
}

const Sign = ({ icon, value, className }: SignProps) => {
    return (
        <div className={`card__sign ${className}`}>
            <span className='card__value'>{value}</span>
            <span className='card__shape'>{icon}</span>
        </div>
    );
}