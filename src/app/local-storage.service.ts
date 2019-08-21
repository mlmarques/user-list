import { Inject, Injectable, Input } from '@angular/core';
import { LOCAL_STORAGE, StorageService, SESSION_STORAGE, StorageTranscoders } from 'ngx-webstorage-service';
import { User } from './list/user/User';
import { map } from 'rxjs/operators';

//Chave para acessar os dados no local storage
const STORAGE_KEY = 'local_userlist';

@Injectable()
export class LocalStorageService{
    private userStorage: StorageService<any>;

    //Injetando dependencia do local storage e referencia a storage utilizada
    constructor(@Inject(LOCAL_STORAGE) private storage: StorageService){}
    
    //Verificar se a local storage está sendo utilizada
    public verifyLocalStorageUse(){
        return this.storage.has(STORAGE_KEY);
    }

    //Gravar API na local storage
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

    //Recuperar dados armazenados na local storage
    public getAPI(){
        return this.storage.get(STORAGE_KEY);
    }

    //Excluir dados na local storage
    public updateLocalStorage(users: User[]){
        //Limpa a local storage
        this.storage.clear();
        //Adiciona o array atualizado
        this.uploadAPI(users);
    }
}