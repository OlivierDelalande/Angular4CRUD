import { Injectable } from '@angular/core';
import {AngularFireDatabase, FirebaseObjectObservable} from "angularfire2/database";
import { RouterModule, Routes } from '@angular/router';


@Injectable()
export class MovieDetailsService {


  private details: FirebaseObjectObservable<any>;

  constructor(
    private db: AngularFireDatabase
  ) {}

  get(id) {
    return this.details = this.db.object(`/movies/${id}`);
  }

  deleteMovie(key) {
    console.log('delete service');
    this.db.object('movies/' + key).remove()
  }

}
