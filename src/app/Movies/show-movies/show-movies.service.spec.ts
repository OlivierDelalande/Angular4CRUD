import { TestBed, inject } from '@angular/core/testing';

import { ShowMoviesService } from './show-movies.service';

describe('ShowMoviesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShowMoviesService]
    });
  });

  it('should be created', inject([ShowMoviesService], (service: ShowMoviesService) => {
    expect(service).toBeTruthy();
  }));
});
