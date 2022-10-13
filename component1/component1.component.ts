import { Component, OnInit } from '@angular/core';
import { DemoService } from '../demo.service';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {
username;
user1={
  firstName:'',
  lastName:'',
  email:'',
  mb:''
}
  constructor(private demo:DemoService) {
    this.demo.username.subscribe(result=>{
      this.username=result;
    })
    this.demo.firstName.subscribe(res=>{
      this.user1.firstName=res
    })
    this.demo.lastName.subscribe(res=>{
      this.user1.lastName=res
    })
    // this.demo.email.subscribe(res=>{
    //   this.user1.email=res
    // })
    this.demo.mb.subscribe(res=>{
      this.user1.mb=res
    })
   }

  ngOnInit() {
  }
  updateUserName(uname){
this.demo.username.next(uname.value)
  }
  user(fname,lname,mb){
this.demo.firstName.next(fname.value);
this.demo.lastName.next(lname.value);
this.demo.mb.next(mb.value);
this.demo.reset()

}
}
