import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateMovieDetailsComponent } from './update-movie-details.component';
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {MovieService} from "../../Services/movie.service";


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  declarations: [UpdateMovieDetailsComponent],
  providers: [MovieService],
  exports: [UpdateMovieDetailsComponent]
})
export class UpdateMovieDetailsModule { }
