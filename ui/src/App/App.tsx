import React from 'react';
import './App.scss';
import { CardSender } from '../components/CardSender';
import { Shape, CardValue } from '../interfaces';
import { useSocket } from '../hooks';

export const App = () => {
  const { sendAction } = useSocket();
  
  return (
    <div className="app">
      <CardSender shape={Shape.SPADES} value={CardValue.K} onClick={sendAction} />
      <CardSender shape={Shape.HEARTS} value={CardValue.NINE} onClick={sendAction} />
      <CardSender shape={Shape.DIAMONDS} value={CardValue.A} onClick={sendAction} />
      <CardSender shape={Shape.CLUBS} value={CardValue.SEVEN} onClick={sendAction} />
      <CardSender shape={Shape.HEARTS} value={CardValue.FOUR} onClick={sendAction} />
    </div>
  );
};
