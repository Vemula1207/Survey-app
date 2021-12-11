import { TestBed } from '@angular/core/testing';

import { AuthGuardDesendentService } from './auth-guard-desendent.service';

describe('AuthGuardDesendentService', () => {
  let service: AuthGuardDesendentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthGuardDesendentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
