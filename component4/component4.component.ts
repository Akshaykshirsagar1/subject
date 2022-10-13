import { Component, OnInit } from '@angular/core';
import { DemoService } from '../demo.service';

@Component({
  selector: 'app-component4',
  templateUrl: './component4.component.html',
  styleUrls: ['./component4.component.css']
})
export class Component4Component implements OnInit {

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
