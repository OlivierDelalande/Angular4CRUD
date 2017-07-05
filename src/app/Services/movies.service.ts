import { Injectable } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from "angularfire2/database";

@Injectable()
export class MoviesService {

  private items: FirebaseListObservable<any>;

  constructor(db: AngularFireDatabase) {
    this.items = db.list('/movies');
  }

  get() {
    return this.items
  }

}
