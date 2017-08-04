import { Component, OnInit } from '@angular/core';

import { User } from '../user';
import { UserService } from '../user.service';

@Component( {
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.scss' ]
} )
export class HomeComponent implements OnInit {

  currentUser: User;
  users: User[] = [];

  constructor( private userService: UserService ) {
    this.currentUser = JSON.parse( localStorage.getItem( 'currentUser' ) )
  }

  ngOnInit() {
    this.loadAllUsers();
  }

  deleteUser( _id: string ) {
    this.userService
      .delete( _id )
      .subscribe( () => { this.loadAllUsers() } );
  }

  private loadAllUsers() {
    this.userService
      .getAll()
      .then( users => { this.users = users } );
  }

}
