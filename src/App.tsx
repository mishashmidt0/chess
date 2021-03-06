import React, {useEffect, useState} from 'react';
import './App.css';
import {BoardComponent} from "./components/BoardComponent";
import {Board} from "./modules/Board";
import {Player} from "./modules/Player";
import {Colors} from "./modules/Colors";
import LostFigures from "./components/LostFigures";
import Timer from "./components/Timer";

function App() {
    const [board, setBoard] = useState(new Board())
    const [whitePlayer, setWhitePlayer] = useState(new Player(Colors.WHITE))
    const [blackPlayer, setBlackPlayer] = useState(new Player(Colors.BLACK))
    const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null)


    useEffect(() => {
        restart()
        setCurrentPlayer(whitePlayer)
    }, [])

    function swapPlayer() {
        setCurrentPlayer(currentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer)
    }

    function restart() {
        const newBoard = new Board();
        newBoard.initCells()
        newBoard.addFigure()
        setBoard(newBoard)
    }

    return (
        <div className="App">
            <Timer restart={restart} currentPlayer={currentPlayer}/>
            <BoardComponent
                board={board}
                setBoard={setBoard}
                currentPlayer={currentPlayer}
                swapPlayer={swapPlayer}
            />
            <div>
                <LostFigures figures={board.lostBlackFigures} title={'Black figures'}/>
                <LostFigures figures={board.lostWhiteFigures} title={'White figures'}/>
            </div>
        </div>
    );
}

export default App;
