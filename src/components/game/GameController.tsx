import React, { useState, useEffect } from 'react';

import { Game } from '../../definitions';
import PageGrid from './PageGrid';
import './Game.css';

const GameController = () => {
    //TODO: add a board theme (light or dark) to pass in here
    const gameOfLife = new Game(10, 10);
    const [cellBoard, setCellGrid] = useState(gameOfLife.board);
    const [pageSpeed, updateSpeed] = useState(500);

    return (
        <div id="game">
            <PageGrid grid={cellBoard.grid} />
        </div>
    );
};

export default GameController;