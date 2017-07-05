import { Component, OnInit, Input } from '@angular/core';
import {ShowMoviesService} from "./show-movies.service";
import {FirebaseListObservable} from "angularfire2/database";
import {MoviesService} from "../../Services/movies.service";

@Component({
  selector: 'app-show-movies',
  templateUrl: './show-movies.component.html',
  styleUrls: ['./show-movies.component.css']
})
export class ShowMoviesComponent implements OnInit {

    @Input() searchModel: string;

    allmovies: FirebaseListObservable<any>;

  constructor(public MoviesService: MoviesService) {

  }

  ngOnInit() {
    // this.allmovies = this.ShowMoviesService.get()
    this.allmovies = this.MoviesService.get()

  }

}
