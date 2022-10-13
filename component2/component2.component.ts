import { Component, OnInit } from '@angular/core';
import { DemoService } from '../demo.service';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

  username;
  user1={
    firstName:'',
    lastName:'',
    email:'',
    mb:''
  }
  constructor(private _demo: DemoService) {
    this._demo.username.subscribe(result=>{
      this.username=result;
    })
    this._demo.firstName.subscribe(res=>{
      this.user1.firstName=res
    })
    this._demo.lastName.subscribe(res=>{
      this.user1.lastName=res
    })
    // this._demo.email.subscribe(res=>{
    //   this.user1.email=res
    // })
    this._demo.mb.subscribe(res=>{
      this.user1.mb=res
    })
   }

  ngOnInit() {
  }
  updateUserName(uname){
    this._demo.username.next(uname.value)
      }
      user(fname, lname, mb){
        this._demo.firstName.next(fname.value);
        this._demo.lastName.next(lname.value);
        this._demo.mb.next(mb.value);
        
        }
}
