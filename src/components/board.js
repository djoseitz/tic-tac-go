import React, { Component } from 'react'
import {Square} from './square'
import {calculateWinner} from './game'

export class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
    }
  }
  
  handleClick(i) {
    const squares = this.state.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
  }
  
  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)} 
      />
    );
  }

  render() {
    const winner = calculateWinner(this.state.squares);
    let victory;
    if (winner) {
      victory = 'Winner: ' + winner;
    }
    let status;
    if (winner) {
      status = 'Game Over!';
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O'); 
    }

    return (
      <div>
        <div className="title">Tic Tac Toe</div>
        <div className="status">{status}</div>
        <div className="game-board">
          <div className="board-row-1">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row-2">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row-3">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
        <div className="victory">{victory}</div>
      </div>
    );
  }
}
