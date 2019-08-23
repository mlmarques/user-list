import { Component, OnInit, Input, Inject, Output, EventEmitter } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { Router } from '@angular/router';

import { User } from '../../users/common/models/User';
import { LocalStorageService } from 'src/app/common/services/local-storage.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  
  STORAGE_KEY = 'local_userlist';

  @Input() users: User[] = [];

  @Output() clearStorage = new EventEmitter();
  @Output() loadStorage = new EventEmitter();

  constructor(@Inject(LOCAL_STORAGE)
    private storage: StorageService, 
    private localStorageService: LocalStorageService,
    private router: Router
  ) {}

  ngOnInit() {
    this.users = this.localStorageService.getAPI();
  }

  clear(){
    this.clearStorage.emit(event);
  }

  load(){
    this.loadStorage.emit(event);
  }

  public delete(user: User){
    let index: number = this.users.indexOf(user);
    this.users.splice(index, 1);
    this.localStorageService.updateLocalStorage(this.users);   
  }

  public edit(){}

}
