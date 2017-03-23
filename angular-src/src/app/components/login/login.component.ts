import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  firstName: string;
  lastName: string;

  constructor() {
    this.firstName = " ";
    this.lastName = " ";
   }

  ngOnInit() {
    
  }

}
