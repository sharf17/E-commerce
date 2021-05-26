import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  
  private messageSource = new BehaviorSubject('default message');
  currentMessage = this.messageSource.asObservable();

  private arraySource = new BehaviorSubject('default array');
  currentArray = this.arraySource.asObservable();

  constructor() { }

  changeMessage(message: string) {
    this.messageSource.next(message)
  }
  changeArray(arra) {
    this.messageSource.next(arra)
  }
}
