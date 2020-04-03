import React, { useState } from 'react';

import { Game } from '../../definitions';
import PageGrid from './PageGrid';
import './Game.css';

const GameController = () => {
    //TODO: add a board theme (light or dark) to pass in here
    const [game, setGame] = useState( new Game(50, 50) );
    const [gameBoard, setGameBoard] = useState(game.board.grid);
    const [pageSpeed, updateSpeed] = useState(500);

    const handleCellClick = (row: number, column: number) => {
        console.log('clicked');
        game.toggleCell(row, column);
        const nextBoard = {...game.board.grid};
        setGameBoard(nextBoard);
    }

    return (
        <table>
            <tbody id='grid-body'>
                {
                    game.board.grid.map((row, rIdx) => {
                        return (
                            <tr key={rIdx}>
                                {
                                    row.map((col, cIdx) => {
                                        const cell = game.getCell(rIdx, cIdx);
                                        return (
                                            <td
                                                key={cIdx}
                                                className='cell'
                                                style={{ backgroundColor: `${cell.color}`}}
                                                onClick={() => handleCellClick(rIdx, cIdx)}
                                            />
                                        )
                                    })
                                }
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    );
};

export default GameController;