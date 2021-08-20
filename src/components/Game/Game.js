import React from 'react';
import style from './Game.module.css';
import Board from '../Board';

function Game() {
  return (
    <div className={style.wraper}>
      <Board />
    </div>
  );
}

export default Game;
