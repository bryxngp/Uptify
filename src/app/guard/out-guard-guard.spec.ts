import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { outGuardGuard } from './out-guard-guard';

describe('outGuardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => outGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
