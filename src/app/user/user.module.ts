import { NgModule } from '@angular/core';
import { UserComponent } from './user.component';
import { UserService } from './user.service';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    declarations: [
        UserComponent
    ],
    exports: [
        UserComponent
    ],
    imports: [
        BrowserModule
    ]
})
export class UserModule{}