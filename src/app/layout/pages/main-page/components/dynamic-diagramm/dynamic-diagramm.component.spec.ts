import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicDiagrammComponent } from './dynamic-diagramm.component';

describe('DynamicDiagrammComponent', () => {
  let component: DynamicDiagrammComponent;
  let fixture: ComponentFixture<DynamicDiagrammComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicDiagrammComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DynamicDiagrammComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
