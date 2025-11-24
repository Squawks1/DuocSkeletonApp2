import { TestBed } from '@angular/core/testing';

import { Placeholder } from './placeholder';

describe('Placeholder', () => {
  let service: Placeholder;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Placeholder);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
