import { TestBed } from '@angular/core/testing';

import { GeneralesService } from './generales.service';

describe('GeneralesService', () => {
  let service: GeneralesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneralesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
