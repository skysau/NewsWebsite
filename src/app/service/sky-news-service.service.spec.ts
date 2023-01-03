import { TestBed } from '@angular/core/testing';

import { SkyNewsServiceService } from './sky-news-service.service';

describe('SkyNewsServiceService', () => {
  let service: SkyNewsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SkyNewsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
