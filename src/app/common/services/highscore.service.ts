import { Injectable } from '@angular/core';
import { Game, Highscore } from '../common.data';

@Injectable({
  providedIn: 'root'
})
export class HighscoreService {

  save(game: Game, score: number): void {
    let highscores: Highscore[] = this.getHighscores(game);
    highscores.push({score: score});
    localStorage.setItem(this.buildID(game), JSON.stringify(highscores));
  }

  getHighscores(game: Game): Highscore[] {
    const highscores: Highscore[] = JSON.parse(localStorage.getItem(this.buildID(game))) || []
    return highscores.sort((a, b) => b.score - a.score).slice(0, 5);
  }

  private buildID(game: Game): string {
    return `${game}_v1`
  }
}
