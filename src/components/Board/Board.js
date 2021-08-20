import React from 'react';
import Cell from '../Cell';
import style from './Board.module.css';

function Board() {
  return (
    <div className={style.board}>
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
    </div>
  );
}

export default Board;
