import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MovieService} from "../../Services/movie.service";

@Component({
  selector: 'app-update-movie-details',
  templateUrl: './update-movie-details.component.html',
  styleUrls: ['./update-movie-details.component.css']
})
export class UpdateMovieDetailsComponent implements OnInit {

  private moviesupdateform: FormGroup;
  private movie: any
  private film: any;
  private currentkey: string;

  constructor(protected movieservice: MovieService,
              protected fb: FormBuilder,
              protected router: Router,
              protected route: ActivatedRoute,
              ) {
  }

  ngOnInit() {

    this.film = this.route.paramMap
      .switchMap((params: ParamMap) => {
        this.currentkey = params.get('id');
        console.log(this.currentkey);
        return this.movieservice.get(this.currentkey)

    });
    this.film.subscribe(value => {
      console.log(value);

      this.moviesupdateform = this.fb.group({
        title: [value.title],
        category: [value.category],
        releaseYear: [value.releaseYear],
        poster: [value.poster],
        directors: [value.directors],
        actors: [value.actors],
        synopsis: [value.synopsis],
        rate: [value.rate],
        lastViewDate: [value.lastViewDate],
        price: [value.price]
      });
      console.log('update');
    })
    }



}
