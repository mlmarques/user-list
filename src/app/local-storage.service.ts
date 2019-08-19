import { Inject, Injectable, Input } from '@angular/core';
import { LOCAL_STORAGE, StorageService, SESSION_STORAGE } from 'ngx-webstorage-service';
import { User } from './list/user/User';

//Chave para acessar os dados no local storage
const STORAGE_KEY = 'local_userlist';

@Injectable()
export class LocalStorageService{
    users: User[] = [];

    //Injetando dependencia do local storage e referencia a storage utilizada
    constructor(@Inject(LOCAL_STORAGE) private storage: StorageService){}
    
    //Verificar se a local storage está sendo utilizada
    public verifyLocalStorageUse(){
        return this.storage.has(STORAGE_KEY);
    }

    //Gravar API na local storage
    public uploadAPI(users: User[]) : void{
        console.log(users);
        
        const currentUsers: User[] = this.storage.get(STORAGE_KEY) || [];

        currentUsers.push({
            id: 11,
            name: 'matheus',
            username: 'mmarques',
            email: 'mmarques@gmail.com',
            phone: '139987654321',
            website: 'mmarques.com.br'
        });        
        this.storage.set(STORAGE_KEY, currentUsers);
    }
    
}