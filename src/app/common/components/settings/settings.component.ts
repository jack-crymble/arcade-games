import { Component } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';
import { SettingsService } from '../../services/settings/settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {

  constructor(
    public settingsService: SettingsService
  ) {}

  boardSizeSliderChange(event: MatSliderChange): void {
    if (!!event.value) {
      this.settingsService.updateBoardSize(event.value);
    }
  }

}
