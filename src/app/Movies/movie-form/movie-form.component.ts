import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MovieFormService} from "./movie-form.service";
import {Movie} from "../movies.model";
import {Router} from "@angular/router";
import {MoviesService} from "../../Services/movies.service";

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css']
})

export class MovieFormComponent implements OnInit {

  protected moviescreationform: FormGroup;

  movie: Movie = {
    title: "",
    category: "",
    releaseYear: "",
    poster: "",
    actors: "",
    directors: "",
    synopsis: "",
    rate: "",
    lastViewDate: "",
    price: ""
  };

  constructor(protected moviesDb: MoviesService,
              protected fb: FormBuilder,
              protected router: Router) {
  }



  ngOnInit() {
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
    console.log('pp', this.moviescreationform);
  }

  save() {
    console.log('form', this.moviescreationform.value);
    this.moviesDb.get().push(this.moviescreationform.value);
    this.router.navigate(['/movies/show']);
  }

}






