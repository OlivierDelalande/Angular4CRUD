import { TestBed, inject } from '@angular/core/testing';

import { WebsiteVisitorServiceService } from './website-visitor-service.service';

describe('WebsiteVisitorServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WebsiteVisitorServiceService]
    });
  });

  it('should be created', inject([WebsiteVisitorServiceService], (service: WebsiteVisitorServiceService) => {
    expect(service).toBeTruthy();
  }));
});
