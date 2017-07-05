import {Component, OnInit} from '@angular/core';
import {MovieDetailsService} from "./movie-details.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import 'rxjs/add/operator/switchMap';
import {MovieFormService} from "../movie-form/movie-form.service";


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  // moviedetails: any;
  // subscription: any;
  moviedetails: any;
  currentKey: string;

  constructor(protected movieService: MovieDetailsService,
              protected MovieFormService: MovieFormService,
              protected route: ActivatedRoute,
              protected router: Router) {
  }

  ngOnInit() {

    // this.subscription = this.route.paramMap
    //   .switchMap((params: ParamMap) =>
    //     this.movieService.get(params.get('id')))
    //   .subscribe((value) => {
    //     console.log('AAA', value);
    //     this.moviedetails = value;
    //   });

    this.moviedetails = this.route.paramMap
      .switchMap((params: ParamMap) => {
        this.currentKey = params.get('id');
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
  }



  // ngOnDestroy() {
  //   // this.subscription.unsubscribe();
  // }

}

// (aze) => console.log(aze);
// (aze) => {
//   return console.log(aze);
// }
