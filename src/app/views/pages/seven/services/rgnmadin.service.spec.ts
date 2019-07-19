import { TestBed } from '@angular/core/testing';

import { RgnmadinService } from './rgnmadin.service';

describe('RgnmadinService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RgnmadinService = TestBed.get(RgnmadinService);
    expect(service).toBeTruthy();
  });
});
