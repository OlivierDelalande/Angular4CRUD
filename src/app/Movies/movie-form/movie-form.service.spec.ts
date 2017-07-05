import { TestBed, inject } from '@angular/core/testing';

import { MovieFormService } from './movie-form.service';

describe('MovieFormService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MovieFormService]
    });
  });

  it('should be created', inject([MovieFormService], (service: MovieFormService) => {
    expect(service).toBeTruthy();
  }));
});
