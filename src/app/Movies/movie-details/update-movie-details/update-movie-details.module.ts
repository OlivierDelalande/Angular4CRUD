import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateMovieDetailsComponent } from './update-movie-details.component';
import {MovieDetailsService} from "../movie-details.service";
import {ReactiveFormsModule} from "@angular/forms";
import {MovieFormModule} from "../../movie-form/movie-form.module";
import {RouterModule} from "@angular/router";


@NgModule({
  imports: [
    CommonModule,
    MovieFormModule,
    ReactiveFormsModule,
    RouterModule
  ],
  declarations: [UpdateMovieDetailsComponent],
  providers: [
    MovieDetailsService
  ],
  exports: [UpdateMovieDetailsComponent]
})
export class UpdateMovieDetailsModule { }
