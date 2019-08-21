import { Component, OnInit, Input, Inject } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { User } from '../user/User';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { LocalStorageService } from 'src/app/local-storage.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  user: User;
  users: User[] = [];
  
  STORAGE_KEY = 'local_userlist';

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
    this.id = +this.route.snapshot.paramMap.get("id");
    this.name = this.route.snapshot.paramMap.get("name");
    this.username = this.route.snapshot.paramMap.get("username");
    this.email = this.route.snapshot.paramMap.get("email");
    this.phone = this.route.snapshot.paramMap.get("phone");
    this.website = this.route.snapshot.paramMap.get("website");
  }

  public onSubmit(){

    
    /*this.users.forEach(user => {
      if(user.id == this.id){
        console.log("Teste");
        user.name = this.name;
        user.username = this.username;
        user.email = this.email;
        user.phone = this.phone;
        user.website = this.website;
      }
    });*/

    console.log(this.users);
    /*this.localStorageService.updateLocalStorage(this.users);*/
  }

  

}
