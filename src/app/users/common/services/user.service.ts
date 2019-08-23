import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../models/User';

@Injectable({providedIn: 'root'})
export class UserService{

    constructor(private http: HttpClient){}
    
    listUsers(){
        
        return this.http
            .get<User[]>('https://jsonplaceholder.typicode.com/users');
    }
}