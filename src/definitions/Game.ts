import { Cell, Board, Theme } from './interfaces';
import { defaultTheme } from './constants';

class Game {
  board: Board;
  theme: Theme;
  constructor(rows: number = 25, columns: number = 75, theme: Theme = defaultTheme) {
    this.theme = theme;
    this.board = this.createBoard(rows, columns);
  }

  createBoard(rows: number, columns: number): Board {
    const newCell: Cell = { alive: false, color: this.theme.dead };
    const grid = Array(rows).fill(0).map(row => Array(columns).fill({ ...newCell }));
    return { rows, columns, grid };
  }

  getCell(row: number, column: number): Cell {
    return this.board.grid[row][column];
  }

  clearBoard() {
    let nextBoard = this.createBoard(this.board.rows, this.board.columns);
    this.board = nextBoard;
  }

  // Set a new this.board instead of mutating the existing board
  toggleCell(row: number, column: number): Cell {
    const newBoard: Board = {...this.board};
    const newCell: Cell = {
      // toggle the alive state
      alive: !this.board.grid[row][column].alive,
      // if the current cell is alive, the new cell's color will be dead, and vice-versa
      color: this.board.grid[row][column].alive ? this.theme.dead : this.theme.new,
    };
    newBoard.grid[row][column] = newCell;
    this.board = newBoard;
    return newCell;
  }

  neighborIndices(value: number, edgeValue: number): number[] {
    return [
      // if the row/column is 0 (upper/leftmost board edge), then the starting point is 0
      // otherwise, neighbors start at the left column/upper row
      value ? value - 1 : 0,
      // if the row/column is the max (bottom/rightmost board edge), then starting point is the edge
      // otherwise, neighbors end at the right column/lower row
      value < edgeValue - 1 ? value + 1 : edgeValue - 1,
    ];
  }

  liveNeighbors(row: number, column: number): number {
    let liveCount = 0;
    
    // const [startColumn, endColumn] = this.neighborIndices(column, this.board.columns);
    // const [startRow, endRow] = this.neighborIndices(row, this.board.rows);
    // move clockwise around the cell, starting at upper left corner
    for (let rIdx = Math.max(row - 1, 0); rIdx <= Math.min(row + 1, this.board.rows - 1); rIdx += 1) {
      for (let cIdx = Math.max(column - 1, 0); cIdx <= Math.min(column + 1, this.board.columns - 1); cIdx += 1) {
        if (rIdx === row && cIdx === column) {
          continue;
        }
        liveCount += this.getCell(rIdx, cIdx).alive ? 1 : 0;
      }
    }
    return liveCount;
  }

  cycle(): void {
    let nextBoard = this.createBoard(this.board.rows, this.board.columns);
    
    // loop through all the rows and columns of the board
    this.board.grid.forEach((r, rowIdx) => {
      this.board.grid[rowIdx].forEach((c, colIdx) => {
        // find the liveNeighbors for the cell
        const cell: Cell = this.getCell(rowIdx, colIdx);
        const livingNeighbors = this.liveNeighbors(rowIdx, colIdx);
        // And here are the famous rules of the game of life:
        // 1) Any LIVE cell with FEWER than TWO live neighbours DIES, as if by underpopulation.
        if (cell.alive && livingNeighbors < 2) {
          nextBoard.grid[rowIdx][colIdx] = {
            alive: false,
            color: this.theme.dead,
          };
        }
        // 2) Any LIVE cell with TWO or THREE live neighbours LIVES on to the next generation.
        else if (cell.alive && ( livingNeighbors === 2 || livingNeighbors === 3 )) {
          nextBoard.grid[rowIdx][colIdx] = {
            alive: true,
            color: this.theme.aged,
          }
        }
        // 3) Any LIVE cell with MORE than THREE live neighbours DIES
        else if (cell.alive && livingNeighbors > 3) {
          nextBoard.grid[rowIdx][colIdx] = {
            alive: false,
            color: this.theme.dead
          }
        }
        // 4) Any DEAD cell with EXACTLY THREE live neighbours will come to LIFE.
        else if (!cell.alive && livingNeighbors === 3) {
          nextBoard.grid[rowIdx][colIdx] = {
            alive: true,
            color: this.theme.new,
          }
        } else {
          nextBoard.grid[rowIdx][colIdx] = {...cell};
        }
      });
    });
    this.board = nextBoard;
  }

  randomize() {
    let nextBoard = {...this.board};
    nextBoard.grid.forEach((r, rIdx) => {
      nextBoard.grid[rIdx].forEach((c, cIdx) => {
          nextBoard.grid[rIdx][cIdx] = 
          Math.round(Math.random()) ?
            {
              alive: true,
              color: this.theme.new,
            }
          :
            {
              alive: false,
              color: this.theme.dead,
            }
      });
    });
    this.board = nextBoard;
  }

  prettyPrint() {
    this.board.grid.forEach((r, rIdx) => {
      let rowStr = '';
      this.board.grid[rIdx].forEach((c, cIdx) => {
        rowStr += this.getCell(rIdx, cIdx).alive ? ' X ' : ' 0 ';
      });
      console.log(rowStr);
    });
  }
}

export default Game;
