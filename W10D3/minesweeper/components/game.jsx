import React from 'react';
import * as Minesweeper from '../minesweeper';
import Board from './board';

class Game extends React.Component {
    constructor(props) {
        super(props)
        this.state = {board: new Minesweeper.Board(9, 10)}
        this.updateGame = this.updateGame.bind(this)
    }
    
    render() {
        // debugger
        const won = this.state.board.won()
        const lost = this.state.board.lost()

        if(won === true|| lost === true){
            return(
                <div>
                <Board board={this.state.board} updateGame={this.updateGame}/>
                <h1 class="gameover"> YOU LOST </h1>
                </div>
            )
        }
        return(
            <Board board={this.state.board} updateGame={this.updateGame}/>
        )
    }

    updateGame(tile) {
        tile.state.tile.explore();
        this.setState({ board: this.state.board })
    }

}


export default Game;