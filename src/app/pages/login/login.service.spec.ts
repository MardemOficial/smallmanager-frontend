import { TestBed } from '@angular/core/testing';

import { LoginInterface } from './login.interface';

describe('Login', () => {
  let service: LoginInterface;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Login);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
