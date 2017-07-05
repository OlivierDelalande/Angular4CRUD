import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter.component';
import {CounterService} from "./counter.service";
import {WebsiteVisitorServiceService} from "./website-visitor-service.service";
import {AngularFireModule} from "angularfire2";
import {AngularFireDatabaseModule} from "angularfire2/database";
import {environment} from "../../environments/environment";

@NgModule({
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  declarations: [CounterComponent],
  providers: [
    CounterService,
    WebsiteVisitorServiceService
  ],
  exports: [CounterComponent]
})
export class CounterModule { }
