import {Injectable} from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';

@Injectable()

export class MovieFormService {
  constructor(private db: AngularFireDatabase) {
  }

  getMovies(): FirebaseListObservable<any[]> {
    return this.db.list('/movies');
  }

  // getMovieData = (key): FirebaseObjectObservable<any[]> => {
  //   return this.db.object(`/movies/${key}`);
  // }
}
