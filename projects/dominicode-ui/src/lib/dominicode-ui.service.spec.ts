import { TestBed } from '@angular/core/testing';
import { DominicodeUIService } from './dominicode-ui.service';

describe('DominicodeUiService', () => {
  let service: DominicodeUIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DominicodeUIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
