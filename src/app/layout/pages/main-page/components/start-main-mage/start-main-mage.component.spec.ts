import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartMainMageComponent } from './start-main-mage.component';

describe('StartMainMageComponent', () => {
  let component: StartMainMageComponent;
  let fixture: ComponentFixture<StartMainMageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StartMainMageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StartMainMageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
