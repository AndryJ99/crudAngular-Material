import { TestBed } from '@angular/core/testing';

import { ProxyServiceService } from './proxy-service.service';

describe('ProxyServiceService', () => {
  let service: ProxyServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProxyServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
