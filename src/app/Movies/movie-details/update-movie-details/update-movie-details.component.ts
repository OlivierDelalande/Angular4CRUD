import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MovieFormComponent} from "../../movie-form/movie-form.component";
import {MovieFormService} from "../../movie-form/movie-form.service";

@Component({
  selector: 'app-update-movie-details',
  templateUrl: '../../movie-form/movie-form.component.html',
  styleUrls: ['./update-movie-details.component.css']
})
export class UpdateMovieDetailsComponent extends MovieFormComponent {

  protected moviescreationform: FormGroup;
  movie: any;
  currentkey: string;

  constructor(protected moviesDb: MovieFormService,
              protected fb: FormBuilder,
              protected router: Router,
              protected route: ActivatedRoute,
              ) {
    super(moviesDb, fb, router);
  }

  getMovieData() {
    return this.movie = this.moviesDb.getMovieData(this.currentkey)
  }

  ngOnInit() {
    this.movie = this.route.paramMap
      .switchMap((params: ParamMap) => {
        this.currentkey = params.get('id');
        console.log(this.currentkey);
        return this.moviesDb.getMovieData(params.get('id'))
    });

    this.moviescreationform = this.fb.group({
      title: [this.movie.title, [Validators.required]],
      category: [this.movie.category, [Validators.required]],
      releaseYear: [this.movie.releaseYear, [Validators.required]],
      poster: [this.movie.poster, [Validators.required]],
      directors: [this.movie.directors, [Validators.required]],
      actors: [this.movie.actors, [Validators.required]],
      synopsis: [this.movie.synopsis, [Validators.required]],
      rate: [this.movie.rate, [Validators.required]],
      lastViewDate: [this.movie.lastViewDate, [Validators.required]],
      price: [this.movie.price, [Validators.required]]
    });
    console.log('update');
  }

}
