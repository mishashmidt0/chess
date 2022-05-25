import React, {FC} from 'react';
import {Figure} from "../modules/figures/Figure";

interface LostFiguresProps {
    title: string;
    figures: Figure[]
}

const LostFigures: FC<LostFiguresProps> = ({title, figures}) => {
    return (
        <div className={'lost'}>
            <h3>{title}</h3>
            <div className={'arrLost'}>
                {figures.map((figure) => {
                    return (<div key={figure.id} className={'lostFigure'}>

                        {figure.logo && <img className={'lostFigureImg'} src={figure.logo} alt={figure.name}/>} {figure.name}
                    </div>)
                })}
            </div>
        </div>
    );
};

export default LostFigures;
