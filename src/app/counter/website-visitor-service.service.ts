import { Injectable } from '@angular/core';
import {AngularFireDatabase, FirebaseObjectObservable} from "angularfire2/database";

@Injectable()
export class WebsiteVisitorServiceService {

  // private database: Promise<number>;


  // constructor() {
    // this.database = new Promise ((resolve) => {
    // setTimeout(() => {
    //   resolve(42);
    //   }, 2000)
    // });

    items: FirebaseObjectObservable<any>;

    constructor(db: AngularFireDatabase) {
      this.items = db.object('/counter', { preserveSnapshot: true });
    }



  get() {
    return this.items
  }

}
