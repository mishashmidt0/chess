import React from "react";
import {Cell} from "../modules/Cell";

interface CellProps {
    cell: Cell;

}


export const CellComponent = React.memo(({cell}: CellProps) => {
    return (
        <div className={`cell ${cell.color}`}>

        </div>
    )
})
