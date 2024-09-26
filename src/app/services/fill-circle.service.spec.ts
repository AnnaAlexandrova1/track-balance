import { TestBed } from '@angular/core/testing';

import { FillCircleService } from './fill-circle.service';

describe('FillCircleService', () => {
  let service: FillCircleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FillCircleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
