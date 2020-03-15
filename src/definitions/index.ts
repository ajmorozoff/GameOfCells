import Game from './Game';
import chalk from 'chalk';
const gameOfLife = new Game(3, 3);
gameOfLife.randomize();
gameOfLife.prettyPrint();
gameOfLife.cycle();
gameOfLife.prettyPrint();
