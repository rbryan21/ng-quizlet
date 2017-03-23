import { Injectable } from '@angular/core';

@Injectable()
export class ValidateService {

  constructor() { }

  // Make sure user has all the fields
  validateRegister(user) {
    return (user.firstName != undefined && user.lastName != undefined && user.email != undefined && user.password != undefined && user.passwordRepeat != undefined);
  }

  // returns true/false if the email matches email regex
  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  validatePasswordMatch(password, passwordRepeat) {
    return password === passwordRepeat;
  }

}
