import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Page2Component } from './page2.component';
import {CounterModule} from "../counter/counter.module";

@NgModule({
  imports: [
    CommonModule,
    CounterModule
  ],
  declarations: [
    Page2Component
  ],
  providers: [CounterModule] //instanciation de l'injecteur dont on a besoin
})
export class Page2Module { }
