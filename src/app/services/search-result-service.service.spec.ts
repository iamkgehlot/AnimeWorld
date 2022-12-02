import { TestBed } from '@angular/core/testing';

import { SearchResultServiceService } from './search-result-service.service';

describe('SearchResultServiceService', () => {
  let service: SearchResultServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchResultServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
