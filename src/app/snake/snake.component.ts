import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { fromEvent } from 'rxjs';
import { filter, tap } from 'rxjs/operators';
import { Direction, Game, Position, Square, SquareType } from '../common/common.data';
import { DirectionService } from '../common/services/direction.service';
import { GameService } from '../common/services/game.service';
import { GameoverDialogComponent } from '../gameover-dialog/gameover-dialog.component';

@Component({
  selector: 'app-snake',
  templateUrl: './snake.component.html',
  styleUrls: ['./snake.component.scss']
})
export class SnakeComponent implements OnInit, OnDestroy {
  boardSize = 11;
  board: Square[][];
  headPosition: Position;
  bodyPositions: Position[] = [];
  snakeLength = 1;
  isPlaying: boolean;
  isFoodOnBoard: boolean;
  foodPosition: Position;

  spaceToStart$ = fromEvent(document, 'keydown').pipe(
    filter((event: KeyboardEvent) => event.code === 'Space'),
    filter(() => !this.isPlaying),
    tap(() => this.startGame())
  );

  constructor(
    private gameService: GameService,
    private directionService: DirectionService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.board = this.gameService.generateSquareBoard(this.boardSize);
    this.directionService.init();
  }

  ngOnDestroy(): void {
    this.directionService.destroy();
  }

  startGame(): void {
    this.board = this.gameService.generateSquareBoard(this.boardSize);
    this.headPosition = {x: Math.floor(this.boardSize / 2), y: Math.floor(this.boardSize / 2) };
    this.board[this.headPosition.x][this.headPosition.y].type = SquareType.HEAD;
    this.snakeLength = 1;
    this.isPlaying = true;
    this.addFoodToBoard();
    this.gameLoop();
  }

  endGame(): void {
    this.isPlaying = false;
    this.isFoodOnBoard = false;
    this.bodyPositions = [];
    this.directionService.resetDirection();
    this.gameOverDialog();
  }

  gameOverDialog(): void {
    this.dialog.open(GameoverDialogComponent, {
      data: {
        score: this.snakeLength - 1,
        game: Game.SNAKE
      }
    });
  }

  async gameLoop(): Promise<void> {
    while (this.isPlaying) {
      this.directionService.update();
      const previousHeadPosition = JSON.parse(JSON.stringify(this.headPosition));

      if (this.directionService.currentDirection === Direction.NORTH) {
        this.headPosition.x -= 1;
      } else if (this.directionService.currentDirection === Direction.EAST) {
        this.headPosition.y += 1;
      } else if (this.directionService.currentDirection === Direction.SOUTH) {
        this.headPosition.x += 1;
      } else if (this.directionService.currentDirection === Direction.WEST) {
        this.headPosition.y -= 1;
      }

      if (this.hasSnakeHitBoundary() || this.hasSnakeEatenSelf()) {
        this.endGame();
        continue;
      }

      if (this.isFoodOnBoard) {
        if (this.headPosition.x === this.foodPosition.x && this.headPosition.y === this.foodPosition.y) {
          this.eat();
        }
      }

      this.updateSquare(previousHeadPosition, SquareType.EMPTY);
      this.updateSnakeBody(previousHeadPosition);
      this.updateSquare(this.headPosition, SquareType.HEAD);

      await this.sleep(300);
    }
  }

  private addFoodToBoard(): void {
    if (this.isFoodOnBoard) {
      return;
    }
    while (!this.isFoodOnBoard) {
      this.foodPosition = {
        x: Math.floor(Math.random() * this.boardSize),
        y: Math.floor(Math.random() * this.boardSize)
      };
      if (this.board[this.foodPosition.x][this.foodPosition.y].type === SquareType.EMPTY) {
        this.isFoodOnBoard = true;
      }
    }
    this.updateSquare(this.foodPosition, SquareType.FOOD);
  }

  private hasSnakeHitBoundary(): boolean {
    return this.headPosition.x < 0
      || this.headPosition.y < 0
      || this.headPosition.x > this.boardSize - 1
      || this.headPosition.y > this.boardSize - 1;
  }

  private hasSnakeEatenSelf(): boolean {
    const square = this.board[this.headPosition.x][this.headPosition.y];
    return square.type === SquareType.BODY || square.type === SquareType.TAIL;
  }

  private eat(): void {
    this.snakeLength += 1;
    this.isFoodOnBoard = false;
    this.updateSquare(this.foodPosition, SquareType.EMPTY);
    this.bodyPositions.push({x: this.foodPosition.x, y: this.foodPosition.y});
    this.foodPosition.x = -1;
    this.foodPosition.y = -1;
    this.addFoodToBoard();
  }

  private updateSnakeBody(previousHeadPosition: Position): void {
    if (this.bodyPositions.length > 0) {
      this.removeTail();
      this.bodyPositions = [{x: previousHeadPosition.x, y: previousHeadPosition.y}, ...this.bodyPositions];

      this.bodyPositions.forEach(bodyPart => {
        this.board[bodyPart.x][bodyPart.y].type = SquareType.BODY;
      });
    }
  }

  private removeTail(): void {
    const tail = this.bodyPositions[this.bodyPositions.length - 1];
    this.board[tail.x][tail.y].type = SquareType.EMPTY;
    this.bodyPositions.splice(this.snakeLength - 2, 1);
  }

  private updateSquare(position: Position, newType: SquareType): void {
    this.board[position.x][position.y].type = newType;
  }

  private sleep(ms: number = 1000): Promise<any> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

}
