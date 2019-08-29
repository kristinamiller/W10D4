import React from 'react';
import * as Minesweeper from '../minesweeper';
import Board from './board.jsx';

class Game extends React.Component {
  constructor (props) {
    super (props); 
    this.state = { board: new Minesweeper.Board(10, 13) }; // may or may not change after finishing board comp
    this.updateGame = this.updateGame.bind(this);
  }

  updateGame(tile, altClick) {
    if (altClick === true) {
      tile.toggleFlag();
    } else {
      tile.explore();
    }
    this.setState({ board: this.state.board })
  }

  result() {
    let result;
    if (this.state.board.lost()) {
      result = "lost";
    } 
    if (this.state.board.won()) {
      result = "won";
    }
    return result;
  }

  render() {
 
    return (
      <div>
        <Board board={this.state.board} updateGame={this.updateGame}/> 
        <h1>You {this.result()}!!</h1>
      </div>
    )
  }

}
export default Game;