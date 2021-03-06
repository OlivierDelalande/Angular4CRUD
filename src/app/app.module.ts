import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { RouterModule } from '@angular/router';

import {Page1Module} from "./page1/page1.module";
import {Page3Module} from "./page3/page3.module";
import {Page2Module} from "./page2/page2.module";
import {Page4Module} from "./page4/page4.module";
import {Page5Module} from "./page5/page5.module";
import {GeneralcomponentsModule} from "./generalcomponents/generalcomponents.module";

import {appRoutes} from "./app.routes";
import {DefaultrouteModule} from "./defaultroute/defaultroute.module";
import {MovieFormModule} from "./Movies/movie-form/movie-form.module";
import {ShowMoviesModule} from "./Movies/show-movies/show-movies.module";
import {MovieDetailsModule} from "./Movies/movie-details/movie-details.module";
import {UpdateMovieDetailsModule} from "./Movies/update-movie-details/update-movie-details.module";

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    Page1Module,
    Page2Module,
    Page3Module,
    Page4Module,
    Page5Module,
    DefaultrouteModule,
    GeneralcomponentsModule,
    MovieFormModule,
    ShowMoviesModule,
    MovieDetailsModule,
    UpdateMovieDetailsModule
  ],
  declarations: [
    AppComponent,
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule {}
