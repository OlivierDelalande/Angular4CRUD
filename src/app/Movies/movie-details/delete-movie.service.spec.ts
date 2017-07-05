import { TestBed, inject } from '@angular/core/testing';

import { DeleteMovieService } from './delete-movie.service';

describe('DeleteMovieService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DeleteMovieService]
    });
  });

  it('should be created', inject([DeleteMovieService], (service: DeleteMovieService) => {
    expect(service).toBeTruthy();
  }));
});
