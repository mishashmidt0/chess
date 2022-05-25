import React, {useEffect, useState} from "react";
import {Board} from "../modules/Board";
import {CellComponent} from "./CellComponent";
import {Cell} from "../modules/Cell";
import {Player} from "../modules/Player";

interface BoardProps {
    board: Board;
    setBoard: (board: Board) => void
    currentPlayer: Player | null
    swapPlayer: () => void
}

export const BoardComponent = React.memo(({board, setBoard, currentPlayer, swapPlayer}: BoardProps) => {
    const [selectedCell, setSelectedCell] = useState<Cell | null>(null);

    function click(cell: Cell) {

        if (selectedCell && selectedCell !== cell && selectedCell.figure?.canMove(cell)) {
            selectedCell.moveFigure(cell);
            swapPlayer()
            setSelectedCell(null)

        } else {
            if (cell.figure?.color === currentPlayer?.color) {
                setSelectedCell(cell)
            }

        }
    }

    useEffect(() => {
        highlightCells()
    }, [selectedCell])

    function highlightCells() {
        board.highlightCells(selectedCell)
        updateBoard()
    }

    function updateBoard() {
        const newBoard = board.getCopyBoard()
        setBoard(newBoard)
    }


    return (
        <div>
            <h3>{currentPlayer?.color === 'white' ? 'Ход белых' : 'Ход черных'}</h3>

            <div className={'board'}>
                {board.cells.map((row, index) => <React.Fragment key={index}>
                    {row.map((cell) => <CellComponent
                        click={click}
                        key={cell.id}
                        cell={cell}
                        selected={cell.x === selectedCell?.x && cell.y === selectedCell?.y}/>)}
                </React.Fragment>)}
            </div>
        </div>

    )
})
