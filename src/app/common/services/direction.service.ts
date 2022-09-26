import { Injectable } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { filter, tap } from 'rxjs/operators';
import { Direction } from '../common.data';

@Injectable({
  providedIn: 'root'
})
export class DirectionService {

  private VALID_KEY_CODES = ['ArrowUp', 'ArrowRight', 'ArrowDown', 'ArrowLeft'];
  private _direction!: Direction;
  private _pendingDirection!: Direction;
  private keyDownSubscription?: Subscription;

  get currentDirection(): Direction {
    return this._direction;
  }

  keyDown$ = fromEvent<KeyboardEvent>(document, 'keydown').pipe(
    filter((event: KeyboardEvent) => this.VALID_KEY_CODES.indexOf(event.code) > -1),
    tap(event => {
      if (event.code === 'ArrowUp' && (this._direction === Direction.EAST || this._direction === Direction.WEST)) {
        this._pendingDirection = Direction.NORTH;
      } else if (event.code === 'ArrowRight' && (this._direction === Direction.NORTH || this._direction === Direction.SOUTH)) {
        this._pendingDirection = Direction.EAST;
      } else if (event.code === 'ArrowDown' && (this._direction === Direction.EAST || this._direction === Direction.WEST)) {
        this._pendingDirection = Direction.SOUTH;
      } else if (event.code === 'ArrowLeft' && (this._direction === Direction.NORTH || this._direction === Direction.SOUTH)) {
        this._pendingDirection = Direction.WEST;
      }
    })
  );

  init(): void {
    this.resetDirection();
    this.keyDownSubscription = this.keyDown$.subscribe();
  }

  update(): void {
    this._direction = this._pendingDirection;
  }

  resetDirection(): void {
    this._direction = this._pendingDirection = Direction.EAST;
  }

  destroy(): void {
    this.keyDownSubscription?.unsubscribe();
  }

}
