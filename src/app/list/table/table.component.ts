import { Component, OnInit, Input, Inject } from '@angular/core';
import { User } from '../user/User';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { UserService } from '../user/user.service';
import { LocalStorageService } from 'src/app/local-storage.service';
import { Router } from '@angular/router';
import { routing } from 'src/app/app.routing';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() users: User[] = []
  
  STORAGE_KEY = 'local_userlist';
  
  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService, 
    private localStorageService: LocalStorageService,
    private router: Router) {}

  ngOnInit() {
    this.users = this.localStorageService.getAPI();
  }

  public delete(user: User){
    //Pega o index do usuário a ser deletado
    let index: number = this.users.indexOf(user);
    //Remove esse usuário do array de usuários do componente
    this.users.splice(index, 1);
    //Passa o array atualizado para o método do LocalStorageService
    this.localStorageService.updateLocalStorage(this.users);   
  }

  public edit(){}

}
