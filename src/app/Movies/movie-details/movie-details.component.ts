import {Component, OnInit} from '@angular/core';
import {MovieDetailsService} from "./movie-details.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import 'rxjs/add/operator/switchMap';
import {MovieService} from "../../Services/movie.service";
import {current} from "codelyzer/util/syntaxKind";


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  moviedetails: any;
  currentKey: string;

  constructor(protected movieService: MovieService,
              protected route: ActivatedRoute,
              protected router: Router) {
  }

  ngOnInit() {
    this.moviedetails = this.route.paramMap
      .switchMap((params: ParamMap) => {
        this.currentKey = params.get('id');
        console.log(this.currentKey);
        return this.movieService.get(params.get('id'))
    });
  }

  deleteMovie() {
    console.log('delete');
    this.movieService.deleteMovie(this.currentKey);
    this.router.navigate(['/movies/show']);
  }

  updateMovie () {
    console.log('update');
    this.router.navigate([`/movies/update/${this.currentKey}`]);
    this.movieService.updateMovie();
  }


}















// (aze) => console.log(aze);
// (aze) => {
//   return console.log(aze);
// }
