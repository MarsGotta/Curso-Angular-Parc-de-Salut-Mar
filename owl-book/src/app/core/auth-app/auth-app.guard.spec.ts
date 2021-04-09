import { TestBed } from '@angular/core/testing';

import { AuthAppGuard } from './auth-app.guard';

describe('AuthAppGuard', () => {
  let guard: AuthAppGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthAppGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
