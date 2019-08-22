import { Component, OnInit } from '@angular/core';
import { User } from './User';
import { UserService } from './user.service';
import { LocalStorageService } from 'src/app/local-storage.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: User[] = [];
  
  constructor(userService: UserService, private localStorageService: LocalStorageService) {
    //Verifica se há dados na local storage
    if(!this.localStorageService.getAPI()){
      //Se não, carrega a API com os dados do usuário
      userService
        .listUsers()
        .subscribe(users => {
          this.users = users;
          this.localStorageService.uploadAPI(this.users);
      });
    }
  }

  ngOnInit(): void {}
}
