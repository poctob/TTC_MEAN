import { Injectable } from '@angular/core';
import { 
  Subject, 
  Observable, 
  from, 
  interval, 
  range, 
  empty, 
  throwError, 
  timer,
  merge
} from 'rxjs';
  
import { take, skip, filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  
  private counter: number = 0;
  
  public counterSubject = new Subject<number>();
  
  public simpleObservable = Observable.create( function(observer){
      observer.next("Hello from simple observable");
      // observer.error("Test error");
      // observer.complete();
  });
  
  public fromObservable = from("Hello from FromObservable");
  public intervalObservable = interval(3000);
  
  rangeObservable: Observable<number> = range(1, 5);
  emptyObservable: Observable<any> = empty();
  throwObservable: Observable<string> = throwError('Throw Error Observable!');
  
  timerObservable: Observable<number> = timer( 2000, 3000);
  
  timerObservable2: Observable<number> = this.timerObservable.pipe(take(3));
  timerObservable3: Observable<number> = this.timerObservable.pipe(skip(3));
  timerObservable4: Observable<number> = 
    this.timerObservable.pipe(filter(this.isEven));
    
  timerObservable5: Observable<number> = 
    this.timerObservable.pipe(filter( x => x % 2 === 0));
    
  timerObservable7: Observable<string> = 
    this.timerObservable.pipe(map( x => 'Current counter value is: ' + x));
    
  timerObservable6: Observable<any> = merge(
    this.timerObservable7, 
    this.fromObservable,
    this.simpleObservable)
  
  constructor() { }
  
  isEven (x: number): boolean {
    return x % 2 === 0;
  }
  
  public incrementCounter() {
    this.counter++;
    console.log('Counter incremented to: ' + this.counter);
    this.counterSubject.next(this.counter);
  }
}
