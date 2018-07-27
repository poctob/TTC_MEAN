import { Component, OnInit } from '@angular/core';

import { MessageService } from '../message.service';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(
    public messageService: MessageService,
    private counterService: CounterService) { }

  ngOnInit() {
   
    // this.counterService.counterSubject.subscribe( num => {
    //   this.messageService.add('New counter value is: ' + num);
    // });
    
    // this.counterService.simpleObservable.subscribe( 
    //   msg => {
    //     console.log(msg);
    // },
    //   error => {
    //     console.log(error);
    //   },
    //   () => {
    //     console.log("Observable completed!");
    //   });
      
    //   this.counterService.fromObservable.subscribe( msg => {
    //     console.log(msg);
    //   });
      
    //   this.counterService.rangeObservable.subscribe( msg => {
    //     console.log(msg);
    //   });
      
    //   this.counterService.emptyObservable.subscribe( 
    //     msg => {
    //     console.log(msg);
    //   }, err => {
    //     console.error(err);
    //   }, () => {
    //     console.log("Empty observable completed!");
    //   });
      
    //   this.counterService.throwObservable.subscribe({
    //     error: err => {
    //       console.error(err);
    //     }
    //   });
      
      this.counterService.timerObservable6.subscribe( msg => {
        console.log(msg);
      });
  }
  

}

    // this.test1Service.rangeObservable.subscribe( num => {
    //   console.log(num);
    // });
