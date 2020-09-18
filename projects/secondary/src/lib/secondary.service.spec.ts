import { TestBed } from '@angular/core/testing';

import { SecondaryService } from './secondary.service';

describe('SecondaryService', () => {
  let service: SecondaryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SecondaryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
