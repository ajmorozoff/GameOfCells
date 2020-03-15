export interface Cell {
  alive: boolean;
  color: string;
}

export interface Board {
  rows: number;
  columns: number;
  grid: Cell[][];
}

export interface Theme {
  new: string;
  aged: string;
  dead: string;
}

export interface Game {
  board: Board;
  theme: Theme;
}
