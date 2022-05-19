import React from "react";
import {Board} from "../modules/Board";
import {CellComponent} from "./CellComponent";

interface BoardProps {
    board: Board;
    setBoard: (board: Board) => void
}

export const BoardComponent = React.memo(({board, setBoard}: BoardProps) => {
    console.log(board.cells)
    return (
        <div className={'board'}>
            {board.cells.map((row, index) => <React.Fragment key={index}>
                {row.map((cell) => <CellComponent key={cell.id} cell={cell}/>)}
            </React.Fragment>)}
        </div>
    )
})
