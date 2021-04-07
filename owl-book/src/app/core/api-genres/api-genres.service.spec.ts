import { TestBed } from '@angular/core/testing';

import { ApiGenresService } from './api-genres.service';

describe('ApiGenresService', () => {
  let service: ApiGenresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiGenresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
