import { Component, OnInit, Input, Inject } from '@angular/core';
import { User } from '../user/User';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { LocalStorageService } from 'src/app/local-storage.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Input() user: User;
  @Input() users: User[] = []
  
  STORAGE_KEY = 'local_userlist';

  name: string = "Matheus Marques";
  username = "mmarques";
  email = "mmarques@gmail.com";
  phone = "(13)98765-4321";
  website = "mmarques.com.br";

  
  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService, private localStorageService: LocalStorageService) {}

  ngOnInit() {
    console.log(this.user);
  }

  public onSubmit(){
    console.log("Teste");
  }

}
