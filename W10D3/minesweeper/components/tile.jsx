import React from 'react'
import * as Minesweeper from '../minesweeper.js'

class Tile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tile: this.props.board.grid[this.props.row][this.props.col]
        }

        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        if (this.state.tile.explored 
            && this.state.tile.adjacentBombCount() >= 1
            && !this.state.tile.bombed) {
            return (<div class="revealed" >
                {this.state.tile.adjacentBombCount()} </div>)
        } else if (this.state.tile.flagged) {
            return (<div class="revealed" >{"🏴‍☠️️"}</div>)
        } else if (this.state.tile.bombed && this.state.tile.explored){
            return (<div class="revealed-bomb" >{"💣"}</div>)
        } else if (!this.state.tile.explored) {
            return (<div class="unrevealed" onClick={this.handleClick}>{""}</div>)
        } else {
            return (<div class="revealed">{""}</div>)
        }
    }

    handleClick(e){
        e.preventDefault();
        this.props.updateGame(this);
        // if(!this.state.tile.explored){
        //     this.setState(this.state.tile.explore())
        //     this.render()
        // }
        console.log(this.state.tile);


    }
    // onclick = { handleClick() }
}

// if (this.state.tile.explored && this.state.tile.adjacentBombCount() '>=' 1) {
//     [this.props.row, this.props.col]
// } 

// ⬜




export default Tile;