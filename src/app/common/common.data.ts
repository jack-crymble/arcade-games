export enum SquareType {
  EMPTY = 'empty',
  HEAD = 'head',
  BODY = 'body',
  TAIL = 'tail',
  FOOD = 'food'
};

export enum Game {
  SNAKE = 'snake'
};

export enum Direction {
  NORTH = 'north',
  EAST = 'east',
  SOUTH = 'south',
  WEST = 'west'
};

export interface Square {
  type: SquareType;
};

export interface Position {
  x: number;
  y: number;
};

export interface Highscore {
  score: number;
};
