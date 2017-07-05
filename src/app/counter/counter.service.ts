import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {WebsiteVisitorServiceService} from "./website-visitor-service.service";


@Injectable()
export class CounterService {

  private countObservable: BehaviorSubject<number>;
  private flagObservable: BehaviorSubject<boolean>;
  private startValue: number;

  constructor(public visitors: WebsiteVisitorServiceService) {
    this.startValue = 0;
    this.countObservable = new BehaviorSubject(this.startValue);
    this.flagObservable = new BehaviorSubject(true);

    // this.visitors.get().then((value) => {
    //   this.startValue = value;
    //   this.countObservable.next(this.startValue);
    //   this.flagObservable.next(false);
    //   })

    this.visitors.get().subscribe((snapshot) => {
        this.startValue = snapshot.val();
        this.countObservable.next(this.startValue);
        this.flagObservable.next(false)
      })
    }

  get() {
    return this.countObservable
  }

  getFlag(){
    return this.flagObservable
  }

  plusOne() {
    this.startValue++
    this.countObservable.next(this.startValue)
  }

  minusOne() {
    this.startValue--
    this.countObservable.next(this.startValue)
  }

}
