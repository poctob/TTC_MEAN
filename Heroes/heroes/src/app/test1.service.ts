import { Injectable } from '@angular/core';
import { Observable, Subject, range } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Test1Service {

  counter: number;
  public counterSubject = new Subject<number>();
  
  public rangeObservable = range(1, 10);
  
  constructor() { 
    this.counter = 0;
  }
  
  incrementCounter() {
    this.counter++;
    this.counterSubject.next(this.counter);
  }
}
