import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCircleChartComponent } from './create-circle-chart.component';

describe('CreateCircleChartComponent', () => {
  let component: CreateCircleChartComponent;
  let fixture: ComponentFixture<CreateCircleChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateCircleChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateCircleChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
