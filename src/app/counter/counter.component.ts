import { Component, OnInit } from '@angular/core';
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {CounterService} from "./counter.service";

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  count : BehaviorSubject<number>;
  flag : BehaviorSubject<boolean>;

  constructor(public counterService: CounterService) {
    this.count = this.counterService.get();
    this.flag = this.counterService.getFlag();
  }

  ngOnInit() {
  }

  plus() {
    this.counterService.plusOne();
  }

  minus() {
    this.counterService.minusOne();
  }
}
