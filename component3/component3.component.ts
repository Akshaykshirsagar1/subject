import { Component, OnInit } from '@angular/core';
import { DemoService } from '../demo.service';

@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.css']
})
export class Component3Component implements OnInit {

  username;
  constructor(private _demo: DemoService) {
    this._demo.username.subscribe(result=>{
      this.username=result;
    })
   }
  ngOnInit() {
  }
  updateUserName(uname){
    this._demo.username.next(uname.value)
      }
}
