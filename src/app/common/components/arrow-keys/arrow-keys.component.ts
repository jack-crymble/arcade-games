import { Component, EventEmitter } from '@angular/core';
import { DirectionService } from '../../services/direction/direction.service';

@Component({
  selector: 'app-arrow-keys',
  templateUrl: './arrow-keys.component.html',
  styleUrls: ['./arrow-keys.component.scss']
})
export class ArrowKeysComponent {

  constructor(
    private directionService: DirectionService
  ) {}

  buttonPressed(direction: string): void {
    switch(direction) {
      case 'up':
        this.directionService.up();
        break;
      case 'left':
        this.directionService.left();
        break;
      case 'down':
        this.directionService.down();
        break;
      case 'right':
        this.directionService.right();
        break;
      default:
        console.error(`Invalid direction ${direction}`)
    }
  }

}
