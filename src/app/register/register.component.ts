import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService } from '../alert/alert.service';
import { UserService } from '../user.service';

@Component( {
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: [ './register.component.scss' ]
} )
export class RegisterComponent {

  model: any = {};
  loading = false;

  constructor(
    private router: Router,
    private alertService: AlertService,
    private userService: UserService
  ) {}

  register() {
    this.loading = true;

    this.userService
      .create( this.model )
      .subscribe(
        data => {
          this.alertService.success( 'Registration successful', true );
          this.router.navigate( [ '/login' ] )
        },
        error => {
          this.alertService.error( error );
          this.loading = false;
        }
      )
  }

}
