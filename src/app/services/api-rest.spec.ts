import { TestBed } from '@angular/core/testing';

import { ApiRest } from './api-rest';

describe('ApiRest', () => {
  let service: ApiRest;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiRest);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
