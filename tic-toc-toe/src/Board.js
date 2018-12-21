import React, { Component, Fragment } from 'react';
import Square from './Square';

class Board extends Component{
  constructor(){
    super();
    this.state = {
      player: "Player: ",
      squares: Array(9).fill(null),
      xIsNext: true, 
      history: []
    }
    this.previousMove = this.previousMove.bind(this);
  }

  renderSquare(i) {
    return <Square value={this.state.squares[i]} onClick = {()=> this.handleClick(i)}  />;
  }

  handleClick(i){
    let squares = this.state.squares.slice();
    if(this.calculateWinner(squares) || squares[i]) return;
    this.state.history.push(this.state.squares);
    squares[i] = (this.state.xIsNext) ? "X" : "O";
    this.setState({squares, xIsNext: !this.state.xIsNext});
  }
  calculateWinner(square){
    let lines = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6], 
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ]
    for(let i = 0; i < lines.length; i++){
      let [a,b,c] = lines[i];
      if(square[a] && square[a] === square[b] && square[a] === square[c]) return square[a];
    }
    return null;
  }

  previousMove(){
    if(!this.state.history.length) return;
    this.setState({
      squares: this.state.history.pop() || this.state.squares, 
      xIsNext: !this.state.xIsNext
    })
  }


  render() {
    let winner = this.calculateWinner(this.state.squares);
    let status;
    if(winner){
      alert("Winner is : " + winner);
      this.setState({
        player: "Player: ",
        squares: Array(9).fill(null),
        xIsNext: true, 
        history: []
      });
    } else {
      status = 'Next Player : ' + (this.state.xIsNext ? "X" : "O");
    }
    return (
      <Fragment>
        <h1>{status}</h1>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
        <button className="previous" onClick = {this.previousMove}>History</button>
      </Fragment>
    ) 
  }
}

export default Board;
