import { Component, OnInit } from '@angular/core';

import { User } from '../common/models/User';
import { UserService } from '../common/services/user.service';
import { LocalStorageService } from 'src/app/common/services/local-storage.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: User[] = [];
  
  constructor(userService: UserService, private localStorageService: LocalStorageService) {
    if(!this.localStorageService.getAPI()){
      userService
        .listUsers()
        .subscribe(users => {
          this.users = users;
          this.localStorageService.uploadAPI(this.users);
      });
    }
  }

  ngOnInit(): void {}

  clearAPI(){
    console.log("Clear API");
    this.localStorageService.clearStorage();
  }

  loadAPI(){
    console.log("Load API");
    this.users = this.localStorageService.getAPI();
  }
}
