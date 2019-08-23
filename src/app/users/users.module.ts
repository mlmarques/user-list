import { NgModule } from '@angular/core';
import { UserComponent } from './user/user.component';
import { UserService } from './common/services/user.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { routing } from '../common/routes/app.routing';
import { UserFormComponent } from './user-form/user-form.component';
import { CommonModule } from '../common/common.module';

@NgModule({
    declarations: [
        UserComponent,
        UserFormComponent
    ],
    exports: [
        UserComponent,
        UserFormComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        CommonModule
    ],
    providers: [
        UserService
    ]
})
export class UserModule{}