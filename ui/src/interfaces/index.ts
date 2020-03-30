export interface Card {
    shape: Shape;
    value: CardValue;
    joker?: Joker;
}

export enum Shape {
    HEARTS = 'hearts',
    CLUBS = 'clubs',
    DIAMONDS = 'diamonds',
    SPADES = 'spades'
}

export enum CardValue {
    A = 'A',
    TWO = '2',
    THREE = '3',
    FOUR = '4',
    FIVE = '5',
    SIX = '6',
    SEVEN = '7',
    EIGHT = '8',
    NINE = '9',
    TEN = '10',
    J = 'J',
    Q = 'Q',
    K = 'K'
}

export interface Joker {
    isMax: boolean;
    isMin: boolean;
    shape: Shape;
}