import React, {useEffect, useState} from "react";
import {Board} from "../modules/Board";
import {CellComponent} from "./CellComponent";
import {Cell} from "../modules/Cell";

interface BoardProps {
    board: Board;
    setBoard: (board: Board) => void
}

export const BoardComponent = React.memo(({board, setBoard}: BoardProps) => {
    const [selectedCell, setSelectedCell] = useState<Cell | null>(null);

    function click(cell: Cell) {
        if (!selectedCell) return setSelectedCell(cell)
        if (selectedCell && selectedCell !== cell && selectedCell.figure?.canMove(cell)) {
            selectedCell.moveFigure(cell);
            setSelectedCell(null)

        } else {
            return setSelectedCell(null)
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
        <div className={'board'}>
            {board.cells.map((row, index) => <React.Fragment key={index}>
                {row.map((cell) => <CellComponent
                    click={click}
                    key={cell.id}
                    cell={cell}
                    selected={cell.x === selectedCell?.x && cell.y === selectedCell?.y}/>)}
            </React.Fragment>)}
        </div>
    )
})
