import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  firstName: String;
  lastName: String;
  email: String;
  password: String;
  passwordRepeat: String;

  constructor(
    private validateService: ValidateService, 
    private flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
  }

  onSignUpSubmit() {
    var user = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password,
      passwordRepeat: this.passwordRepeat
    }

    // Required fields
    if (!this.validateService.validateRegister(user)) {
      this.flashMessage.show('Please fill in all fields', {cssClass: 'alert-danger', timeout: 3000});
      return false;
    }

    // Validate email
    if (!this.validateService.validateEmail(user.email)) {
      this.flashMessage.show('Please use a valid email', {cssClass: 'alert-danger', timeout: 3000});
      return false;
    }

    if (!this.validateService.validatePasswordMatch(user.password, user.passwordRepeat)) {
      this.flashMessage.show('Passwords do not match', {cssClass: 'alert-danger', timeout: 3000});
      return false;
    } 

  }

}
