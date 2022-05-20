import React from "react";
import {Cell} from "../modules/Cell";

interface CellProps {
    cell: Cell;
    selected: boolean;
    click: (cell: Cell) => void
}


export const CellComponent = React.memo(({cell, selected, click}: CellProps) => {
    return (
        <div className={`cell ${cell.color} ${selected ? 'selected' : ''}`}
             onClick={() => click(cell)}
             style={{background: cell.available && cell.figure ? 'green' : ''}}> {/*В случае если фигура может аттаковать*/}

            {cell.available && !cell.figure && <div className={'available'}>{null}</div>} {/*Доступные ходы*/}

            {cell.figure?.logo && <img className={'figure'} src={cell.figure.logo} alt={cell.figure.name}/>}
        </div>
    )
})
