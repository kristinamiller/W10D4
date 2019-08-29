import React from 'react';
import * as Minesweeper from '../minesweeper';


class Tile extends React.Component {
  constructor(props) {
    super(props); 
    this.state = { }
    this.handleClick = this.handleClick.bind(this);
  }  

  explored(){
    this.props.explore()
  }

  handleClick(e) { 
    
    console.log(e.altKey);
    
    this.props.updateGame(this.props.tile, e.altKey);

  }


  render(){
    let status;
    let klass;
    if (this.props.tile.explored) {
      if (this.props.tile.flagged) {
        status = "🚩";
        klass = "flag";
      } else if
        (this.props.tile.bombed) {
        status = "💣";
        klass = "bomb";
      } else {
        status = this.props.tile.adjacentBombCount();
        klass = "number";
      }
    } else {
      klass = "hidden";
    }
   

    return (
      // <div className="tile">
      <div className="tile" onClick={this.handleClick}> {status}</div>
    //  </div>
    )
  }

}
export default Tile;
