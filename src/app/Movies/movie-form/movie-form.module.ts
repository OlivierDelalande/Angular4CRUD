import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieFormComponent } from './movie-form.component';
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import { MovieFormService} from "./movie-form.service";
import {MoviesService} from "../../Services/movies.service";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  declarations: [MovieFormComponent],
  providers: [MoviesService],
  exports: [MovieFormComponent]
})
export class MovieFormModule { }
