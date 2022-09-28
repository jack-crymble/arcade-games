import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  boardSizeChange$: EventEmitter<number> = new EventEmitter<number>();
  private _boardSize: number = 11;

  get boardSize(): number {
    return this._boardSize;
  }

  updateBoardSize(boardSize: number): void {
    this._boardSize = boardSize;
    this.boardSizeChange$.emit(this._boardSize);
  }
}
