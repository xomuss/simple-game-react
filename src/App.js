import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    squares: Array(9).fill(null),
    count: 0,
  };

  winnerLine = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
  ];

  isWinner = () => {
    let s = this.state.count % 2 === 0 ? 'X' : 'O';

    console.log(s);
  };

  handleClick = e => {
    let data = e.target.getAttribute('data');
    let currenSquares = this.state.squares;

    if (currenSquares[data] === null) {
      currenSquares[data] = this.state.count % 2 === 0 ? 'X' : 'O';

      this.setState({
        squares: currenSquares,
        count: this.state.count + 1,
      });
    } else {
      alert('поле занято!');
    }

    this.isWinner();
  };

  render() {
    return (
      <div className="tic-tac-toe">
        <div className="grid" onClick={this.handleClick} data="0">
          {this.state.squares[0]}
        </div>
        <div className="grid" onClick={this.handleClick} data="1">
          {this.state.squares[1]}
        </div>
        <div className="grid" onClick={this.handleClick} data="2">
          {this.state.squares[2]}
        </div>
        <div className="grid" onClick={this.handleClick} data="3">
          {this.state.squares[3]}
        </div>
        <div className="grid" onClick={this.handleClick} data="4">
          {this.state.squares[4]}
        </div>
        <div className="grid" onClick={this.handleClick} data="5">
          {this.state.squares[5]}
        </div>
        <div className="grid" onClick={this.handleClick} data="6">
          {this.state.squares[6]}
        </div>
        <div className="grid" onClick={this.handleClick} data="7">
          {this.state.squares[7]}
        </div>
        <div className="grid" onClick={this.handleClick} data="8">
          {this.state.squares[8]}
        </div>
      </div>
    );
  }
}

export default App;
