import React, { useState } from 'react';

import { Game } from '../../definitions';
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

    const handleRandom = () => {
        game.randomize();
        updateBoard();
    }

    const handleClear = () => {
        game.clearBoard();
        updateBoard();
    }

    const handleSpeedUp = () => {
        if (speed > 100) {
            setSpeed(speed - 100);
        }
        clearInterval(timerInterval);
        const newTimer = setInterval(handleStep, speed);
        setTimer(newTimer);
    }

    const handleSpeedDown = () => {
        if (speed < 1000) {
            setSpeed(speed + 100);
        }
        clearInterval(timerInterval);
        const newTimer = setInterval(handleStep, speed);
        setTimer(newTimer);
    }

    return (
        <div className='container'>
            <table className='game'>
                <tbody>
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
            <div className='controls'>
                <button
                    onClick={handleStep}
                    className='controlButton'
                    aria-label='step'
                >
                    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M42.6923 75V25L75 49.7475L42.6923 75Z" fill="#FFDF6C"/>
                        <rect x="25" y="25" width="11.5385" height="50" fill="#FFDF6C"/>
                    </svg>
                </button>
                <button
                    onClick={togglePlay}
                    className='controlButton'
                    aria-label={playPause}
                >
                    {
                        playPause === 'Play'
                        ?   
                        <svg width="42" height="49" viewBox="0 0 42 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 49V0L42 24.2525L0 49Z" fill="#FFDF6C"/>
                        </svg>
                        :
                        <svg width="42" height="49" viewBox="0 0 42 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="15" height="49" fill="#FFDF6C"/>
                            <rect x="27" width="15" height="49" fill="#FFDF6C"/>
                        </svg>
                    }
                </button>
                <button
                    onClick={handleRandom}
                    className='controlButton'
                    aria-label='randomize'
                >
                    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M63 45V26L75 35.404L63 45Z" fill="#FFDF6C"/>
                        <path d="M63 75V56L75 65.404L63 75Z" fill="#FFDF6C"/>
                        <path d="M25 35H36L52 65H63" stroke="#FFDF6C" strokeWidth="4"/>
                        <path d="M25 65H36L52 35H63" stroke="#FFDF6C" strokeWidth="4"/>
                    </svg>
                </button>
                <button
                    onClick={handleClear}
                    className='controlButton'
                    aria-label='clear board'
                >
                    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="25" y="25" width="50" height="50" fill="#FFDF6C"/>
                    </svg>
                </button>
                <button
                    disabled={speed <= 100}
                    className='controlButton'
                    onClick={handleSpeedUp}
                >
                    <svg width="42" height="49" viewBox="0 0 42 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 49V0L21 24.2525L0 49Z" fill="#FFDF6C"/>
                        <path d="M21 49V0L42 24.2525L21 49Z" fill="#FFDF6C"/>
                    </svg>
                </button>
                <button
                    disabled={speed >= 1000}
                    className='controlButton'
                    onClick={handleSpeedDown}
                >
                    <svg width="42" height="49" viewBox="0 0 42 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M42 49V0L21 24.2525L42 49Z" fill="#FFDF6C"/>
                        <path d="M21 49V0L0 24.2525L21 49Z" fill="#FFDF6C"/>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default GameController;