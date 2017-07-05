import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralcomponentsComponent } from './generalcomponents.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [GeneralcomponentsComponent],
  exports :[GeneralcomponentsComponent]
})
export class GeneralcomponentsModule { }
