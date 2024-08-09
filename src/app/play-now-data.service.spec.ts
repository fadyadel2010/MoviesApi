import { TestBed } from '@angular/core/testing';

import { PlayNowDataService } from './play-now-data.service';

describe('PlayNowDataService', () => {
  let service: PlayNowDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayNowDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
