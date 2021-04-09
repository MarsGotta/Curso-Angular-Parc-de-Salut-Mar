import { TestBed } from '@angular/core/testing';

import { ApiGenresResolver } from './api-genres.resolver';

describe('ApiGenresResolver', () => {
  let resolver: ApiGenresResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ApiGenresResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
