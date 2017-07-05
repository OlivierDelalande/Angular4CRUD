import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultrouteComponent } from './defaultroute.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DefaultrouteComponent],
  exports:[DefaultrouteComponent]
})
export class DefaultrouteModule { }
