import { Component, OnInit, Input, Inject } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { User } from '../user/User';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { LocalStorageService } from 'src/app/local-storage.service';
import { isNull } from 'util';

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
    @Inject(LOCAL_STORAGE) private storage: StorageService,
    private localStorageService: LocalStorageService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {
    //Buscar o id passado como parâmetro na url
    var usuario = this.route.snapshot.params;
    console.log(usuario);
    this.id = +this.route.snapshot.paramMap.get("id");
    this.name = this.route.snapshot.paramMap.get("name");
    this.username = this.route.snapshot.paramMap.get("username");
    this.email = this.route.snapshot.paramMap.get("email");
    this.phone = this.route.snapshot.paramMap.get("phone");
    this.website = this.route.snapshot.paramMap.get("website");
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
    console.log("Has User");
    if(this.user.id == null){
      console.log("if");
      this.newUser();
    }else{
      console.log("else");
      this.updateUser();
    }
  }

  public newUser(){
    this.user.id = this.users[this.users.length - 1].id++;
    this.users.splice(this.users.length+1, 1, this.user)
  }

  public updateUser(){
    // console.log("Update")
    this.users.forEach(user => {
      // console.log("ForEach");
      if(this.getUserId(user) == this.user.id){
        // console.log("For Each if");
        this.users[this.users.indexOf(user)] = this.user;
        // console.log("User updated", user);
      }
    });
    // console.log("Users updated ", this.users)
  }

  public updateLocalStorage(){
    console.log("Update local storage");
    console.log(this.users)
    this.localStorageService.updateLocalStorage(this.users);
  }

  public getUserId(user: User){
    let index = this.users.indexOf(user);
    return this.users[index].id;
  }
}
