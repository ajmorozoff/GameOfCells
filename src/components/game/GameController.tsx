import React, { useState } from 'react';

import { Game } from '../../definitions';
import PageGrid from './PageGrid';
import './Game.css';

const GameController = () => {
    //TODO: add a board theme (light or dark) to pass in here
    const [game, setGame] = useState( new Game(50, 50) );
    const [gameBoard, setGameBoard] = useState(game.board.grid);
    const [speed, setSpeed] = useState(500);
    const [timerInterval, setTimer] = useState(0);
    const [playPause, setPlayPause] = useState('Play');


    const updateBoard = () => {
        const nextBoard = {...game.board.grid}
        setGameBoard(nextBoard);
    }

    const handleCellClick = (row: number, column: number) => {
        game.toggleCell(row, column);
        updateBoard();
    }

    const togglePlay = () => {
        //if playing, stop
        if (timerInterval) {
            clearInterval(timerInterval);
            setTimer(0);
            setPlayPause('Play');
        }
        //if not playing, set new interval
        else {
            const newTimer = setInterval(handleStep, speed);
            setTimer(newTimer);
            setPlayPause('Pause');
        }
    }

    const handleStep = () => {
        game.cycle();
        updateBoard();
    }

    return (
        <div>
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
            <div id='controls'>
                <button
                    onClick={handleStep}
                >
                    Step
                </button>
                <button
                    onClick={togglePlay}
                >
                    {playPause}
                </button>
            </div>
        </div>
    );
};

export default GameController;