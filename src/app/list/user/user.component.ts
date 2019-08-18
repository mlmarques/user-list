import { Component, OnInit } from '@angular/core';
import { User } from './User';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: User[] = [];
  
  constructor(userService: UserService) {
    userService
      .listUsers()
      .subscribe(users => {
        this.users = users;
      });
  }

  ngOnInit() {}

}
