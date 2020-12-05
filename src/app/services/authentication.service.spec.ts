import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuthenticationService } from './authentication.service';

describe('AuthenticationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthenticationService]
    });
  });

  it('should be initialized', inject([AuthenticationService], (authenticationService: AuthenticationService) => {
    expect(authenticationService).toBeTruthy();
  }));
});
