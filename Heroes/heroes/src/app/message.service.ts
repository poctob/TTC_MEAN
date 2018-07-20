import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }
  
  messages: string[] = [];
 
  add(message: string) {
    this.messages.push(message);
  }
  
  delete(index: number) {
    if (index > -1 && index < this.messages.length) {
      this.messages.splice(index, 1);
    }
  }
 
  clear() {
    this.messages = [];
  }
}
