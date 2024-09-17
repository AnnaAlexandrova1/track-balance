import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreSliderComponent } from './score-slider.component';

describe('ScoreSliderComponent', () => {
  let component: ScoreSliderComponent;
  let fixture: ComponentFixture<ScoreSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScoreSliderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScoreSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
