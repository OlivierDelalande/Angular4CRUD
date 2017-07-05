import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieDetailsComponent } from './movie-details.component';
import {AngularFireModule} from "angularfire2";
import {environment} from "../../../environments/environment";
import {AngularFireDatabaseModule} from "angularfire2/database";
import {MovieDetailsService} from "./movie-details.service";
import {RouterModule} from "@angular/router";
import {MovieService} from "../../Services/movie.service";



@NgModule({
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    RouterModule
  ],
  declarations: [MovieDetailsComponent],
  providers: [
    MovieService
  ],
  exports: [MovieDetailsComponent]
})
export class MovieDetailsModule { }
