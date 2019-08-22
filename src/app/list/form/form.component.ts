import { Component, OnInit, Input, Inject } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { User } from '../user/User';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { LocalStorageService } from 'src/app/local-storage.service';
import { skip } from 'rxjs/operators';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  
  STORAGE_KEY = 'local_userlist';

  user: User;
  users: User[] = [];  

  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  
  constructor(
    @Inject(LOCAL_STORAGE) 
    private storage: StorageService,
    private localStorageService: LocalStorageService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {
    // REFATORAR ESSE CÓDIGO
    // ----------------------------------------------------------
    //Buscar o id passado como parâmetro na url
    var usuario = this.route.snapshot.params;
    // console.log(usuario);
    this.id = +this.route.snapshot.paramMap.get("id");
    this.name = this.route.snapshot.paramMap.get("name");
    this.username = this.route.snapshot.paramMap.get("username");
    this.email = this.route.snapshot.paramMap.get("email");
    this.phone = this.route.snapshot.paramMap.get("phone");
    this.website = this.route.snapshot.paramMap.get("website");
    // ----------------------------------------------------------
  }

  public onSubmit(){
    this.saveUser();
  }
  
  public saveUser(){
    this.loadUsers();
    this.createUser();
    this.hasUser();
    this.updateLocalStorage();
  }
  
  public loadUsers(){
    this.users = this.localStorageService.getAPI();
  }

  public createUser(){
    this.user = ({
      id: +this.id,
      name: this.name,
      username: this.username,
      email: this.email,
      phone: this.phone,
      website: this.website
    });
  }

  public hasUser(){
    let redirect: boolean = false;
    this.users.forEach(user => {
      if(!redirect){
        if(this.getUserId(user) == this.user.id){
          this.updateUser(user);
          redirect = true;
        } else{
          this.newUser();
          redirect = true;
        }
      }
    });
  }

  public newUser(){
    this.user.id = this.getLastUserId() + 1;
    this.users.splice(this.users.length, 1, this.user);
  }

  public updateUser(user: User){
    this.users[this.users.indexOf(user)] = this.user;
  }

  public updateLocalStorage(){
    this.localStorageService.updateLocalStorage(this.users);
  }

  public getUserId(user: User){
    let index = this.users.indexOf(user);
    return this.users[index].id;
  }

  public getLastUserId(){
    let id = this.users[this.users.length - 1].id;
    return id;
  }
}
