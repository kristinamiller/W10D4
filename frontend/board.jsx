import React from 'react';
import Tile from './tile';
import * as Minesweeper from '../minesweeper';


class Board extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {

    return (
      
      <div className="grid">
        {this.props.board.grid.map((row, i) => {
          return <div key={i}>
            {row.map((tile, j) => {
              return <Tile key={[i, j]} tile={tile} updateGame={this.props.updateGame} id={[i, j]}/> 
            })}
          </div>
        })}

      </div>
    )
  }

}

export default Board;