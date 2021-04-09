import { TestBed } from '@angular/core/testing';

import { ApiBooksResolver } from './api-books.resolver';

describe('ApiBooksResolver', () => {
  let resolver: ApiBooksResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ApiBooksResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
