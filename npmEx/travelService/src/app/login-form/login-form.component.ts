import { Component, OnInit } from '@angular/core';
import { Credential } from '../credential';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})

//This is where we declare the properties and data that can be used in the "View"(html file)
export class LoginFormComponent implements OnInit {

  user : Credential ={userName:'', passWord:''}; // user is an object of type credential and it is initialized on the RHS
  status : string;

  constructor() { }

  ngOnInit() {
  }

  //Logic behind checking the credentials
  validate(){
    if(this.user.userName === 'india' && this.user.passWord === 'india')
    {
      this.status = 'valid user';
    }
    else{
      this.status = 'invalid user';
    }
  }
}
