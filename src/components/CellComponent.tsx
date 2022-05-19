import React from "react";
import {Cell} from "../modules/Cell";

interface CellProps {
    cell: Cell;

}


export const CellComponent = React.memo(({cell}: CellProps) => {
    return (
        <div className={`cell ${cell.color}`}>
            {cell.figure?.logo && <img className={'figure'} src={cell.figure.logo} alt={cell.figure.name}/>}
        </div>
    )
})
