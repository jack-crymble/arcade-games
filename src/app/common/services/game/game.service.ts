import { Injectable } from '@angular/core';
import { Square, SquareType } from '../../common.data';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  generateSquareBoard(width: number): Square[][] {
    let board = [...Array(width)].map(() => Array(width).fill({type: SquareType.EMPTY}));
    board = JSON.parse(JSON.stringify(board));
    return board;
  }
}
