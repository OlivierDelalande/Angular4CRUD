import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowMoviesComponent } from './show-movies.component';
import {AngularFireModule} from "angularfire2";
import {environment} from "../../../environments/environment";
import {AngularFireDatabaseModule} from "angularfire2/database";
import {ShowMoviesService} from "./show-movies.service";

import {FormsModule} from "@angular/forms";
import {ShowMoviesPipe} from "../../Pipe/show-movies.pipe";
import {RouterModule} from "@angular/router";
import {MoviesService} from "../../Services/movies.service";

@NgModule({
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    RouterModule
  ],
  declarations: [ShowMoviesComponent,ShowMoviesPipe],
  providers: [
    MoviesService
  ],
  exports: [ShowMoviesComponent]
})
export class ShowMoviesModule { }
