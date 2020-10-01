import React from 'react'
import Tile from './tile'

class Board extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
    //    debugger 
       return (
           <div class="grid">
                {this.props.board.grid.map((rowTiles, rowIdx) => {
                   return (<div key={rowIdx} class={rowIdx}>
                       {rowTiles.map((colTiles, colIdx) => {
                        //    debugger
                           return (
                               <Tile
                                    board = {this.props.board} 
                                    row = {rowIdx}
                                    col = {colIdx}
                                    rowTile = {rowTiles}
                                    colTile = {colTiles}
                                    updateGame = {this.props.updateGame}
                                    key = {colIdx}
                               />
                           )
                       }) }
                   </div>)
                } )
                }
           </div>
       )
    }
}
{/* {tileRows.map((tileCols, colIdx) => {
 // return (<Tile 
 //     key={colIdx}
 //     tileCols={tileCols} 
 //     updateGame={this.props.updateGame}
 // />)} */}




export default Board;