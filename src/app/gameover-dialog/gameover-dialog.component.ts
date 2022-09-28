import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Game, Highscore } from "../common/common.data";
import { HighscoreService } from "../common/services/highscore/highscore.service";

@Component({
  selector: 'app-gameover-dialog',
  templateUrl: 'gameover-dialog.component.html',
  styleUrls: ['./gameover-dialog.component.scss']
})
export class GameoverDialogComponent {

  highscores: Highscore[] = [];

  constructor(
    public dialogRef: MatDialogRef<GameoverDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {score: number, game: Game},
    public highscoreService: HighscoreService
  ) {
    this.highscores = highscoreService.getHighscores(data.game);
  }

  save(): void {
    this.highscoreService.save(this.data.game, this.data.score);
    this.close();
  }

  close(): void {
    this.dialogRef.close();
  }
}
