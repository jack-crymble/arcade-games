import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrowKeysComponent } from './arrow-keys.component';

describe('ArrowKeysComponent', () => {
  let component: ArrowKeysComponent;
  let fixture: ComponentFixture<ArrowKeysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrowKeysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArrowKeysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
