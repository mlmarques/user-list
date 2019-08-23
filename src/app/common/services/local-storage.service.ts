import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

import { User } from '../../users/common/models/User';

const STORAGE_KEY = 'local_userlist';

@Injectable()
export class LocalStorageService{
    constructor(@Inject(LOCAL_STORAGE) private storage: StorageService){}
    
    public verifyLocalStorageUse(){
        return this.storage.has(STORAGE_KEY);
    }

    public uploadAPI(users: User[]) : void{
        const currentUsers: User[] = this.storage.get(STORAGE_KEY) || [];
        
        users.forEach(user => {
            currentUsers.push({
                id: user.id,
                name: user.name,
                username: user.username,
                email: user.email,
                phone: user.phone,
                website: user.website
            })
        });
        
        this.storage.set(STORAGE_KEY, users);
    }

    public getAPI(){
        return this.storage.get(STORAGE_KEY);
    }

    public updateLocalStorage(users: User[]){
        this.storage.clear();
        this.uploadAPI(users);
    }

    public clearStorage(){
        this.storage.clear();
    }
}