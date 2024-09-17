import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeAreasComponent } from './change-areas.component';

describe('ChangeAreasComponent', () => {
  let component: ChangeAreasComponent;
  let fixture: ComponentFixture<ChangeAreasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangeAreasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChangeAreasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
