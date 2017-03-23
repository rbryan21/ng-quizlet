import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: String;
  password: String;

  constructor(
    private validateService: ValidateService,
    private authService: AuthService,
    private flashMessage: FlashMessagesService,
    private router: Router
    ) { }

  ngOnInit() {
    
  }

  onLoginSubmit() {
    var user = {
      email: this.email,
      password: this.password
    };

    // Validate email
    if (!this.validateService.validateEmail(this.email)) {
      this.flashMessage.show('Please use a valid email', {cssClass: 'alert-danger', timeout: 3000});
      return false;
    }

    this.authService.authenticateUser(user).subscribe(data => {
      if (data.success) {
        this.authService.storeUserData(data.token, data.user);
        this.flashMessage.show('You are now logged in', {cssClass: 'alert-success', timeout: 3000});
        this.router.navigate(['dashboard']);
      } else {
        this.flashMessage.show(data.message, {cssClass: 'alert-danger', timeout: 3000});
        this.email = '';
        this.password = '';
        this.router.navigate(['login']);
      }
    });
  }

}
