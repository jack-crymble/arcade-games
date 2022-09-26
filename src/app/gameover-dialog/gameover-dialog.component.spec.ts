import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameoverDialogComponent } from './gameover-dialog.component';

describe('GameoverDialogComponent', () => {
  let component: GameoverDialogComponent;
  let fixture: ComponentFixture<GameoverDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameoverDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameoverDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
