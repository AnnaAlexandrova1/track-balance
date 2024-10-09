import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionAreaItemComponent } from './description-area-item.component';

describe('DescriptionAreaItemComponent', () => {
  let component: DescriptionAreaItemComponent;
  let fixture: ComponentFixture<DescriptionAreaItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DescriptionAreaItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DescriptionAreaItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
