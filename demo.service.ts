import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemoService {
  reset() {
    throw new Error('Method not implemented.');
  }
  // username = new Subject<any>();
  username= new BehaviorSubject('codemind technology');
  firstName= new Subject<any>();
  lastName= new Subject<any>();
  mb= new Subject<any>()
  ak: any;

  constructor() { }
}
