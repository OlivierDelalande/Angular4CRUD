import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Page1Component } from './page1.component';
import {GeneralcomponentsModule} from "../generalcomponents/generalcomponents.module";

@NgModule({
  imports: [
    CommonModule,
    GeneralcomponentsModule
  ],
  declarations: [Page1Component]
})
export class Page1Module { }
